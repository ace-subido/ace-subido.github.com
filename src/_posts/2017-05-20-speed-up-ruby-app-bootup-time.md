---
layout: post
title: Speed up Ruby app bootup time
---

I frequently work with a large ruby application, and whenever I run `rspec path/to/single_unit_test.rb` in a Rails application, it takes 2-3 seconds before the test starts. This is because of the amount of source files that are involved in the application. Fortunately, Shopify released a gem called [`bootsnap`](https://github.com/shopify/bootsnap).

- The short story: it speeds up ruby app boot time. Useful for large monolithic applications. Ruby apps slow down if you `require` a lot of source files, so it speeds things up by doing applying some optimizations (compilation caching, YAML optimzations, etc.)
- [The long explanation, found here](https://engineering.shopify.com/235340559-bootsnap-optimizing-ruby-app-boot-time)

Simplest setup for a Rails 5.1.1 app (as of `bootsnap 0.2.14`).

```
# Gemfile

gem 'bootsnap'

# bin/bundle

require 'bootsnap'
Bootsnap.setup(
  cache_dir: 'tmp/cache',
  development_mode: ENV['RAILS_ENV'] == 'development',
  load_path_cache: true,
  autoload_paths_cache: true,
  disable_trace: false,
  compile_cache_iseq: true,
  compile_cache_yaml: true,
)
```

It plays nicely with spring by speeding up the pre-fork and post-fork. Definitely a gem worth watching out for.
