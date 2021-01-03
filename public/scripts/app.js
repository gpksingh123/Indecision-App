"use strict";

console.log("I am app.");

//only render the subtitle (and p tag) if subtitle exist - logical and operator
//render new p tag - if options.length > 0 "Here are your options" else "No Options"

var app = {
    tite: "Indecision App",
    subtitle: "This is some info",
    options: ['One', 'Two']
    //JSX - Javascript XML
};var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        "p",
        null,
        app.subtitle
    ),
    app.options.length > 0 ? "Here are your options" : "No Options"
);

var user = {
    // name: "Sona",
    age: "100"
    // location: "New York"
};

function getLocation(location) {
    if (location) {
        return React.createElement(
            "p",
            null,
            "Location: ",
            location
        );
    } else {
        return undefined;
    }
}

var userName = "Sona";
var userAge = "27";
var userLocation = "SF";
var templateTwo = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        user.name ? user.name : 'Anonymous'
    ),
    user.age && user.age >= 18 && React.createElement(
        "p",
        null,
        "Age: ",
        user.age
    ),
    getLocation(user.location)
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
