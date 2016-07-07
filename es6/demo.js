/**
 * Created by lenovo on 2016/7/6.
 */
    //import
//es5
var React = require('react');
var Router = require('react-router');

var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute
//es6
import React from 'react';


//export
//es5
function  Add(x){
    return x+x;
}
module.exports = Add;
//es6
function  Add(x){
    return x+x;
}
export default Add;

//class
