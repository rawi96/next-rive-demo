import { Rive, useStateMachineInput } from "@rive-app/react-canvas";
import { useRef, useState } from "react";

export const useJumpToStepIfAlreadyVisited = (rive: Rive | null) => {
  const [stateHistory, setStateHistory] = useState<string[]>([]);

  const jumpShow2 = useStateMachineInput(
    rive,
    "State Machine 1st Level",
    "jumpShow2"
  );

  const jumpShow3 = useStateMachineInput(
    rive,
    "State Machine 1st Level",
    "clickShowAll"
  );

  const addStateToStateHistory = (stateToAdd: string) => {
    const currentStateHistory = stateHistory;
    currentStateHistory.push(stateToAdd);
    setStateHistory(currentStateHistory);
  };

  const jumpTo2IfNecessary = (currentState: string) => {
    if (stateHistory.includes("Idle 2") && currentState === "Idle 1") {
      console.log(
        "current state is Idle 1, but the user was already on Idle 2, so we jump to Idle 2"
      );
      show2ButtonRef.current?.click();
    }
  };

  const jumpTo3IfNecessary = (currentState: string) => {
    if (
      stateHistory.includes("Idle 3") &&
      (currentState === "Idle 2" || currentState === "Idle 2")
    ) {
      console.log(
        "current state is Idle 2 or Idle 3, but the user was already on Idle 3, so we jump to Idle 3"
      );
      show3ButtonRef.current?.click();
    }
  };

  const show2ButtonRef = useRef<HTMLButtonElement>(null);
  const show3ButtonRef = useRef<HTMLButtonElement>(null);

  return {
    addStateToStateHistory,
    jumpTo2IfNecessary,
    jumpTo3IfNecessary,
    jumpShow3,
    jumpShow2,
    show2ButtonRef,
    show3ButtonRef,
  };
};
