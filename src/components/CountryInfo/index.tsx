import React from "react";
import { CountryInfoProps } from "../../interfaces";
import "./style.scss";

export function CountryInfo({
  time,
  timeZone,
  dayOfTheYear,
  dayOfTheWeek,
  weekNumber
}: CountryInfoProps) {
  return (
    <div
      className={`country-info__container  ${
        time && Number(time.split(":")[0]) >= 18 ? "night" : "night"
      }`}
    >
      <ul>
        
        <li>
          <p>CURRENT TIMEZONE</p> <span>{timeZone}</span>
        </li>
        <li>
          <p>Day of the year</p> <span>{dayOfTheYear}</span>
        </li>

        <li>
          <p>Day of the week</p> <span>{dayOfTheWeek}</span>
        </li>
        <li>
          <p>Week number</p> <span>{weekNumber}</span>
        </li>
      </ul>
    </div>
  );
}
