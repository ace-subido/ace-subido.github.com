source 'https://rubygems.org'

gem 'jekyll', "2.4.0"

gem 'bourbon', '4.1.1'
gem 'neat'

require 'json'
require 'open-uri'
versions = JSON.parse(open('https://pages.github.com/versions.json').read)

gem 'github-pages', versions['github-pages']

ruby "2.1.1"
