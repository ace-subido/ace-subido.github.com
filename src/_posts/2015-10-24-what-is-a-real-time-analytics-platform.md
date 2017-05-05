---
layout: post
title: What is a Real Time Analytics Platform?
---

It's been a few weeks/months since I've been plunged into this "Big Data" ecosystem, all I could sense was that
"Big Data" is a marketing term for problems that require "Distributed Frameworks" as solutions, much like how "Cloud" is a marketing term for how "Remote Servers" are provisioned.

I've heard the word "Real Time Analytics Platform" thrown around a lot, but what does that really mean? What is that anyway? What is Real Time Analytics? And what is a Real Time Analytics Platform?

I think people forgot it's meaning as time passes by, so let's get down to what it really means.

**Real Time Analytics**

Breakdown: Analytics is the discovery of meaningful patterns in data. Real Time adds “immediacy”. The combination of both means that "Real Time Analytics" is discovering meaningful patterns in data for something urgent:

- Outage map for a utility company that is updated immediately
- Target push at customers on geofence detection for retail
- Fraud detection systems for finance
- Emergencies such as forest fires and emergency call recordings for government owned utilities
- Social program fraud detection for government agencies
- Log analysis for bad patterns in high-tech companies
- Anonymised usage patterns for telco’s (if they want to sell it as data or use for internal analytics)

These are some example use cases that are urgent and require immediate attention.

To create an environment where you can do "Real Time Analytics", you’d need to safely work with 3 aspects of how your data flows into your system:

- Input - an event happens (new sale, new customer, someone enters a geofence, etc.)
- Process and Store Input - capture the data of the event, and analyze the data without leveraging resources that are dedicated to operations
- Output - consume this data without disturbing operations (reports, dashboard, etc.)

The 2nd and 3rd bullet is very important. It requires extensive use of background processes to achieve low-latency and high throughput to provide real time characteristics. In programming, we've all been taught to put really expensive operations behind another process/thread  (Resque/Sidekiq, micro-services architecture) instead of blocking everything until the operation is done.

Just like a normal controller class in a web app, it's not that complex and handling this won't be a problem.

But then again, let's take for example, a typical megacorporation. They'd procured the usual .NET/Oracle/SAP stack (as much as possible, no cloud, they're following some sort of security protocol).

To provide "Real Time Analytics", usually they’d have a plethora of ETL Background Processes/Workers with Excel/DB integrations, per department, running on any number of servers, each having their own fault-tolerance and scaling strategies. If the data requirements change, they’d have to go through this set of intertwined systems and change each one of them, make sure they don’t crash and push the changes back to production.

A normal controller class won't cut it anymore.

**Real Time Analytics Platform**

For our sample megacorporation, that current mosaic of stuff is their "Real Time Analytics Platform"

"Well, that setup will not help. It's not real-time unless it happens instantly!" - just to sidetrack a little bit; this actually won't happen. Many multi-department companies want to achieve that vague finish line called “Real Time Analytics” with a "Single Customer View" inside a room with a lot of screens displaying tons of dashboards. You got to define those things clearly first to get there.

Latency is as low as we can make it, but it's not just the speed, it's also the extensibility where you can easily change those set of intertwined systems based on requirements, which would probably change a lot during such a big undertaking. All departments should be together to work on this, or else it won't work.

If there's a great team at the megacorp; chances are, they’ll use bits and pieces of frameworks here and there instead of having a mosaic of stuff to help you get there.

If not, they’ll be reinventing a set of rules and guiding principles on code; how to scale, fault-tolerance, etc.

They’ll be reinventing a framework.

It’s hard enough to get great people to work with, but it’s harder if they’re working on this mosaic of apps that doesn’t have a solid framework. There are many good frameworks lying around, so learn the frameworks and leverage it.

To summarize, the frameworks that help blot out bullet point #2 are what people sell as "Real Time Analytics Platform"'s.

**PS: So, what's a good one?**

Personally, I won't endorse anything. Acquiring something that would solve something complex without knowing what really needs to be done will end badly. Ask the tech team first, they'd probably know.
