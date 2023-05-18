const express = require("express");
const axios = require("axios");

const app = express();
const port = 5001;

app.use(express.json());

app.get("/api/places", async (req, res) => {
  const { location, category } = req.query;
  const apiKey = "";

  try {
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/place/textsearch/json`,
      {
        params: {
          query: `${category} in ${location}`,
          key: apiKey,
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(port, () => {
  console.log(`Proxy server is running on port ${port}`);
});
