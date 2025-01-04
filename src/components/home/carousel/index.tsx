/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useRef, useEffect } from "react";
import { EmblaOptionsType, EmblaCarouselType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";
import { MoveRight } from "lucide-react";
import { NextButton, PrevButton, usePrevNextButtons } from "./arrow-button";
// import { useDotButton } from "./dot-button";

import "@/app/client/carousel.css";

import { getDictionary } from "../../../../get-dictionary";

// const TWEEN_FACTOR_BASE = 0.2;

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
  dictionary: Awaited<ReturnType<typeof getDictionary>>;
};

const CarouselSection: React.FC<PropType> = (props) => {
  const { slides, options, dictionary } = props;
  // const [emblaRef, emblaApi] = useEmblaCarousel(options, [
  //   Fade(),
  //   Autoplay({ playOnInit: true, delay: 6000 }),
  // ]);

  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Fade(),
    Autoplay({ playOnInit: true, delay: 6000 }),
  ]);

  // const { selectedIndex, scrollSnaps, onDotButtonClick } =
  //   useDotButton(emblaApi);
  const onBtnClick = (emblaApi: EmblaCarouselType) => {
    emblaApi.reInit();
  };
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi, onBtnClick);

  const videoRef = [
    useRef<HTMLVideoElement>(null),
    useRef<HTMLVideoElement>(null),
    useRef<HTMLVideoElement>(null),
    useRef<HTMLVideoElement>(null),
  ];
  const observer = [
    useRef<IntersectionObserver | null>(null),
    useRef<IntersectionObserver | null>(null),
    useRef<IntersectionObserver | null>(null),
    useRef<IntersectionObserver | null>(null),
  ];
  useEffect(() => {
    videoRef.forEach((ref, index) => {
      if (ref.current) {
        observer[index].current = new IntersectionObserver(
          ([entry]) => {
            if (entry?.isIntersecting) {
              ref.current?.play();
            }
          },
          { threshold: 0.5 }
        );
        observer[index].current.observe(ref.current);
      }
    });
    return () => {
      observer.forEach((obs) => {
        if (obs.current) {
          obs.current.disconnect();
        }
      });
    };
  }, [videoRef, observer]);

  const openCatalog = () => {
    window.open("https://media.handi-eco.vn/pdf/sample.pdf", "_blank");
  };

  return (
    <div className="w-full max-w-[1920px] mx-auto">
      <div className="embla one-item">
        <div
          className="embla__viewport h-mb md:h-md lg:h-lg xl:h-xl"
          ref={emblaRef}
        >
          <div className="embla__container">
            {slides.map((index) => (
              <div className="embla__slide relative" key={index + "embla"}>
                <video
                  ref={videoRef[index]}
                  className="w-full object-cover"
                  muted
                  playsInline
                >
                  <source
                    src={`/carousel/${index}.mp4`}
                    type="video/mp4"
                    className="f-full"
                  />
                  Your browser does not support the video tag.
                </video>
                {index === 0 && (
                  <div
                    className="uppercase cursor-pointer ml-10 bg-white font-bold text-[10px] xl:text-xl text-gold-app absolute left-[60%] top-[80%] xl:top-3/4 xl:left-1/3 transform  flex items-center gap-4 px-2 xl:px-4 h-6 xl:h-12 rounded-full"
                    onClick={openCatalog}
                  >
                    {dictionary.readMore}
                    <div className="rounded-full bg-white border-[3px] xl:border-[5px] border-gold-app p-[2px] xl:p-1 flex items-center justify-center">
                      <MoveRight className="w-3 h-3" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
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

        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot".concat(
                index === selectedIndex ? " embla__dot--selected" : ""
              )}
            />
          ))}
        </div>
      </div> */}
      </div>
    </div>
  );
};

export default CarouselSection;
/* eslint-disable @typescript-eslint/no-explicit-any */
