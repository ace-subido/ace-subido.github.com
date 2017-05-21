---
layout: post
title: Our Wifi setup at home
---

So, I'm in the process of trying to get the most of our internet setup at home. I've worked with Network Architects and ansible'd network configurations for large Hadoop clusters to pipe out petabytes, but sadly, I haven't sat down and fixed our internet at home. I'm a software engineer, and no means a hardcore Cisco Certified Network Engineer, but here's what I found out about tinkering with our routers and such. To give a short background, our current internet setup at home looks like this:

![](/img/blog/ourwifisetup.png)

"LinkSys Router" and "Wifi Repeater" are ours, we bought them at PC Express. You might have a similar one, here's a few things I encountered while optimizing my network:

### For The Main Router

- Depending on your ISP, it's best to set some DNS Servers on the main router. Google (8.8.8.8 and 8.8.4.4) and OpenDNS Servers (208.67.222.222 and 208.67.220.220) are best. Personally, we use PLDT, so I leave this blank. Using Google or OpenDNS as your DNS Servers seems a good idea but not for us. Based on my experience, for PLDT MyDSL Home connections, PLDT optimizes their connections with PLDT's DNS Servers. Otherwise, you get bogged down by a lot of "Resolving Host" issues. A minor compromise.
- On "Channel Width", as much as possible, set it to 40MHz wide channels. You get the best peformance out of it. But only use this if all of your devices support 802.11n. Otherwise, just use the 20MHz default.
- Set your "Standard Channel" to some other channel that's not common with other Wifi Signals in your area. Use a Wifi scanner (install one in your Android phone) and scan your area for other Wifi signals, there you'll see the channels their using. If you set your "Standard Channel" to something uncommon, you'll get better reception and network performance since you're in a "less" crowded channel.

### For Repeaters

- Anything infrastructure related should have Static IP's. So if you have Wifi repeaters in your home, set a static IP for them in the main router. This'll prevent them from having to look for an IP everytime they're booted, or their connection needs to be renewed. It makes resolving hosts faster as well. For Linksys routers
- Channel Width should be set as the same with the main router it's connected to.
- Try to give it a different name, so as not to litter SSID's on each device.
- Double check that your repeater is also set on the same encryption.
