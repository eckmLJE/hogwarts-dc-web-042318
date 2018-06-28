import React from "react";

const HogDetails = ({ hog }) => {
  return (
    <div>
      <br />
      <p>
        Weight:{" "}
        {
          hog[
            "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"
          ]
        }
      </p>
      <p>Greased Status: {hog.greased ? "Greased" : "Not Greased"}</p>
      <p>Specialty: {hog.specialty}</p>
      <p>Highest Medal: {hog["highest medal achieved"]}</p>
    </div>
  );
};

export default HogDetails;
