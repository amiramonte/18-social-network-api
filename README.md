# NoSQL: Social Network API 


## Table of contents

- [Description](#description)
- [Deployed Website](#deployed-website)
- [Technologies](#technologies)
- [Deployment](#deployment)
- [Credits](#credits)

---

## Description

This project was built to help reinforce the following skills:

- Node.js
- Express.js
- MongoDB
- Mongoose

---


## Deployed Website

- [Heroku Deployed E-Commerce Back End](https://serene-beach-57426.herokuapp.com/)

---


## Technologies

Project is created with:

- [JavaScript](https://www.javascript.com/)
- [Bootstrap](https://getbootstrap.com/)
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [Sequelize ORM](https://sequelize.org/)


---

## Deployment

- Copy the repository from Github
- Navigate to the folder you would like to store this repo in on your local machine
- git clone the repo into your preferred folder
- open the repo in your preferred source code editor 
- In your terminal or command line interface, type `npm i`
- Once the appropriate packages have downloaded, initialize the program by navigating to your terminal and typing in `node server.js` or `npm start`
- Once you receive a response that the server is operational in your terminal or command line interface, you can navigate to http://localhost:3001/ on your browser to use the code locally
- Use the following URLs to view the seeded data:
  - `http://localhost:3001/api/categories`
  - `http://localhost:3001/api/products`
  - `http://localhost:3001/api/tags` 

---

## Credits
  
#### Alex Miramontes - Jr. Web Developer

[Github](https://www.github.com/amiramonte)





## Mock Up

The following animations show examples of the application's API routes being tested in Insomnia.

The following animation shows GET routes to return all users and all thoughts being tested in Insomnia:

![Demo of GET routes to return all users and all thoughts being tested in Insomnia.](./Assets/18-nosql-homework-demo-01.gif)

The following animation shows GET routes to return a single user and a single thought being tested in Insomnia:

![Demo that shows GET routes to return a single user and a single thought being tested in Insomnia.](./Assets/18-nosql-homework-demo-02.gif)

The following animation shows the POST, PUT, and DELETE routes for users being tested in Insomnia:

![Demo that shows the POST, PUT, and DELETE routes for users being tested in Insomnia.](./Assets/18-nosql-homework-demo-03.gif)

In addition to this, your walkthrough video should show the POST, PUT, and DELETE routes for thoughts being tested in Insomnia.

The following animation shows the POST and DELETE routes for a user’s friend list being tested in Insomnia:

![Demo that shows the POST and DELETE routes for a user’s friend list being tested in Insomnia.](./Assets/18-nosql-homework-demo-04.gif)

In addition to this, your walkthrough video should show the POST and DELETE routes for reactions to thoughts being tested in Insomnia.



## Grading Requirements

This homework is graded based on the following criteria:

### Deliverables: 10%

* Your GitHub repository containing your application code.

### Walkthrough Video: 37%

* A walkthrough video that demonstrates the functionality of the social media API must be submitted, and a link to the video should be included in your README file.

  * The walkthrough video must show all of the technical acceptance criteria being met.

  * The walkthrough video must demonstrate how to start the application’s server.

  * The walkthrough video must demonstrate GET routes for all users and all thoughts being tested in Insomnia.

  * The walkthrough video must demonstrate GET routes for a single user and a single thought being tested in Insomnia.

  * The walkthrough video must demonstrate POST, PUT, and DELETE routes for users and thoughts being tested in Insomnia.

  * Walkthrough video must demonstrate POST and DELETE routes for a user’s friend list being tested in Insomnia.

  * Walkthrough video must demonstrate POST and DELETE routes for reactions to thoughts being tested in Insomnia.

### Technical Acceptance Criteria: 40%

* Satisfies all of the preceding acceptance criteria plus the following:

  * Uses the [Mongoose package](https://www.npmjs.com/package/mongoose) to connect to a MongoDB database.

  * Includes User and Thought models outlined in the homework instructions.

  * Includes schema settings for User and Thought models as outlined in the homework instructions.

  * Includes Reactions as the `reaction` field's subdocument schema in the Thought model.

  * Uses functionality to format queried timestamps properly.

### Repository Quality: 13%

* Repository has a unique name.

* Repository follows best practices for file structure and naming conventions.

* Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

* Repository contains multiple descriptive commit messages.

* Repository contains a high-quality README with description and a link to a walkthrough video.

### Bonus: +10 Points

* Application deletes a user's associated thoughts when the user is deleted.

## Review

You are required to submit BOTH of the following for review:

* A walkthrough video demonstrating the functionality of the application and all of the acceptance criteria being met.

* The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.

---
© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
