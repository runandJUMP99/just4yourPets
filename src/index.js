import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

// app.post("/", function(req, res) {
//     var firstName = req.body.firstName;
//     var lastName = req.body.lastName;
//     var email = req.body.email;

//     var data = {
//         members: [
//             {
//                 email_address: email,
//                 status: "subscribed",
//                 merge_fields: {
//                     FNAME: firstName,
//                     LNAME: lastName
//                 }
//             }
//         ]
//     };

//     var jsonData = JSON.stringify(data);

//     var options = {
//         url: "https://us4.api.mailchimp.com/3.0/lists/fb5519babd",
//         method: "post",
//         headers: {
//             "Authorization": "steven1 6b75a27ce29a8276dadc5edb50451dde"
//         },
//         body: jsonData
//     };

//     request(options, function(error, response, body) {
//         if (error) {
//             res.sendFile(__dirname + "/failure.html");
//         }
//         else {
//             if (response.statusCode === 200) {
//                 res.sendFile(__dirname + "/success.html");
//             }
//             else {
//                 res.sendFile(__dirname + "/failure.html"); 
//             }
            
//         }
//     });
// });
