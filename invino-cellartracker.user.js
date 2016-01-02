// ==UserScript==
// @name         Invino - CellarTracker Integration
// @namespace    http://www.invino.com/
// @version      0.1.2
// @description  Display CellarTracker search button on Invino product pages
// @match        https://www.invino.com/
// @match        https://www.invino.com/wines/*
// @grant        none
// ==/UserScript==
/* jshint -W097 */
'use strict';

var products = document.querySelectorAll (".products-name");

for (var J = 0;  J < products.length;  J++) {
    var product = products[J];
    //console.log(product);
    //Get Product Name
    var name  = product.textContent.split("\n")[1].replace(/^\s+/, '').replace(/\s+$/, '');
    name = name.split("'").join("%27");
    name = name.split('"').join("%22");
    name = name.split(" ").join("+");
    var url = "https://www.cellartracker.com/list.asp?fInStock=0&Table=List&iUserOverride=0&szSearch="+name;
    var zNode       = document.createElement ('div');
    zNode.innerHTML = '<button id="myButton" type="button" onclick="window.open(\''+url+'\');">'
        + '<img src="http://www.cellartracker.com/favicon2.ico"></button>'
    ;
    zNode.setAttribute ('id', 'myContainer');
    product.appendChild(zNode);
};
