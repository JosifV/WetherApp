import React from "react";
import WeatherIcon from "react-icons-weather";
const moment = require("moment");

const NextSevenDays = props => {
  return (
    <div>
      {props.data ? (
        <div>
          <h3 className="h3NextSevenDaysSummary">{props.summary}</h3>
          <div className="divNextSevenDays">
            {props.data.map((x, index) => {
              return (
                <div className="divItemNextSevenDays" key={index}>
                  <div className="divItemNextSevenDaysIcon">
                    <h5 className="h5DateNextSDays">
                      {moment()
                        .day(index + 2)
                        .format("DD MMM")}
                    </h5>
                    <WeatherIcon
                      name="darksky"
                      iconId={x.icon}
                      flip="horizontal"
                      rotate="90"
                    />
                    <h5 className="h5DateNextSDays">
                      {x.temperatureLow + "°"} {x.temperatureHigh + "°"}
                    </h5>
                  </div>
                  <div className="divNextSDaysSummary">
                    <h3 className="h3NextSDaysSummary">{x.summary}</h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default NextSevenDays;
