import { Rive, useStateMachineInput } from "@rive-app/react-canvas";
import { useRef } from "react";

export const useJumpToStepFromBurgerMenu = (rive: Rive | null) => {
  const jumpExpand1 = useStateMachineInput(
    rive,
    "State Machine 1st Level",
    "clickExpand1"
  );

  const expand1ButtonRef = useRef<HTMLButtonElement>(null);

  return {
    jumpExpand1,
    expand1ButtonRef,
  };
};
