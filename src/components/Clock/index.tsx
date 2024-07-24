import { ClockProps } from "../../interfaces";
import IconArrow from "../../assets/icon-arrow.svg";
import { Quote, Button } from "../";
import MoonIcon from "../../assets/icon-moon.svg";
import SunIcon from "../../assets/icon-sun.svg";
import "./style.scss";
import { useEffect } from "react";

export function Clock({
  time,
  country,
  countryCode,
  showMoreIsOpen,
  setShowMoreIsOpen
}: ClockProps) {
  ``;
  const catchScrollAction = (e: any) => {
    if (e.deltaY > 0) {
      setShowMoreIsOpen(true);
    } else {
      setShowMoreIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("wheel", catchScrollAction);

    return () => {
      window.removeEventListener("wheel", catchScrollAction);
    };
  }, []);


  return (
    <div className='datetime__container'>
      <Quote />

      <div className='clock__container'>
        <div>
          <div className='clock__greeting-item'>
            {time && time >= "00:00" && time <= "11:59" ? (
              <>
                <img src={SunIcon} alt='sun' />
                <p>Good Morning</p>
              </>
            ) : time && time >= "12:00" && time <= "18:00" ? (
              <>
                <img src={SunIcon} alt='sun' />
                <p>Good Afternoon</p>
              </>
            ) : (
              <>
                <img src={MoonIcon} alt='moon' />
                <p>Good Night</p>
              </>
            )}
          </div>

          <p className='clock__time-item'>{time}</p>
          <p className='clock__country-item'>
            {country}, {countryCode}
          </p>
        </div>
        <Button
          text={showMoreIsOpen ? "LESS" : "MORE"}
          type={`btn__show-more ${showMoreIsOpen ? "open" : "close"} `}
          action={() => {
            setShowMoreIsOpen(!showMoreIsOpen);
          }}
          icon={IconArrow}
        />
      </div>
    </div>
  );
}
