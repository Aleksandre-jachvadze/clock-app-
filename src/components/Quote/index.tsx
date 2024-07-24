import React, { useEffect, useReducer } from "react";
import { infoReducer, INITIAL_STATE } from "../../reducers/infoReducer";
import { ApisServices } from "../../services/apisServices";
import { Button } from "../";
import RefreshIcon from "../../assets/icon-refresh.svg";
import "./style.scss";

export function Quote() {
  const [state, dispatch] = useReducer(infoReducer, INITIAL_STATE);
  const services = new ApisServices();

  const { author, en } = state.quote.data;

  useEffect(() => {
    services.getQuote(dispatch);
  }, []);

  return (
    <div className='quote__container'>
      {author && (
        <>
          <div className='quote__text-container'>
            <p className='quote__quote-item'>"{en}"</p>
            <p className='quote__author-item'>{author}</p>
          </div>
          <Button
            type='btn__refresh'
            action={() => {
              services.getQuote(dispatch);
            }}
            icon={RefreshIcon}
          />
        </>
      )}
    </div>
  );
}
