import { useEffect, useReducer, useState } from "react";
import { Clock, CountryInfo, Loading } from "./components/";
import { infoReducer, INITIAL_STATE } from "./reducers/infoReducer";
import { ApisServices } from "./services/apisServices";
import "../src/styles/global.style.scss";
import { convertTo24HourFormat } from "./utils/convertTo24HourFormat";

function App() {
  const [state, dispatch] = useReducer(infoReducer, INITIAL_STATE);
  const [showMoreIsOpen, setShowMoreIsOpen] = useState(false);

  const [ip, setIp] = useState<string>("");
  const services = new ApisServices();

  useEffect(() => {
    services.getUserPublicIp(dispatch);
  }, []);

  useEffect(() => {
    setIp(state.ipNumber.data);
  }, [state.ipNumber.data]);

  useEffect(() => {
    services.getTime(ip, dispatch);
    
    setTimeout(() => {
      services.getLocationWithIp(ip, dispatch);
      const interval = setInterval(() => {
        services.getTime(ip, dispatch);
      }, 20000);
      return () => clearInterval(interval);
    }, 1000);
  }, [ip]);

  const getTimeOfTheDay = () => {
    return state.time.data?.datetime &&
      Number(convertTo24HourFormat(state.time.data?.datetime)?.split(":")[0]) >=
        18
      ? "night"
      : "day";
  };

  return (
    <>
      {state.locationInfo.data === "" ? (
        <>
          <Loading time={getTimeOfTheDay()} />
        </>
      ) : (
        <div className={`app-container ${getTimeOfTheDay()}`}>
          <div className={`show-more ${showMoreIsOpen ? "open" : "close"}`}>
            <Clock
              time={convertTo24HourFormat(state.time.data?.datetime)}
              country={state.locationInfo.data?.country_name}
              countryCode={state.locationInfo.data?.country_code}
              showMoreIsOpen={showMoreIsOpen}
              setShowMoreIsOpen={setShowMoreIsOpen}
            />
            <CountryInfo
              time={convertTo24HourFormat(state.time.data?.datetime)}
              timeZone={state.locationInfo.data.timezone}
              dayOfTheYear={state.time.data.day_of_year}
              dayOfTheWeek={state.time.data.day_of_week}
              weekNumber={state.time.data.week_number}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
