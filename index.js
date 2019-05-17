const express = require("express");
const app = express();
const axios = require("axios");

const PORT = process.env.PORT || 4500;

/* 
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  // ovo se stavi da express servira index.html fajl ako taj isti express ne prepozna url rutu
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
 */
app.get("/forecast/:lat/:long", (req, res) => {
  const latitude = req.params.lat;
  const longitude = req.params.long;
  axios
    .get(
      "https://api.darksky.net/forecast/7c9fbc3a8ba764c77a3ad4a6053e7cda/" +
        latitude +
        "," +
        longitude +
        "?units=si"
    )
    .then(result => {
      // hourly scan
      const hourlyObj = {
        summary: result.data.hourly.summary,
        icon: result.data.hourly.icon
      };
      // daily scan
      const dailyArr = result.data.daily.data.map(x => {
        const importantInfo = {
          summary: x.summary,
          icon: x.icon,
          temperatureLow: x.temperatureLow,
          temperatureHigh: x.temperatureHigh,
          time: x.time
        };
        return importantInfo;
      });
      const dailyPushTo = {
        data: dailyArr,
        summary: result.data.daily.summary,
        icon: result.data.daily.icon
      };
      // location string edit
      const locationStringRaw = result.data.timezone;
      const locationStringMade = locationStringRaw.replace("/", " - ");
      // send back to client
      const objWithData = {
        location: locationStringMade,
        currently: result.data.currently,
        hourly: hourlyObj,
        daily: dailyPushTo,
        alerts: result.data.alerts[0]
      };
      res.send(objWithData);
    })
    .catch(err => {
      console.log(err);
      res.send(err);
    });
});

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});

app.listen(PORT, () => {
  console.log("Server is up on port " + PORT);
});
