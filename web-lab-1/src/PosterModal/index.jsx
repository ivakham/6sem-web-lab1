import React, { useState } from "react";
import "./styles.css";

import tempImg from "../assets/image 1.svg"

export default function Modal({poster, show, exitCallback}) {

  if(show) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
      {show && (
        <div className="modal">
          <div onClick={exitCallback} className="overlay" data-testid="clickable-background"></div>
          <div class="film">
            <img src={poster.imgSrc} alt={poster.imgAlt} class="film__poster" />
            <div class="film__head">
              <h2 class="film__title">{poster.title}</h2>
              <div class="film__table">
                <div className="film__director film--label">directed by:</div>
                <div className="film__director film--value" data-testid="contents-director">{poster.director}</div>
                <div className="film__actors film--label">staring:</div>
                <div className="film__actors film--value" data-testid="contents-actors">{poster.actors.join(", ")}</div>
                <div className="film__year film--label">year:</div>
                <div className="film__year film--value" data-testid="contents-year">{poster.year}</div>
                <div className="film__rating film--label">rating:</div>
                <div className="film__rating film--value" data-testid="contents-rating">{poster.rating}/10</div>
              </div>

              <a href={poster.trailer} class="film__trailer">Trailer</a>
            </div>
            <p class="film__description" data-testid="contents-text">
              {poster.description}
            </p>
          </div>
        </div>
      )}
    </>
  );
}