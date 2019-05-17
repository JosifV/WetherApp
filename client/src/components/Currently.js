import React from "react";
import WeatherIcon from "react-icons-weather";

const Currently = props => {
  return (
    <div className="divCurrently">
      <div>
        {props.icon ? (
          <div>
            <div className="divIcon">
              <WeatherIcon
                name="darksky"
                iconId={props.icon}
                flip="horizontal"
                rotate="90"
              />
              <h3 className="h3Temp">{props.temperature + "°"}</h3>
            </div>
            <div className="divSummary">
              <h5 className="h5Summary">{props.summary}</h5>
              <h3 className="h3Location">{props.locationStr}</h3>
            </div>
            <div className="divCurrentGrid">
              <div className="divCurrentGridItem">
                <p>Humidity</p>
                {props.humidity}
              </div>
              <div className="divCurrentGridItem">
                <p>Pressure</p>
                {props.pressure}
              </div>
              <div className="divCurrentGridItem">
                <p>Wind m/s</p>
                {props.windSpeed}
              </div>
              <div className="divCurrentGridItem">
                <p>Ozone</p>
                {props.ozone}
              </div>
              <div className="divCurrentGridItem">
                <p>UV Index</p>
                {props.uvIndex}
              </div>
              <div className="divCurrentGridItem">
                <p>Visibility</p>
                {props.visibility}
              </div>
            </div>
            <div className="divRestOfTheDay">{props.hourly}</div>
          </div>
        ) : null}
      </div>
    </div>
  );
};
export default Currently;
