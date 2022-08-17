import { SlidesResponsive } from "hooks/useSlidesToShow";

export const BASIC_IMAGE_URL = "https://image.tmdb.org/t/p/original";
export const responsive: SlidesResponsive[] = [
  {
    breakpoint: 480,
    slides: 1,
  },
  {
    breakpoint: 768,
    slides: 2,
  },
  {
    breakpoint: 1024,
    slides: 3,
  },

  {
    breakpoint: 1300,
    slides: 4,
  },
  {
    breakpoint: 1600,
    slides: 5,
  },
];
export const FireBaseErrors = {
  mailAlredyExists: "auth/email-already-exists",
  internalError: "auth/internal-error",
  invalidEmail: "auth/invalid-email",
  invalidPassword: "auth/invalid-password",
  userNotFound: "auth/user-not-found",
};
