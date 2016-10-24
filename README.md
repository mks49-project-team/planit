# planit

Planit is a travel helper application where a group of friends can plan a trip together. It is a collaborative social planning app that is designed to facilitate a group trip.

## Getting Started

### Prerequisites

1. Run npm install to install the dependencies required for the app.

2. Run npm start to start the server.

3. Go to localhost:8000

or visit https://planit-demo.herokuapp.com/

###Built With

* [Angular](https://angularjs.org/)
* [POSTGRESQL](https://postgresql.org/)
* [Bootstrap](http://getbootstrap.com/)
* [Node](https://nodejs.org/en/)
* [Express](http://expressjs.com/)

### Client App Information
```
|-- Planit
    |-- .env
    |-- .gitignore
    |-- directoryList.md
    |-- favicon.ico
    |-- package.json
    |-- README.md
    |-- sample.env
    |-- client
    |   |-- index.html
    |   |-- trip.html
    |   |-- app
    |   |   |-- app.config.js
    |   |   |-- app.controller.js
    |   |   |-- app.module.js
    |   |   |-- common
    |   |   |   |-- auth
    |   |   |   |   |-- auth.controller.js
    |   |   |   |   |-- auth.html
    |   |   |   |   |-- auth.module.js
    |   |   |   |   |-- auth.service.js
    |   |   |   |-- search
    |   |   |       |-- search.controller.js
    |   |   |       |-- search.html
    |   |   |       |-- search.module.js
    |   |   |       |-- search.route.js
    |   |   |       |-- search.service.js
    |   |   |-- components
    |   |       |-- activities
    |   |       |   |-- activities.controller.js
    |   |       |   |-- activities.html
    |   |       |   |-- activities.module.js
    |   |       |   |-- activities.service.js
    |   |       |-- itinerary
    |   |           |-- itinerary.controller.js
    |   |           |-- itinerary.html
    |   |           |-- itinerary.module.js
    |   |           |-- itinerary.service.js
    |   |-- assets
    |       |-- bridge.jpeg
    |       |-- planit-logo.png
    |       |-- styles.css
    |-- server
        |-- server.js
        |-- controllers
        |   |-- activity.controller.js
        |   |-- auth.controller.js
        |   |-- index.js
        |   |-- itinerary.controller.js
        |   |-- search.controller.js
        |-- db
        |   |-- db.js
        |   |-- index.js
        |-- helpers
        |   |-- activityHelper.js
        |-- middlewares
        |   |-- placeholder.js
        |-- models
        |   |-- index.js
        |   |-- possibleActivities.js
        |   |-- possibleExpedia.js
        |   |-- savedActivities.js
        |   |-- savedExpedia.js
        |   |-- trip.js
        |-- routes
            |-- activity.router.js
            |-- auth.router.js
            |-- index.js
            |-- itinerary.router.js
            |-- search.router.js
```            

##Authors

- Oliver Wang
- Dianne Le
- Justin Biele
- Jongsoo Yoon

##License

ISC

##Acknowledgments

- Makersquare LA.
