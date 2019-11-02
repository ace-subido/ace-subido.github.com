---
layout: post
title: Encountering Production Bugs
---

This week I encountered some features that I engineered, which broke in production, it kept me on my toes, but it was worth it to ship the feature correctly. A little collection of things I noted down:

- Time pressure is real. Writing something to make something work is different from writing to make it trustworthy, balance them both by keeping the feature scope to be smaller relative to the feature requirement.
- When you encounter a bug, don't just fix it, and it's unit test, write an integration test for it too.
- When using Ruby, you might be tempted to metaprogram a lot of stuff to make things lean, don't abuse it keep things readable, not too verbose but understandable.
- Don't abuse dynamic typing and `.try` you might get hurt with nil classes.
- A huge no-no when something is silently failing. Make sure error handling is top-notch, especially for background workers. Lift errors as much as you can to the user.
