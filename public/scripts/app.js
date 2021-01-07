"use strict";

console.log("I am app.");

var app = {
    tite: "Indecision App",
    subtitle: "This is some info",
    options: []
    //JSX - Javascript XML
};var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();
    console.log("Form submitted");

    var option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
    }
    console.log(app.options);
    render();
};

var onRemoveAll = function onRemoveAll(e) {
    e.preventDefault();
    app.options = [];
    console.log(app.options);
    render();
};

var appRoot = document.getElementById('app');
var numbers = [55, 101, 1000];

var render = function render() {
    var template = React.createElement(
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
        app.options.length > 0 ? "Here are your options" : "No Options",
        React.createElement(
            "p",
            null,
            "Number of options ",
            app.options.length
        ),
        React.createElement(
            "button",
            { onClick: onRemoveAll },
            "Remove All"
        ),
        React.createElement(
            "ol",
            null,
            app.options.map(function (item, index) {
                return React.createElement(
                    "li",
                    { key: index },
                    "Option: ",
                    item
                );
            })
        ),
        React.createElement(
            "form",
            { onSubmit: onFormSubmit },
            React.createElement("input", { type: "text", name: "option" }),
            React.createElement(
                "button",
                null,
                "Add Option"
            )
        )
    );
    ReactDOM.render(template, appRoot);
};

var user = {
    name: "Sona",
    age: "100",
    location: "New York"
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

render();
