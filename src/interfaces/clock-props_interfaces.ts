export type ClockProps = {
  time: string | undefined;
  country: string;
  countryCode: string;
  showMoreIsOpen: boolean;
  setShowMoreIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
