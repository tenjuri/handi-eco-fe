/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import { PrevButton, NextButton, usePrevNextButtons } from "./arrow-buttons";
import useEmblaCarousel from "embla-carousel-react";

import "@/app/client/product.css";

type PropType = {
  options?: EmblaOptionsType;
  items?: React.JSX.Element[];
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { options, items } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <div className="mt-10" style={{ "--slide-height": "300px" } as any}>
      <section className="embla one-item md:two-items lg:three-items xl:four-items 2xl:five-items">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">{items}</div>
          <div className="absolute top-1/2 left-10 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full transition-all bg-orange-300/50">
            <PrevButton
              onClick={onPrevButtonClick}
              disabled={prevBtnDisabled}
            />
          </div>
          <div className="absolute top-1/2 right-10 transform translate-x-1/2 -translate-y-1/2  w-14 h-14 rounded-full transition-all bg-orange-300/50">
            <NextButton
              onClick={onNextButtonClick}
              disabled={nextBtnDisabled}
            />
          </div>
        </div>

        {/* <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div> */}
      </section>
    </div>
  );
};

export default EmblaCarousel;
/* eslint-disable @typescript-eslint/no-explicit-any */
