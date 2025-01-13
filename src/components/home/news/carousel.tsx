import React from "react";

import { EmblaOptionsType } from "embla-carousel";
import { PrevButton, NextButton, usePrevNextButtons } from "./carousel-button";
import useEmblaCarousel from "embla-carousel-react";

import "@/app/client/product.css";

type PropType = {
  options?: EmblaOptionsType;
  items?: React.JSX.Element[];
};

const Carousel: React.FC<PropType> = (props) => {
  const { options, items } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);
  return (
    <div style={{ "--slide-height": "300px" } as any}>
      <section className="embla one-item md:two-items xl:three-items">
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
      </section>
    </div>
  );
};

export default Carousel;
