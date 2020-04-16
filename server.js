'use strict';
console.log('Server-side code running');

const express = require('express');
const fs = require("fs");
const app = express();
const bodyParser = require('body-parser')

// load command line arguments
const version = process.argv[2];

let accepted_versions = ["v1"];
let version_ok = accepted_versions.includes(version)

if (version_ok == false) {
    console.log('please select one of the following versions:');
    console.log(accepted_versions);
    console.log('you selected:');
    console.log(version);
    process.exit();
}

console.log('chosen data version:')
console.log(version);

function next_item_id(a_json) {
    let result = "the_end";
    for (let key in a_json) {
        let value = a_json[key];
        if (value == false) {
            result = key;
            break;
            }
        }

    return version + '---' + result;
    }


// load previous annotations
const json_path_annotations = `data/${version}/annotations.json`;
var contents = fs.readFileSync(json_path_annotations);

// Define to JSON type
let jsonContent = JSON.parse(contents);
console.log('loaded JSON from');
console.log(json_path_annotations);

// serve files from the public directory
app.use(express.static('public'));

// start the express web server listening on 8080
app.listen(8080, () => {
    console.log('please go in your browser to http://localhost:8080/');
});

// serve the homepage
app.get('/', (req, res) => {
    // create index.html
    //TODO: run function to go correct annotation item immediately
    res.sendFile(__dirname + '/index.html');
});


// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

// Access the parse results as request.body
app.get('/clicked', function (req, res) {

    // get annotated identifier and participants and subevents
    let identifier = req.query["identifier"];
    let link_quality = req.query["link_quality"];
    let proposal = req.query["proposal"];

    // update JSON and write to disk
    jsonContent[identifier] = [link_quality, proposal];
    let data = JSON.stringify(jsonContent);
    fs.writeFileSync(json_path_annotations, data);

    // get next identifier to annotate
    let next_id = next_item_id(jsonContent);

    console.log('\n');
    console.log('## new annotation:');
    console.log(identifier);
    console.log(link_quality);
    console.log(proposal);

    res.send(next_id);

});

app.get('/start', function(req, res) {

    // get next identifier to annotate
    let next_id = next_item_id(jsonContent);
    res.send(next_id);
});
