---
title: 'AWS Budget Alerts Based on Cost'
slug: 'aws-budget-alerts-based-on-cost'
summary: 'How to setup an AWS Budget and get notified of forecasted cost overruns using AWS::Budgets::Budget'
colId: 60d0f077b69e2df6b324616c
id: 60edf0cd76984c12bf652a8d
createdAt: 'Tue Jul 13 2021 20:00:13 GMT+0000 (Coordinated Universal Time)'
updatedAt: 'Wed Feb 23 2022 16:15:49 GMT+0000 (Coordinated Universal Time)'
publishedOn: 'Wed Feb 23 2022 16:18:06 GMT+0000 (Coordinated Universal Time)'
author: kam-lasater
category: 
hidden: false
featured: false
public: Wed Jul 14 2021 00:00:00 GMT+0000 (Coordinated Universal Time)
image: https:&#x2F;&#x2F;uploads-ssl.webflow.com&#x2F;60d0f077b69e2d8f2d246168&#x2F;60edf34edabd24d29fa406fd_Screen%20Shot%202021-07-13%20at%204.10.34%20PM.png
thumbnail: https:&#x2F;&#x2F;uploads-ssl.webflow.com&#x2F;60d0f077b69e2d8f2d246168&#x2F;60edf34edabd24d29fa406fd_Screen%20Shot%202021-07-13%20at%204.10.34%20PM.png
---
If you have used AWS you know how costs can sneak up on you. I have experience getting a heart stopping bill at a previous startup. With Cyclic I&#39;ve decided I want to start adding controls and alerts from the start.

‍

I recently found that AWS added Cloud Formation support for Budgets ([AWS::Budgets::Budget](https:&#x2F;&#x2F;docs.aws.amazon.com&#x2F;AWSCloudFormation&#x2F;latest&#x2F;UserGuide&#x2F;aws-resource-budgets-budget.html)). You can create a quick budget to to notify you of either actual COST limits or FORECASTED cost limits. Here is a sample Cloud Formation example.

‍

I have also been working on setting up [spike.sh](https:&#x2F;&#x2F;spike.sh) to use for an incident management and alerting platform. They accept SNS webhooks. So two Cloud Formation stacks later we can now get the budgets.amazonaws.com principal to publish alerts to an SNS topic that fires an https webhook at our spike.sh integration URL. This will trigger an incident and alerts.

‍

Launch a budget into your account:

‍

Of course it wouldn&#39;t be AWS without a few sharp edges. So here are the caveats:

*   We are publishing the &quot;Launch Stack&quot; button templates on Github. However Cloud Formation only accepts s3 urls for template bodies
*   We are creating the S3 bucket to host the templates with Cloud Formation. However despite Requestor Pays being 7 years old there is no Cloud Formation support. Funny how Cfn requires S3 but then makes it hard to use Cfn to setup hosting of the templates ([github issue](https:&#x2F;&#x2F;github.com&#x2F;aws-cloudformation&#x2F;cloudformation-coverage-roadmap&#x2F;issues&#x2F;123))
*   SNS topic policies only allows named service principals eg: &#39;budgets.amazonaws.com&#39; for some reason &#39;\*&#39; is invalid.

‍

All code can be found in this github repository ([cyclic-software&#x2F;budget-sns-alerts](https:&#x2F;&#x2F;github.com&#x2F;cyclic-software&#x2F;budget-sns-alerts))

‍

Let us know what you think and if you find this helpful.
