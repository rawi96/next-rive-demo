"use client";

import { Alignment, Fit, Layout, useRive } from "@rive-app/react-canvas";
import { useState } from "react";

const STATE_MACHINE_NAME = "State Machine";
const JUMP_TO_YOUR_PERSONAL_SITUATION = "jumpToYourPersonalSituation_input";
const JUMP_TO_All_GOALS = "jumpToAllGoals_input";

export const HoloDeck = () => {
  const [stateHistory, setStateHistory] = useState<string[]>([]);

  const { rive, RiveComponent } = useRive({
    src: "holodeck.riv",
    stateMachines: STATE_MACHINE_NAME,
    autoplay: true,

    // onStateChange: (event) => {
    //   if (Array.isArray(event.data)) {
    //     const state = event.data[0];
    //     console.log(state);
    //     addStateToStateHistory(state);
    //     jumpToAllGoalsIfNecessary(state);
    //   }
    // },
  });

  // const addStateToStateHistory = (stateToAdd: string) => {
  //   const currentStateHistory = stateHistory;
  //   currentStateHistory.push(stateToAdd);
  //   setStateHistory(currentStateHistory);
  // };

  // const jumpToAllGoalsIfNecessary = (currentState: string) => {
  //   if (
  //     stateHistory.includes("Idle All goals") &&
  //     currentState === "Idle Your personal situation"
  //   ) {
  //     console.log("user was already on all goals, so we jump to all goals");
  //     console.log(jumpToAllGoalsButtonRef.current);
  //     setTimeout(() => {
  //       console.log("click");
  //       jumpToAllGoalsButtonRef.current?.click();
  //     }, 1000);
  //   }
  // };

  // const jumpToYourPersonalSituationInput = useStateMachineInput(
  //   rive,
  //   STATE_MACHINE_NAME,
  //   JUMP_TO_YOUR_PERSONAL_SITUATION
  // );

  // const jumpToAllGoalsInput = useStateMachineInput(
  //   rive,
  //   STATE_MACHINE_NAME,
  //   JUMP_TO_All_GOALS
  // );

  // const jumpToAllGoalsButtonRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      {/* <button onClick={() => jumpToYourPersonalSituationInput?.fire()}>
        Jump to your personal situation
      </button>

      <button
        onClick={() => jumpToAllGoalsInput?.fire()}
        ref={jumpToAllGoalsButtonRef}
      >
        Jump to all goals
      </button> */}
      {/* <div style={{ height: "1000px", width: "1600px", padding: "20px" }}> */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            height: "1000px",
            width: "1600px",
          }}
        >
          <RiveComponent />
        </div>
      </div>
    </>
  );
};
