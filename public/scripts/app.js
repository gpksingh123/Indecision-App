'use strict';

var appRoot = document.getElementById('app');
var detailsBool = false;

var changeDetailsDisplay = function changeDetailsDisplay() {
    detailsBool = !detailsBool;
    render();
};
var render = function render() {
    var button = void 0;

    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Vibility Toggle'
        ),
        React.createElement(
            'button',
            { onClick: changeDetailsDisplay },
            detailsBool ? 'Hide details' : 'Show details'
        ),
        detailsBool && React.createElement(
            'div',
            null,
            React.createElement(
                'p',
                null,
                'Hey, There are some details you can see now.'
            )
        )
    );
    ReactDOM.render(template, appRoot);
};

render();
