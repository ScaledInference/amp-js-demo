# amp-js-demo

We’re excited to introduce you to Amp.ai and its potential to simply and autonomously drive business growth. For today’s simulation, you’ll create a sample Amp.ai project to maximize conversion rates on our Amped Mobile Store. You’ll be working with the Amp Console, which is a simple user interface that gives you high-level control of Amp and the decisions it makes.

Before you get started:
1. Create an Amp.ai account at https://amp.ai/signup
2. Download (or git clone) the repo from https://github.com/ScaledInference/amp-js-demo. Make sure you are getting the master branch.

## Demo Instructions
### Task #1: Integrate Amp with Your App
The first step for integrating Amp with the Mobile Store (your app) is to set up the basic website.
     



#### Set up the website locally:
``` javascript
npm install
npm run start
```

Visit http://localhost:8080 in a browser and verify that it loads correctly.

**Note that the integration process will not be complete until you complete Task #2.**


### Task #2: Create a Project
When you first open the Amp.ai Console, it will prompt you to create your first project. Once you do, the Console will generate a unique project key that you will use to connect the to Amp. You can copy your project key from the Console’s Integration page to paste into index.html.

To complete the integration process, open index.html. Replace <YOUR_PROJECT_KEY> with your new project’s key:
``` javascript
<script type='text/javascript' src='https://amp.ai/libs/<YOUR_PROJECT_KEY>.js'></script> 
```

### Task #3: Observe Events
Observe events are what Amp uses to learn about your application. They usually include a name and a set of properties that adds more information to the event. Amp tracks many default observe events. Indeed, if you refresh the page now, Amp will already begin observing some of these built-in events. You can also add custom observe events. For example, this simulation allows you to observe Connection, Location, Return Customers, and Time of Day contexts. 

Let’s observe some custom context. For your convenience, a context object is already created for you:
```
const ctx = context();
```

Use this line to send your context object to Amp:
```
amp.observe('UserContext', { context: ctx });
```

### Task #4: Make a Decision
Decide events let Amp make decisions between options to determine a policy - what options to use in different contexts to achieve a particular outcome. These are what take the guesswork out of optimization!

Let’s say you suspect that different properties of your app’s Cart affect your sale conversation rates. The properties of your Cart include the following variants:
```
ctaColor: [orange, blue, red]
btnSequence: ['add', 'addBuy', 'addQuick', 'addBuyQuick']
rushShipping: [0, 30, 120]
```
To let Amp decide the best options based on a given context, add the amp.decide call to these variants:
```
window.decision = amp.decide('AmpedCart', {
            ctaColor: [green, orange, blue, red],
            btnSequence: ['add', 'addBuy', 'addQuick','addBuyQuick'],
            rushShipping: [0, 30, 120]
          });
```

### Task #5: Observe the Outcome
Not only can you tell Amp to observe contexts, but you can also tell it to observe outcomes - an important step toward optimization. In other words, every time a sale is made, you want to send it to Amp so it can learn from that conversion. 

For this simulation, you will send sales from the Thank You page of our Mobile Store checkout process. Open app.js and locate the thank you case:
```
(case '#/thank_you':)
```

Add the following to send a Sale event to Amp:
```
amp.observe('Sale');
```
 
You should load the website a few times to send some sessions to Amp.


### Task #6: Turn on Optimization
At this point, the code has been fully integrated with Amp. That means it’s time to optimize! This is where you tell Amp to automatically apply the best policy in order to achieve a particular outcome - in our simulation case, increased sales. To do this, we need to create a metric, approve a decision, and allocate traffic, all in Amp.ai. 

A metric is what tells Amp to optimize your application. To add the Sale metric, go to the amp.ai Console. Because you have not yet created a metric, the Console will by default prompt you to do so. Enter the settings as they appear below:


Amp optimizes one type of decide events at a time, and it will only optimize events of this type if they are allocated for optimization. Other types of decide events that you do not allocate use their default options. To allocate a decision for optimization, click on the ⓘ icon to open the Console’s Project Info page. Click on the View/Edit option next to Decisions. Check the box to approve the AmpCart decision.

Amp only optimizes the percentage of application sessions you allocate. You can also enable traffic allocation on the Console’s Project Info page. To do so, click the Edit option next to Current Allocation and select a value between 0 and 99. Because you’ll want to be able to compare the optimized performance to a baseline performance of your app, we recommend an allocation of 80%.


### Task #7: Evaluate Your Application’s Performance
Your project is now fully set up for optimization. Visit the website a few times to simulate traffic. With each visit, Amp progressively learns and applies more and more effective policies. 

To evaluate your app’s “amped” performance, go to the Optimize page of the Console. From there, you will be able to see the performance data associated with our Sale metric, broken into allocated and not allocated sessions. You should see how Amp’s improved policy gradually increases sales over the baseline. Nice work, Amp! 
