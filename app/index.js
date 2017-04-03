import _ from 'lodash';

function component () {
    var element = document.createElement('div');

    /* lodash is required for the next line to work */
    element.innerHTML = _.join(['Hello','webpack'], ' ');

    return element;
}

document.body.appendChild(component());
let path = require('path');
let p=path.resolve(__dirname,'/dist')//即/dist
console.log(p+"h")