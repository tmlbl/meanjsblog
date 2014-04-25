# Setting Up Mean.js on Shippable and Heroku

One of the easiest ways to get started with web application development nowadays is to bootstrap your project with full-stack JavaScript frameworks. Node.js has made server-side JavaScript a reality, and a large portion of users choose to use the Express framework on top of Node to easily create REST routes. For persistence, add in MongoDB's JSON-like storage and the popular Mongoose ORM for Node. On the front end, we add Angular.js, a powerful and versatile SPA framework. This is the MEAN stack, and it is a popular and powerful option for creating single-page applications in end-to-end JavaScript.

If you're just starting out with application development, it is advisable to create a project from scratch in order to understand how all of the components function. However, if you already know what you're doing, application boilerplates and generators can certainly supercharge your workflow, while ensuring that you adhere to best practices for structuring your application. Let's set up Mean.js, a new boilerplate from the creators of Mean.io, and see just how quickly we can get a testable full-stack application running on Shippable and Heroku.

Prerequisites:

	* MongoDB installed
	* Node.js and npm installed
	* Heroku account and Heroku CLI installed
	* Github account and git installed
	* Shippable account  (of course)

## Installing Yeoman

Yeoman is a popular boilerplate generator for JavaScript projects. Mean.js has an official Yeoman generator, and it is the recommended way to create a Mean.js project. To install Yeoman, simply:

    sudo npm i -g yo


