
// main.js just a simple file for testing classes function & ....

import {window} from "./window.js"


let twin = new window("win1" , 120,40,400,400 , "twin");
twin.maximise = false;
twin.minimise = false;


twin.show();

console.log( twin.dom )