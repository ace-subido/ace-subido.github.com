---
layout: post
title: BigDecimal vs. Float for Finance-related Software
---

There are countless blog posts and stack overflow explanations about this, figured I need to pin this on my own. They say writing is nature's best way of exposing your thinking. Check this example out:

```
require "bigdecimal"

# Float
php_gold_float = 0.00001144792038
gold_krw_float = 1962165.41

php_krw_float = php_gold_float * gold_krw_float

puts "#{php_krw_float.class} #{php_krw_float}"

# Big Decimal
php_gold_bd = BigDecimal.new("0.00001144792038")
gold_krw_bd = BigDecimal.new("1962165.41")

php_krw_bd = php_gold_bd * gold_krw_bd

puts "#{php_krw_bd.class} #{php_krw_bd.to_s('F')}"

# Output
Float 22.462713386070057
BigDecimal 22.4627133860700558
```

If you're a bank, or if you're supporting accounting software, you could potentially miscalculate thousands when using Float for computing monetary. So, make sure to use BigDecimal when you're dealing with anything that requires a high-degree of "sureness". With Ruby/Rails, you can use `:decimal` for columns containing this type of information.

Money, accounting, computing compounding interests = needs high precision, then use BigDecimal. Other than that, just use float.

Some gotcha's: With Ruby/Rails, when rendering an object with BigDecimal attributes over API Endpoints as JSON, it will render the numbers as a String, instead of a Float. Part of the reasoning behind this change could be found in this [discussion](https://github.com/rails/rails/issues/25017)

### Why does this happen?

Long version, read up on [IEEE specification to define floats](https://en.wikipedia.org/wiki/IEEE_floating_point#IEEE_754-2008). Short version: it stores a sign, a fraction and an exponent to represent a Float. It's a scientific notation for binary, because of that it's impossible to store exact numbers and decimal in Float.
