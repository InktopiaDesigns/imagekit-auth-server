const express = require("express");
const ImageKit = require("imagekit");

const app = express();
console.log("PUBLIC:", process.env.IMAGEKIT_PUBLIC_KEY);
console.log("PRIVATE:", process.env.IMAGEKIT_PRIVATE_KEY);
console.log("ENDPOINT:", process.env.IMAGEKIT_URL_ENDPOINT);

const imagekit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
});


app.get("/auth", (req, res) => {
  const authParams = imagekit.getAuthenticationParameters();
  res.json(authParams);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("ImageKit auth server running on port", PORT);
});
