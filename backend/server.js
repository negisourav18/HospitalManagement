import app from "./app.js";
import cloudinary from "cloudinary";

cloudinary.v2.config({
  cloud_name: "diq9p8dfu",
  api_key: "454999182476988",
  api_secret: "MTVIzlJYun_daBKod1tN8Nnamro",
});

app.listen(4000
, () => {
  console.log(`Server listening at port 4000`);
});
