---
layout: post
title: Circuit Breaking in Ruby
tags:
- ruby
- work
---

### What is Circuit Breaking?

Imagine you've got a piece of code making multiple remote calls: some 3rd party, some internal. Then out of nowhere, you get a timeout error. Your whole stack collapses, and you get a raise exception in Bugsnag. Of course, we'd want our application to degrade gracefully. If it's network related issue, one way to make it degrade gracefully is to keep retrying the call instead of blowing up in the first sight of a network-related exception like `TimeoutError`.

Michael Nygard popularized the Circuit Breaker pattern to prevent this kind of catastrophic cascade. It's a pattern where you wrap those calls in a loop where it keeps retrying once it rescues a network-related exception.

Here's what it looks like using Ruby:

Use either `yammer/circuitbox` or the more straightforward `ooyala/retries`. Here's what it looks like with the `retries` gem:

```
exception_list = [
  HTTPClient::ReceiveTimeoutError,
  # etc.
]

with_retries(max_tries: 3, rescue: exception_list) do |attempt_number|
  # Call an external service that CAN be prone to failures
end
```

That'll keep retrying that block of code 3 times in a randomized interval. Even if it encounters raised errors in that exception list — a simple pattern to make your application work a little smoother.


