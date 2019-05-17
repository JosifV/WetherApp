import React from "react";

const Alerts = props => {
  console.log(props);
  return (
    <div>
      {props.title ? (
        <div className="divMainAlerts">
          <div className="divAlertsContainer">
            <h4>{"Alert - " + props.title}</h4>
            <p>{props.description}</p>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Alerts;
