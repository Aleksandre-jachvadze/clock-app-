import React from "react";
import { ButtonProps } from "../../interfaces";
import "./style.scss";

export function Button({ text, type, action, icon }: ButtonProps) {
  return (
    <div onClick={() => action()} className={type}>
      {text && <span>{text}</span>}
      {icon && <img src={icon} alt='icon' />}
    </div>
  );
}
