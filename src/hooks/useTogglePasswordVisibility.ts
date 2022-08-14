import { useState } from "react";
import {
  faEye,
  faEyeSlash,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";

export const useTogglePasswordVisibility = () => {
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [rightIcon, setRightIcon] = useState<IconDefinition>(faEyeSlash);
  const handlePasswordVisibility = () => {
    if (rightIcon === faEye) {
      setRightIcon(faEyeSlash);
      setPasswordVisibility(!passwordVisibility);
    } else if (rightIcon === faEyeSlash) {
      setRightIcon(faEye);
      setPasswordVisibility(!passwordVisibility);
    }
  };
  return {
    passwordVisibility,
    rightIcon,
    handlePasswordVisibility,
  };
};
