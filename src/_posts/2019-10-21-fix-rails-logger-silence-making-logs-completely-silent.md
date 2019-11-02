---
layout: post
title: 'Rails.logger.silence and threading'
tags:
- ruby
- work
---

So we have this block inside an initializer:

```
user_id_lookup: proc do |env|
  Rails.logger.silence do
    # Code for selecting a UserID based on an access token
  end
end
```

This is executed by a library called `message_bus`. MessageBus is a simple gem that allows your rails server to publish messages to subscribers.

### Problem

We introduced this silence block lately to avoid logging sensitive information such as tokens. The problem was, after a while, we noticed that the server wasn't logging anything at all!

### Debugging

Checking out the logs, we noticed that the logs always stop after it tries running that `user_id_lookup` block. We quickly tried removing that `Rails.logger.silence` block, and the logs went about on its way.

After much reading, it looks like `Rails.logger.silence` actually replaces the `log_level` of the `logger` during that block. Seeing that `message_bus` runs these `proc`'s in different threads, reassigning that `log_level` to a singleton like `Rails.logger` feels like entering a cave of dragons fighting over the same gold stash.

Example:

```
Thread 1 starts
Thread 1 gets the current Rails.logger level     (level 1)
Thread 1 silences the current Rails.logger       (level 0)
Thread 2 starts
Thread 2 gets the current Rails.logger level     (level 0)
Thread 1 returns back the old Rails.logger level (level 1)
Thread 1 finishes                                (level 1)
Thread 2 silences the current Rails.logger       (level 0)
Thread 2 returns back the old Rails.logger level (level 0)
Thread 2 finishes                                (level 0)
```

The way to solve this would be to instantiate a new `Logger` for that thread, instead of mutating the singleton `Rails.logger`. Another way would be to override `ActiveRecord::LogSubscriber#debug`, this makes me think of coding up a gem that can filter the params of a `WHERE` clause.
