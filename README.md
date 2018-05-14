# Mad-science-website-react front-end 

This is url of the website currently: @ https://madsciencebulgaria.github.io/

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

```
Node.js
```

####Technological stack 

* **VanillaJS**
* **[React](https://reactjs.org/)** - for UI management
* **[Material Design](https://getmdl.io/)** - for UI styling 
* **[Material Design Components](https://www.material-ui.com/)** - for UI styling components 
* **[React-transition-group](https://www.npmjs.com/package/react-transition-group)** - for animating transitions
* **[SASS](https://sass-lang.com/)** - for writing CSS 
* **[npm](https://www.npmjs.com/)** - for package management and build automation 
* **[React Router](https://reacttraining.com/react-router/)** - for routing client-side
* **[WebPack](https://webpack.js.org/)** - for bundling
* **[React-Localization](https://www.npmjs.com/package/react-localization)** - for translating the website 
* **[Firebase](https://firebase.google.com)** - for a database and hosting


###Styling 
* **Airbnb style Guide** - https://github.com/airbnb/javascript/tree/master/react
* **Google JavaScript Guide** - https://google.github.io/styleguide/javaguide.html

### Installing

A step by step series of examples that tell you have to get a development env running

When cloning the repository you need to do an 

```
npm install
npm install -g firebase-tools (for using the Firebase CLI) 
```

And change the back-end url in appSettings to your local runned back-end instance

```
AppSettings.json {
    backend-url: localhost:51010
}
```

###Starting the application 

```
npm start
```

## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

##Branches structure 
* **master** 


## Deployment

###GitHub Pages Deployment

Describe the process for deploying the testing application to github.io


###Firebase production deployment

In order to deploy the app in Google Firebase you have to run the following command in the console: 
```
npm run-script build
```
and after the build has finnished you can simply run: 
```
firebase deploy
```

## Versioning

We use [SemVer](http://semver.org/) for versioning.

## Authors

* **Bozhidar Gevechanov** - stil.2910@gmail.com
* **Didi Milikina** - didimilikina8@gmail.com 

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone who's code was used
