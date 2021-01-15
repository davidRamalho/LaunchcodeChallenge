# Launchcode Take Home Test
# Planning and Project Decisions

When planning on how to tackle the challenge I first did some research on how to go about creating the database to allow for migrations and seeding. I decided to use knex as it seems to be a widely used framework and easy to use. However, I had never used it before, so that ate up some research time. 

While planning the ERD for the databse I used moqups.com. Link: https://app.moqups.com/hVsFCVbeXS/view/page/ad64222d5

I decided to only include 12 airports in the database for ease of use. However, with more time I would have liked to connect the application with a flights API (Google Flights for example), in order to have more realistic data. 

If I had more time I would have liked to add some unit testing and to also make the front-end design more responsive and less broken. I also would have expanded the database to include users and allow for user login and logout. In addition I would have added constraints/validation to input data in order to reduce bugs. I also would have deployed the app. 

# Installing the Application

1) Run "npm install" on the both the backend and frontend directories, then follow the steps below for the backend and frontend servers.

2) Create a .env file as per the .envexample file. 
3) Create a postgreSQL database with name and password to match the .env file. 
4) Run the following commands from the backend directory: 
- knex migrate:latest
- knex seed:run

NOTE: The application only runs with PostgreSQL. If you do not have Postgre installed globally, please do that first. 

# Running the Application

Backend Server:
Run the backend server first by opening the directory LaunchcodeChallenge/backend/ on your terminal of choice and running: 
"node server.js"

Frontend Server: 
To run the frontend server first open the directory LaunchcodeChallenge/frontend/ on your terminal of choice and run:
"npm start" 

# Tech Stack

- Front-end: React, Axios, Antd, CSS.
- Back-end: Node, Knex, Express. 

# Contact

If you have any questions at all regarding the application, feel free to contact me either via e-mail or phone: 
Email: david.m.ramalho@gmail.com
Phone: (403)383-6567
