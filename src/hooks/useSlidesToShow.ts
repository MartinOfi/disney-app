import { useEffect, useState } from "react";
export interface SlidesResponsive {
  breakpoint: number;
  slides: number;
}
export const useSlidesToShow = (responsive: SlidesResponsive[]) => {
  const [slides, setSlides] = useState(1);
  useEffect(() => {
    const handleResize = () => {
      responsive.forEach((item) => {
        if (window.innerWidth > item.breakpoint) {
          setSlides(item.slides);
        }
      });
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return { slides };
};
