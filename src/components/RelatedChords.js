import { inject, observer } from "mobx-react";
import React, { useState } from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import VisibilitySensor from "react-visibility-sensor";

export const RelatedChords = inject("rootStore")(
  observer(function RelatedChords({ rootStore }) {
    const { currentChord, relatedChords, changeRelatedChord } = rootStore;
    const initialOpacity = 1;
    const [opacityTitle, setopacityTitle] = useState(initialOpacity);

    const scrolling = (px) => {
      if (window.innerWidth > 900) setopacityTitle(initialOpacity - px * 0.002);
    };

    return (
      <div className="related-chords-container">
        <h1 style={{ opacity: opacityTitle }} className="big-title">
          related chords
        </h1>
        <ScrollContainer
          onScroll={(px) => scrolling(px)}
          className="related-chords"
        >
          {currentChord &&
            relatedChords.map((relatedChord, i) => (
              <VisibilitySensor
                partialVisibility={{ left: 100 }}
                key={Math.random()}
              >
                {({ isVisible }) => (
                  <div
                    onClick={() => {
                      changeRelatedChord(relatedChord);
                      document.querySelector(
                        ".indiana-scroll-container"
                      ).scrollLeft = 0;
                    }}
                    className={`related-chord  ${
                      Object.keys(relatedChord)[0] === currentChord
                        ? "isActive"
                        : ""
                    } ${isVisible ? "visible" : "invisible"}`}
                  >
                    <h3>{Object.keys(relatedChord)}</h3>
                    <div>
                      {Object.values(relatedChord)[0].map((note, i) => (
                        <span key={i}>{note}</span>
                      ))}
                    </div>
                  </div>
                )}
              </VisibilitySensor>
            ))}
        </ScrollContainer>
      </div>
    );
  })
);
