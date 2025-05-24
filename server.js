// server.js
const express = require("express");
const ImageKit = require("imagekit");

const app = express();

const imagekit = new ImageKit({
  publicKey: process.env.IMAGEKIT_ID,
  privateKey: process.env.PRIVATE_API_KEY,
  urlEndpoint: process.env.IMAGEKIT_PUBLIC_URL_ENDPOINT,
});


app.get("/auth", (req, res) => {
  const authParams = imagekit.getAuthenticationParameters();
  res.json(authParams);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("ImageKit auth server running on port", PORT);
});
