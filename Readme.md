API application

This is the backend application which runs on port 3000. It is built on express

Prerequisites

1) Have npm and mongodb running in your system to have this application running

Setup

Mongodb data setup

1) Go to project folder and open terminal and run the following commands

mongoimport --db Welltok --collection article --file article.json --jsonArray

Run mongod to have mongodb running on the system
mongod

App setup
1) Go to project folder

2) Run 

npm install 

This should install mongodb driver, express and nodemon

3) Run 

npm start
