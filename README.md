# Travel Pin
Travel Map application made using MERN stack and Mapbox.

## Features

- Locate your favourite place using google maps.
- Users can add details and experience of the place selected.
- Save and mark your dream destination.
- Distinguish between each users using different color marker.

## Tech

This application uses a number of open source projects to work properly:

- [Node.js] - Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.
- [Express] -  Express.js is a back end web application framework for Node.js. It is designed for building web applications and APIs. 
- [React.js] - JSON Web Token is a proposed Internet standard for creating data with optional signature and/or optional encryption whose payload holds JSON that asserts some number of claims.
- [Mapbox] - Mapbox is an American provider of custom online maps for websites and applications.
- [MongoDB] - JSON Web Token is a proposed Internet standard for creating data with optional signature and/or optional encryption whose payload holds JSON that asserts some number of claims.

And of course this application itself is open source with every code available here in github.

## Installation

Requires [Node.js](https://nodejs.org/) v10+ to run.

Install the dependencies and start the server.

### Backend
```sh
cd api
npm install
npm run index.js
```

### Frontend
```sh
cd client
npm install
npm run start
```

## Screenshot

##### Login Page
![login](./screenshots/login.png "login")

##### Register Page
![register](./screenshots/register.png "register")

##### Main Page
![main](./screenshots/main.png "main")

##### Detail page
![chat](./screenshots/detail.png "Country chat")

## Development

Want to contribute? Great!

This application uses MERN stack for fast developing.
Make a change in your file and instantaneously see your updates!

The application requires a few environment variables such as
##### Backend
- [MONGO_URI] - Cloud database URI

##### Frontend
- [REACT_APP_MAPBOX] - Mapbox API.

## Note

- Need to provide environment variables in both api and client folder to run the application.The mandatory environment variables are mentioned in the development section.

<!-- ## License

MIT -->


