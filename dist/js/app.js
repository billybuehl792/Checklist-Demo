//const bootstrap = require('bootstrap');


$(() => {
    
    console.log("Document Ready!");

    // class Section {

    //     constructor() {
            
    //     }

    // }

    var sectionTemplate = document.getElementById('section-template');
    var itemTemplate = document.getElementById('item-template');

    var clon = sectionTemplate.content.cloneNode(true);
    document.getElementById('content').appendChild(clon);
});