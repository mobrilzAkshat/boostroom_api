
const Express = require("express");
const app = Express();
// const publicRoute = require('./routes/publicRoute');
const privateRoute = require("./routes/privateRoutes");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");

app.use(cors())
app.use(bodyParser.json())
app.use(Express.json());
// app.use(publicRoute);
app.use(privateRoute)
app.use(morgan('combined'));

// Define the root route at the end
app.get('/', (request, response) => {
  response.json({
    message: 'Works',
  });
});

const PORT = 3001

app.listen(PORT, () => {
    console.log(`listening to port ${PORT}`);
});