# Setting Up Mean.js on Shippable and Heroku

One of the easiest ways to get started with web application development nowadays is to bootstrap your project with full-stack JavaScript frameworks. Node.js has made server-side JavaScript a reality, and a large portion of users choose to use the Express framework on top of Node to easily create REST routes. For persistence, add in MongoDB's JSON-like storage and the popular Mongoose ORM for Node. On the front end, we add Angular.js, a powerful and versatile SPA framework. This is the MEAN stack, and it is a popular and powerful option for creating single-page applications in end-to-end JavaScript.

If you're just starting out with application development, it is advisable to create a project from scratch in order to understand how all of the components function. However, if you already know what you're doing, application boilerplates and generators can certainly supercharge your workflow, while ensuring that you adhere to best practices for structuring your application. Let's set up Mean.js, a new boilerplate from the creators of Mean.io, and see just how quickly we can get a testable full-stack application running on Shippable and Heroku.

Prerequisites:

* MongoDB installed
* Node.js and npm installed
* Bower installed
* Grunt and Grunt CLI installed
* Heroku account and Heroku CLI installed
* Github account and git installed
* Shippable account  (of course)

## Generating with Yeoman

Yeoman is a popular boilerplate generator for JavaScript projects. Mean.js has an official Yeoman generator, and it is the recommended way to create a Mean.js project. To install Yeoman, simply:

    sudo npm i -g yo generator-meanjs

This installs Yeoman, available via the `yo` command, and the Yeoman generator for Mean.js. Now create a directory for this project, cd into it, and run the generator:

    mkdir shippable-mean
    cd shippable-mean/
    yo meanjs

Yeoman will walk you through the steps to create the project. We're going to name the project shippable-mean. Write whatever you like for a description and keywords. Select "Yes" for generating the example articles module. To keep it simple, we will not include any of the optional AngularJS modules. Hit enter and Yeoman will generate a complete boilerplate application and perform the necessary installations.

With the project generated, you should be able to run your application right away. Simply execute `grunt` and you should get a message confirming that your application is running on port 3000. Navigate to http://localhost:3000 in your browser and you should see the Mean.js welcome page.

## Uploading to GitHub

Now that we have a running application, we can hook it up to GitHub. Run `git init` in the project directory to initalize a local repository. Then, create a new empty repository on GitHub and call it shippable-mean. Copy the remote url provided to your clipboard, then run the following command:

    git remote add origin <your_remote_url>

Now that the repository is linked, push everything up to GitHub:

    git add -A
    git commit -m "Initial commit"
    git push origin master

Navigate to the project on GitHub to confirm that it has been pushed.

## Build Project on Shippable

Since our generated project already comes with a .travis.yml file and a simple test suite, we can build it on Shippable without modifying it. Log in to Shippable and click New Project on the sidebar. Enable the repository from your linked GitHub account. Then, click the project name on the sidebar and click "Run this project" to run the build. The build should pass. Hooray!

## Automatic Deployment to Heroku

To have true continuous integration, we want our project to automatically deploy to our PaaS provider when we trigger a successful build. Mean.js already includes the necessary Procfile and db config settings to deploy to Heroku. First, you must add your Shippable deploy key to your Heroku account. On Shippable.com, click on the settings tab at the top, then click the "Deployment key" tab. Copy the SSH key there onto your clipboard, and navigate to Heroku. Click your account image and select "Account" in the dropdown. Scroll down to "SSH Keys" and paste the key where it says "Add new SSH key...".

Next, create the app on Heroku. On your dashboard, click "Create a new app" and give it a name. Next, click on the app in your dashboard and click "Get add-ons". We're going to add a MongoLab sandbox instance to the app, since the Mean.js config checks for the MongoLab environment variable. Click MongoLab in the add-ons marketplace, and add it to your new app.

Now, we can add the command that will deploy our application to Heroku. First, let's rename .travis.yml to shippable.yml, since that's what we're using.

    mv .travis.yml shippable.yml

On Heroku, click on your app in the dashboard and click on the "Settings" tab. Copy the Git Url from the Info section into your clipboard. Now, open your shippable.yml in a text editor, and add the following code to the bottom:

    after_success:
      - git push <your_git_url> master

Why isn't this working?
