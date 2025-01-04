


// const express = require("express");
// const bodyParser = require("body-parser"); 
// const cors = require("cors");
// const dotenv = require("dotenv");
// const AuthRouter = require("./routes/AuthRouter");
// const SongRoutes = require("./routes/SongRoutes");
// require("./Models/db");

// dotenv.config(); // Ensure proper invocation

// const app = express();
// const PORT = process.env.PORT || 9090;
 
// // Middleware 
// app.use(bodyParser.json());
// app.use(cors());


// // Routes
// app.use("/auth", AuthRouter);
// app.use("/api/songs", SongRoutes);

// app.get("/ping", (req, res) => {
//   res.send("PONG");
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });



const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const axios = require("axios"); // Add axios import
const AuthRouter = require("./routes/AuthRouter");
const SongRoutes = require("./routes/SongRoutes");
require("./Models/db");

dotenv.config(); // Ensure proper invocation

const app = express();
const PORT = process.env.PORT || 9090;

// Middleware
app.use(bodyParser.json());
app.use(cors()); 

// Route for new releases
app.get('/api/new_releases', async (req, res) => {
  try {
    const response = await axios.get('https://spotify-scraper2.p.rapidapi.com/new_releases', {
      params: { limit: 10, country: 'US', offset: 0 },
      headers: {
        'x-rapidapi-key': '6805479f88msh703adf83029f07cp167936jsn4a9e0b323c22',
        'x-rapidapi-host': 'spotify-scraper2.p.rapidapi.com',
      },
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Routes
app.use("/auth", AuthRouter);
app.use("/api/songs", SongRoutes);

app.get("/ping", (req, res) => {
  res.send("PONG");
});

// Single app.listen
app.listen(PORT, () => { 
  console.log(`Server is running on http://localhost:${PORT}`);
});
