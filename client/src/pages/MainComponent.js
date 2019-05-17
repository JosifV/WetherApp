import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";
import Currently from "../components/Currently";
import Alerts from "../components/Alerts";
import NextSevenDays from "../components/NextSevenDays";
import "./MainComponent.scss";

const MainComponent = () => {
  const [alertArr, setAllertArr] = useState([]);
  const [currentlyObj, setCurrentlyObj] = useState({});
  const [dailyObj, setDailyObj] = useState({});
  const [hourlyObj, setHourlyObj] = useState({});
  const [locationStr, setLocationStr] = useState("");

  useEffect(() => {
    // find location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      console.log("location not supported");
    }
    function error(msg) {
      console.log("error in geolocation");
    }
    function success(position) {
      const lats = position.coords.latitude;
      const lngs = position.coords.longitude;
      console.log("userLatitude " + lats);
      console.log("userLongitude " + lngs);
      // fetch data
      axios
        .get("/forecast/" + lats + "/" + lngs)
        .then(resp => {
          console.log(resp.data);
          const info = resp.data;
          setAllertArr(info.alerts);
          setCurrentlyObj(info.currently);
          setDailyObj(info.daily);
          setHourlyObj(info.hourly);
          setLocationStr(info.location);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }, []);
  return (
    <div className="divMain">
      <Header />
      {currentlyObj ? (
        <div>
          <Currently
            hourly={hourlyObj.summary}
            locationStr={locationStr}
            {...currentlyObj}
          />
          {dailyObj ? <NextSevenDays {...dailyObj} /> : null}
          {alertArr ? <Alerts {...alertArr} /> : null}
        </div>
      ) : null}
    </div>
  );
};

export default MainComponent;
