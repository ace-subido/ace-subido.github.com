---
layout: post
title: Improving our WiFi at home
image: /img/blog/ourwifisetup-archer-c7.jpg
---

So, I'm in the process of trying to get the most of our internet setup at home. I've worked with Network Architects and ansible'd network configurations for large Hadoop clusters the frequently transfer terabytes, but sadly, I haven't sat down and fixed our internet at home. I'm a software engineer, and no means a hardcore Cisco Certified Network Engineer, so I decided to sit on this problem and improve our situation.

If you have slow internet, you can't just throwing money at the problem by upgrading your ISP subscription and shouting at customer service. You'll have to check off problems one by one. For me, I sat down and thought: I'll have to start by improving what I can improve on my side. Which means, the WiFi network within our home.

To give a short background, our current internet setup at home looks like this:

![](/img/blog/ourwifisetup.png)

Almost everyone probably has this simple setup, unless you have a mansion and you need to cover every inch of your house, including your garden and pool.

So, I open up my terminal and do some tests. Initial tests revealed that network between 2 local IP addresses in our network is both slow and experiences packet loss. In layman's terms: our wifi coverage and signal throughput generally suck. Beyond the terminal, it's pretty apparent. A LAN game of "Starcraft: Brood War" between 2 laptops connected on the same network via Wifi, to the same router, is pretty laggy.

So it's time to really improve our WiFi coverage.

#### What we bought and what we will buy

From the earlier diagram, "LinkSys Router" and "LinkSys Wifi Repeater" are ours, we bought them at PC Express. The router and repeater we have are very old Linksys models, RE1000 for the Repeater and WRT120 for the router. RE1000 was purchased around 2012 and the WRT120N was purchased around 2010. We plan to buy new ones, but should be under a specific budget: 8,000PHP for a router, and 8,000PHP for a repeater. I know that's sounds a lot, but I'm currently working from home and would need the internet at our house really worked up. What we plan to buy are the following:

#### For the router we chose the TP-Link Archer C7 V2

![](/img/blog/ourwifisetup-archer-c7.jpg)

[An extensive review was made on it](http://thewirecutter.com/reviews/best-wi-fi-router/) and it's pretty cheap compared to the other options. It's also tested against a multi-room house like ours.

#### For the repeater we chose the TP-Link RE580D WiFi Extender 

![](/img/blog/ourwifisetup-re580d.jpg)

Looking for a counterpart to the router, it seems that Netgear Nighthawk EX7000 or EX6200 takes the cake. But there's no way to purchase it that easily here in the Philippines, so I came across this TP-Link extender, and the [review's are good](http://www.tomsguide.com/us/best-wifi-extenders,review-2225.html)

### Optimizing the Network

But before we purchase this, I'll have to optimize our network first and do a benchmark. Here's what I found out about tinkering with our routers and such:

#### For The Main Router

- Depending on your ISP, it's best to set some DNS Servers on the main router. Google (8.8.8.8 and 8.8.4.4) and OpenDNS Servers (208.67.222.222 and 208.67.220.220) are best. Personally, we use PLDT, so I leave this blank. Using Google or OpenDNS as your DNS Servers seems a good idea but not for us. Based on my experience, for PLDT MyDSL Home connections, PLDT optimizes their connections with PLDT's DNS Servers. Otherwise, you get bogged down by a lot of "Resolving Host" issues. A minor compromise.
- On "Channel Width", as much as possible, set it to 40MHz wide channels. You get the best peformance out of your router. But only use this if all of your devices support 802.11n. Otherwise, just use the 20MHz default.
- Set your "Standard Channel" to some other channel that's not common with other Wifi Signals in your area. Use a Wifi scanner (install one in your Android phone) and scan your area for other Wifi signals, there you'll see the channels their using. If you set your "Standard Channel" to something uncommon, you'll get better reception and network performance since you're in a "less" crowded channel.

#### For Repeaters

- Anything infrastructure related should have Static IP's. So if you have Wifi repeaters in your home, set a static IP for them in the main router. This'll prevent them from having to look for an IP everytime they're booted, or their connection needs to be renewed. It makes resolving hosts faster as well. For Linksys routers just click on "DHCP Reservation" and look for your repeater repeater listed there. Check it and reserve an IP for it.
- Channel Width should be set as the same with the main router it's connected to.
- Double check that your repeater is also set on the same encryption as the main router.

#### For devices

- Unless you're doing something out of the norm, like remote tunnels to datacenters, don't set your DNS servers. Let the router supply them for you.

#### "What do you use to test internet speeds?"

I found Netflix's [fast.com](https://fast.com) to be much better in terms of UX and sensible defaults. It tries to simulate a download from Netflix's Global CDN, which is probably the use case for most of the sites I visit (google, youtube, reddit, facebook, hacker news, github, etc.). [Speedtest.net](https://speedtest.net) is great if you're testing specifics, but for the majority of the use-cases, it's too granular. The defaults assume I'm connecting to a local server. My browser is downloading a Dota 2 video from Youtube.com and my laptop is pushing a repo at Github.com, I'm not accessing some web page in Globe Makati. 

Here's a general report of my benchmarks, averaging result over 5 runs. This is on our PLDT Plan 1699:

- 12nn: 210Kbps top, 65Kbps average
- 9pm: 410Kbps top, 214Kbps average
- 12mn: 820Kbps top, 349Kbps average

I bet there are a lot more settings I've missed, and this is a work in progress. I'll post a part 2 once we get the new hardware.
