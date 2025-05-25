const express = require("express");
const ImageKit = require("imagekit");

const app = express();

const imagekit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,         // ✅ this must match exactly
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,       // ✅ this must match exactly
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT      // ✅ this must match exactly
});

app.get("/auth", (req, res) => {
  const authParams = imagekit.getAuthenticationParameters();
  res.json(authParams);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("ImageKit auth server running on port", PORT);
});
