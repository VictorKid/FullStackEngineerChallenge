# Submission

This is my resule of the challenge project please read through to see what I have done in this project, thanks for your time!

## Description

- backend stacks used

  - I use `node` at the server side language express, postgresql, sequelize(orm)
  - I choose `express` as the http server framework
  - I use `postgreSQL` as the database
  - I use `sequelize` as the ORM

- frontend stacks used
  - I use `react` as the web app framework
  - I use `styled-components` as my css(styles) library
  - I use `react-router` to handling the SPA page routing
  - I use `axios` as my http client library

### backend design

I follow most of modern pattern with `src/index.js` as backend service entry point, with `routers` to centralized the routing management, and the separate `handlers` by feature to make the logics are easy to trace, I inject the `models` into `context`, in this case each `handler` can easily use the `models` to manipulate the db queries.

### frontend design

For the simplicity, I didn't use any state management library like `redux`, I only use `state`, `props`, `context` to manage the state change for the project. There're only two pages, I create the folder for each page, and for those components directly used by the page, I put them at same folder with the page. I also create a `components` folder to put common components used in this project. Finally there's `apis` folder that including all of API requests from client to server side.

### Assumptions

- Please create the database before running the backend project, and there's no mock data for the database, need to create it through the wen page manually.
- I didn't implement any RBAC feature, so there's no login API and page, anyone can be the admin to create new employee and assign the performance review.

### Demo

# Full Stack Developer Challenge

This is an interview challengs. Please feel free to fork. Pull Requests will be ignored.

## Requirements

Design a web application that allows employees to submit feedback toward each other's performance review.

_Partial solutions are acceptable._ It is not necessary to submit a complete solution that implements every requirement.

### Admin view

- Add/remove/update/view employees
- Add/update/view performance reviews
- Assign employees to participate in another employee's performance review

### Employee view

- List of performance reviews requiring feedback
- Submit feedback

## Challenge Scope

- High level description of design and technologies used
- Server side API (using a programming language and/or framework of your choice)
  - Implementation of at least 3 API calls
  - Most full stack web developers at PayPay currently use Java, Ruby on Rails, or Node.js on the server(with MySQL for the database), but feel free to use other tech if you prefer
- Web app
  - Implementation of 2-5 web pages using a modern web framework (e.g. React or Angular) that talks to server side
    - This should integrate with your API, but it's fine to use static responses for some of it
- Document all assumptions made
- Complete solutions aren't required, but what you do submit needs to run.

## How to complete this challenge

- Fork this repo in github
- Complete the design and code as defined to the best of your abilities
- Place notes in your code to help with clarity where appropriate. Make it readable enough to present to the PayPay interview team
- Complete your work in your own github repo and send the results to us and/or present them during your interview

## What are we looking for? What does this prove?

- Assumptions you make given limited requirements
- Technology and design choices
- Identify areas of your strengths
