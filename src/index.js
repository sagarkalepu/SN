const app = require('express')();
const {apolloServer} = require('./graphql/app');

app.get("/", (req, res) => {
  res.send("<h1> hello </h1>");
})

app.listen(3000, (port) => {
  console.log("listening in port 3000");
})

module.exports = {expressServer:app};
