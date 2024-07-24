export const convertTo24HourFormat = (datetime: string) => {
  if (datetime !== undefined) {
    const time = new Date(datetime).toLocaleTimeString();
    const [timeString, modifier] = time.split(" ");
    let [hours, minutes] = timeString.split(":");
    if (hours === "12") {
      hours = "00";
    }
    if (modifier === "PM") {
      hours = parseInt(hours, 10) + 12 + "";
    }
    return `${hours}:${minutes}`;
  }
};
