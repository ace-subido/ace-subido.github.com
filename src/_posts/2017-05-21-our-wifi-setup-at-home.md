---
layout: post
title: Our Wifi setup at home
---

So, I'm in the process of trying to get the most of our internet setup at home. I've worked with Network Architects and ansible'd network configurations for large Hadoop clusters to pipe out petabytes, but sadly, I haven't sat down and fixed our internet at home. I'm a software engineer, and no means a hardcore Cisco Certified Network Engineer, but here's what I found out about tinkering with our routers and such. To give a short background, our current internet setup at home looks like this:

![](/img/blog/ourwifisetup.png)

### What we bought and what we will buy

"LinkSys Router" and "Wifi Repeater" are ours, we bought them at PC Express. The router and repeater we have are very old Linksys models, RE1000 for the Repeater and WRT120 for the router. RE1000 was purchased around 2012 and the WRT120N was purchased around 2010 model. We plan to buy new ones, but should be under a specific budget. 8,000PHP for a router, and 8,000PHP for a repeater. I know that's sounds a lot, but I'm currently working from home and would need the internet at our house really worked up. What we plan to buy are the following:

- [Router: TP-Link Archer C7 V2 (link for Lazada)](http://www.lazada.com.ph/tp-link-archer-c7-ac1750-1300mbps-dual-band-wireless-routerversion-2-6101453.html?ff=1). [An extensive review was made on it](http://thewirecutter.com/reviews/best-wi-fi-router/) and it's pretty cheap compared to the other options. It's also tested against a multi-room house like ours.
- [Repeater: TP-Link RE580D WiFi Extender (link for Lazada)](http://www.lazada.com.ph/tp-link-re580d-ac1900-wi-fi-range-extender-5-gigabit-port-3616855.html?ff=1). [Review's are favorable](http://www.tomsguide.com/us/best-wifi-extenders,review-2225.html)

### Optimizing the Network

But before we purchase this, I'll have to optimize our network first and do a benchmark. So here's a few things I encountered while optimizing our wifi network:

#### For The Main Router

- Depending on your ISP, it's best to set some DNS Servers on the main router. Google (8.8.8.8 and 8.8.4.4) and OpenDNS Servers (208.67.222.222 and 208.67.220.220) are best. Personally, we use PLDT, so I leave this blank. Using Google or OpenDNS as your DNS Servers seems a good idea but not for us. Based on my experience, for PLDT MyDSL Home connections, PLDT optimizes their connections with PLDT's DNS Servers. Otherwise, you get bogged down by a lot of "Resolving Host" issues. A minor compromise.
- On "Channel Width", as much as possible, set it to 40MHz wide channels. You get the best peformance out of it. But only use this if all of your devices support 802.11n. Otherwise, just use the 20MHz default.
- Set your "Standard Channel" to some other channel that's not common with other Wifi Signals in your area. Use a Wifi scanner (install one in your Android phone) and scan your area for other Wifi signals, there you'll see the channels their using. If you set your "Standard Channel" to something uncommon, you'll get better reception and network performance since you're in a "less" crowded channel.

#### For Repeaters

- Anything infrastructure related should have Static IP's. So if you have Wifi repeaters in your home, set a static IP for them in the main router. This'll prevent them from having to look for an IP everytime they're booted, or their connection needs to be renewed. It makes resolving hosts faster as well. For Linksys routers just click on "DHCP Reservation" and look for your repeater repeater listed there. Check it and reserve an IP for it.
- Channel Width should be set as the same with the main router it's connected to.
- Double check that your repeater is also set on the same encryption as the main router.

#### For devices

- Unless you're doing something out of the norm, like remote tunnels to datacenters, don't set your DNS servers. Let the router supply them for you.

I bet there are a lot more settings I've missed, and this is a work in progress.
