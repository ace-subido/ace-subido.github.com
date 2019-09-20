# acesubido.net

My personal website, portfolio and wiki. Uses:

- `jekyll` for building the site
- `sass` for building the CSS
- `kramdown` for markdown
- `rouge` for syntax highlighting

## Development

```
$ brew install direnv
$ direnv allow

# Development Mode
$ jekyll s

# Update production site
$ rake deploy

# Write a draft
$ jekyll draft "<title>"

# Publish a draft
$ jekyll publish "_drafts/<title>"
```

## Syntax Highlighting

```
$ rougify style base16.solarized.dark > src/_sass/theme/vendors/_rougify_solarized.scss
```
