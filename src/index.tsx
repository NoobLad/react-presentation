import * as React from "react";
import * as ReactDOM from "react-dom";
import {Counter} from "./Counter.tsx";

declare var PROD:boolean;
const prismjs = require('prismjs');
require('prismjs/components/prism-jsx');

Reveal.initialize({});

ReactDOM.render(<Counter/>, document.querySelector(".button-component"));

document.addEventListener('DOMContentLoaded', function (event) {
    setTimeout(() => {
        // hljs.initHighlightingOnLoad();
        const codes = document.querySelectorAll('pre code');
        for (var i = 0; i < codes.length; i++) {

        }
    }, 500);
});