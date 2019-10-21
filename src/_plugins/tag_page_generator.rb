module Jekyll
  class TagPageGenerator < Generator

    safe true

    def generate(site)
      tags = site.tags.keys
      tags.each do |tag|
        tag_data = { tag: tag, posts: site.tags[tag] }
        site.pages << TagPage.new(site, site.source, tag_data)
      end
    end

  end
end

module Jekyll
  class TagPage < Page

    def initialize(site, base, tag_data)
      @site = site
      @base = base
      @dir  = File.join("tag", tag_data[:tag])
      @name = "index.html"

      process(@name)
      read_yaml(File.join(base, "_layouts"), "tag.html")
      data["tag"] = tag_data[:tag]
      data["posts"] = tag_data[:posts]
      data["title"] = "Tag: #{tag_data[:tag]}"
    end

  end
end
