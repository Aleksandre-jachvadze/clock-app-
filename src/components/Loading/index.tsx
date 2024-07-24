import React from "react";
import "./style.scss";

type LoadingProps = {
  time: string;
};

export function Loading({ time }: LoadingProps) {
  return (
    <div className={`loading__container ${time}`}>
      <div className={`loading__spinner ${time}`}></div>
      <p>Loading</p>
    </div>
  );
}
