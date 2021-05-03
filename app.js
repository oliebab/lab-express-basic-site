const express = require("express");
const app = express();
const hbs = require("hbs");

app.use(express.static(__dirname + "/public"));
// the static folder will contain static files: like css, images, sounds, videos, front-end js (DOM) : WE MUST tell express explicitely where it is, and that we wanna allow the browsers to dowlonad files without extra permissions
app.set("view engine", hbs);
// above : use hbs to render html (super html features)
app.set("views", __dirname + "/views");
// hey express : our views are located in that folder

app.get("/", (request, response, next) => {
    response.render("home.hbs");
  
    // response.sendFile(__dirname + "/views/index.html"); // response.sendFile will send the provided file's content back text to the client. sendFile needs the absolute path to the file : i'm using __dirname instead of hardcoding it.
  });
  
  app.get("/about", (request, response) => {
    response.render("about.hbs");
    //   response.sendFile(__dirname + "/views/about.html");
  });
  
  app.get("/works", (request, response) => {
      response.render("works.hbs")
    // response.send("contact page");
    // response.send will send back text to the client
  });
  
//   app.get("/gallery", (request, response) => {
//     // response.send will send a formated JSON string back text to the client
//     response.json([{ name: "fugee" }, { name: "mina" }, { name: "kitty" }]);
//   });
  
  app.listen(3000); // this open a PORT on our server, allowing incomming HTTP request