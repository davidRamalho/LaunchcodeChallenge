# Launchcode Take Home Test

This test actually ended up being a lot of fun. If I had more time I would have liked to add some unit testing and to also make the front-end design more responsive and less broken. I also would have expanded the database to include users and allow for user login and logout. In addition I would have added constraints/validation to input data in order to reduce bugs. I also would have deployed the app. 

# Installing the Application

1) Run "npm install" on the both the backend and frontend directories, then follow the steps below for the backend and frontend servers.

2) Create a .env file as per the .envexample file. 
3) Create a postgreSQL database with name and password to match the .env file. 
4) Run the following commands from the backend directory: 
- knex migrate:latest
- knex seed:run

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

# Wireframe Planning

While planning the frontend for this application I used moqups.com in order to have a clear plan of approach. Link: https://app.moqups.com/hVsFCVbeXS/view/page/ad64222d5

# Contact

If you have any questions at all regarding the application, feel free to contact me either via e-mail or phone: 
Email: david.m.ramalho@gmail.com
Phone: (403)383-6567
