var request = require('request');
const dhost=process.env.NGINX_SERVICE_HOST;
//const dhost='measureservice';
const dport=process.env.NGINX_SERVICE_PORT;
//const dport='measureport';
const apiKey = process.env.ZIPCODE_API_KEY || "hkCt1nW1wF1rppaEmoor7T9G4ta7R5wFSu8l1dokNz8y53gGZHDneWWVosbEYirC";
const zipCodeURL = 'http://' + dhost + ':' + dport + '/';
console.log(zipCodeURL);

var distance = {
   find: function(req, res, next) {
       request(zipCodeURL + '/index.html',
       function (error, response, body) {
           if (!error && response.statusCode == 200) {
               response = body;
               res.send(response);
           } else {
               console.log(response.statusCode + response.body + body);
               res.send({body: -1});
           }
       });

   }
};

module.exports = distance;
