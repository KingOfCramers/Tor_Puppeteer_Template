String.prototype.replaceAll = function (unwanteds) {
    let str = unwanteds.reduce((agg, x) => {
        y = new RegExp(x, "g");
        agg = agg.replace(y, "");
        return agg;
    }, this);
    return str.trim();
};

String.prototype.replaceAll = function (unwanteds) {
    let str = unwanteds.reduce((agg, x) => {
        y = new RegExp(x, "g");
        agg = agg.replace(y, "");
        return agg;
    }, this);
    return str.trim();
};

Array.prototype.flatten = function() {
    var ret = [];
    for(var i = 0; i < this.length; i++) {
        if(Array.isArray(this[i])) {
            ret = ret.concat(this[i].flatten());
        } else {
            ret.push(this[i]);
        }
    }
    return ret;
};

const clean = item => item.replace(/\s\s+/g, ' ').trim();
const getLink = node => node.querySelector("a").href;
const getLinkText = node => clean(node.querySelector("a").textContent);

const getNodeFromDocument = query => document.querySelector(query);
const getNextNodeFromDocument = query => document.querySelector(query).nextSibling;
const getTextFromDocument = query => clean(!!document.querySelector(query) ? document.querySelector(query).textContent : "");
const getNextTextFromDocument = query => clean(!!document.querySelector(query) ? document.querySelector(query).nextSibling.textContent : "");
const getNextElementSiblingTextFromDocument = query => clean(!!document.querySelector(query) ? document.querySelector(query).nextElementSibling.textContent : "");
const makeArrayFromDocument = query => Array.from(document.querySelectorAll(query));
const makeCleanArrayFromDocument = query => Array.from(document.querySelectorAll(query)).map(x => clean(!!x.textContent ? x.textContent : ""));

const getFromNode = (node, query) => node.querySelector(query);
const getFromText = (node, query) => clean(!!node.querySelector(query) ? node.querySelector(query).textContent: '');
const getFromLink = (node, query) => node.querySelector(query).href;
const getNextMatch = (node, query) => node.querySelector(query).nextSibling.nodeValue;
const getNextElementSiblingText = query => clean(document.querySelector(query).nextElementSibling.textContent);
const getNodesFromArray = (arr, query) => arr.map(x => Array.from(x.querySelectorAll(query)));

const makeTextArray = (node, query) => Array.from(node.querySelectorAll(query)).map(x => clean(!!x.textContent ? x.textContent : ""));