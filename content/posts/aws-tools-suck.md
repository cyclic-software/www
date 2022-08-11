---
Name: 'AWS Tools Suck'
Slug: 'aws-tools-suck'
Summary: ''
---

If you have ever worked with AWS as a developer then you will know what I mean, AWS tools suck. They suck so bad there is an entire industry focused on solving for this pile of suck. For just Infrastructure as Code, for example, there are Terraform, Pulumi and Serverless. AWS is famous for &quot;listening to customers&quot;. So what gives? Why do their tools still feel clunky, complex and riddled with infuriating edge cases?  

  

### tldr

You, the developer, are not the customer.

  

The longer answer is a combination of several factors. Here are my three reasons for why things are the way they are.

  

### Reason 1: AWS never was a developer tools company

  

AWS never won based on having the best experience or tooling. They offered one powerful value proposition, you could shorten your project lead time by using their services. You no longer need to do capacity planning for the number of disks (s3), servers (ec2) or network capacity (egregious egress). Oh, and they were fanatical about availability.

  

### Reason 2: AWS doesn&#39;t sell based on Dev Ex

  

AWS is growing at least as faster than the cloud market as a whole \[1\], yet they have below average developer experience. The only way that this can happen is if their customers are purchasing for reasons other than quality of developer tools. If the decision maker cared about developer experience why do they keep choosing AWS? The only reasonable answer is the person picking doesn&#39;t prioritize Dev Experience over some other attributes of the vendor (that is for another post).

  

### Reason 3: If AWS wanted it they would have it

  

Given the near 1 billion dollar a week capital expense annual run rate AWS was at in Q4 of 2020 \[2\], if it was of strategic importance for them to solve for better tooling they would. This is not a case of &quot;not enough resources&#39;&#39;, this is a case of the project not getting the internal priority to invest in improvement.

  

### Conclusion

  

AWS continues to grow despite having bad tooling and developer experience. If it impacted their sales they would make it a priority. If they made it a priority to have great tooling, they would have it. The only conclusion is: bad tooling isn&#39;t affecting their sales. Therefore, sales decisions aren&#39;t being made at the level or for the reasons that developer tooling changes the outcome.

  

Which means AWS tools will continue to suck for the foreseeable future.

  
  
  

\[1\] [https:&#x2F;&#x2F;techcrunch.com&#x2F;2021&#x2F;08&#x2F;02&#x2F;cloud-infrastructure-market-kept-growing-in-q2-reaching-42b&#x2F;](https:&#x2F;&#x2F;techcrunch.com&#x2F;2021&#x2F;08&#x2F;02&#x2F;cloud-infrastructure-market-kept-growing-in-q2-reaching-42b&#x2F;)

\[2\] [https:&#x2F;&#x2F;www.platformonomics.com&#x2F;2021&#x2F;03&#x2F;follow-the-capex-oracle-fy21-q3-update&#x2F;](https:&#x2F;&#x2F;www.platformonomics.com&#x2F;2021&#x2F;03&#x2F;follow-the-capex-oracle-fy21-q3-update&#x2F;)

  

&quot; Considerations for Serverless Active-Active: Routing,considerations-for-serverless-active-active-routing,60d0f077b69e2df6b324616c,623b3aed20c9065ace10b837,Wed Mar 23 2022 15:21:17 GMT+0000 (Coordinated Universal Time),Tue Apr 19 2022 16:03:40 GMT+0000 (Coordinated Universal Time),Wed Jun 08 2022 20:06:23 GMT+0000 (Coordinated Universal Time),mike-korostelev,AWS,false,false,Thu Mar 24 2022 00:00:00 GMT+0000 (Coordinated Universal Time),https:&#x2F;&#x2F;uploads-ssl.webflow.com&#x2F;60d0f077b69e2d8f2d246168&#x2F;623b489a8dc82ac713edaba0\_Screen%20Shot%202022-03-23%20at%2012.19.24%20PM.png,https:&#x2F;&#x2F;uploads-ssl.webflow.com&#x2F;60d0f077b69e2d8f2d246168&#x2F;623b489a8dc82ac713edaba0\_Screen%20Shot%202022-03-23%20at%2012.19.24%20PM.png,Building active-active in multiple regions can be expensive and complex. Serverless-native applications can make it simpler to serve users globally and enable more effective recoveries with less effort.,&quot;

_(Part 1 of a series)_

Building active-active in multiple regions can be expensive and complex. Serverless-native applications can make it simpler to serve users globally and enable more effective recoveries with less effort.

Starting from the end user making an http request and assuming there are two identical instances of an application running in two AWS regions - this and next several posts will discuss considerations, tools and solutions for building serverless active-active architectures.

**Routing**
-----------

The first touchpoint for a request is DNS routing. This where the cloud DNS ([AWS Route53](https:&#x2F;&#x2F;aws.amazon.com&#x2F;route53&#x2F;)) connects the request to your application&#39;s endpoints - in whatever region they are in the world.

#### Which regional instance of the application to send the request to?

AWS Route53 lets you select a routing policy for DNS records. A regional policy will route users the closest geographic region ($0.70 per million queries). A latency policy will route to the the lowest query latency record ($0.60 per million queries). For high traffic web services, the TTL value should be considered as most web clients cache dns for the specified TTL.

If the record is configured as an alias to an AWS service (like cloudfront and api gateway) - the dns queries are free.

#### How to know that the instance in the region is actually healthy ✅ before routing the request?

If a region is down (and it&#39;s not even your fault), Route53 does not know not to send requests there. To make Route53 know the state of an endpoint, health checks can be configured. Depending on the config, a health check is somewhere between $0.50 - $2.00 per month. Two ways to configure a health check are:

*   Monitor an endpoint by continuously polling it from multiple regions - this will result in multiple requests per second to some endpoint where your application responds with some kind of 200. Since all these requests must be handled by something and can get expensive downstream from the traffic generated by the health check itself.
*   Monitor cloudwatch alarms - this lets you be more creative about what ‘healthy’ means and can go both ways on cost&#x2F;complexity. This option is likely going to have more lag than monitoring an endpoint directly.

Here the TTL is a more important consideration - since clients will cache dns - faster health-check polling intervals will not give you instantaneous routing switchover. So if users are actively using a service at the moment the switch over happens, you should have the expectation that they may still be hitting the failing endpoint until their dns cache expires.

**_The next few posts will discuss these and other considerations, approaches and dirty hacks for building a low overhead active-active strategy with serverless on AWS:_**

#### **Compute**

##### How to process the requests in both regions without having to pay for two computes?

##### How to scale capacity if suddenly a single regional application instance must pick up the slack for a whole other region’s worth of traffic?

#### **Data**

##### How to make sure the data created by either regional application instance is available to the other?

#### **Ops**

##### Human decisions are political decisions, politics takes time, in a disaster time is scarce - how to remove humans from the process?

##### How to manage infrastructure across multiple regions without multiplying operational overhead?

#### **Latency**

##### How to deal with eventual consistency and the fact that data replication is not instantaneous?

‍

&quot; Dad&#39;s Advice for How to Live,dads-advice-for-how-to-live,60d0f077b69e2df6b324616c,620d51d392f146f0cba97c8a,Wed Feb 16 2022 19:34:43 GMT+0000 (Coordinated Universal Time),Wed Mar 02 2022 17:54:17 GMT+0000 (Coordinated Universal Time),Wed Mar 02 2022 17:55:32 GMT+0000 (Coordinated Universal Time),kam-lasater,Company,false,false,Mon Feb 21 2022 00:00:00 GMT+0000 (Coordinated Universal Time),https:&#x2F;&#x2F;uploads-ssl.webflow.com&#x2F;60d0f077b69e2d8f2d246168&#x2F;621667437c7f8c36dd910873\_dads-advice-20220223-v2.png,https:&#x2F;&#x2F;uploads-ssl.webflow.com&#x2F;60d0f077b69e2d8f2d246168&#x2F;621667437c7f8c36dd910873\_dads-advice-20220223-v2.png,&quot;I was 16 and about to head off as the youngest member of a month-long wilderness sailing trip. The night before my departure my dad came into my room to check on my packing and inspect my gear. He got serious and gave me the following advice for how to stay alive, keep safe and make the most of my time.
