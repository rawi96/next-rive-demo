"use client";

import { useRive } from "@rive-app/react-canvas";
import { useGoToUrlOnRiveEvent } from "../hooks/use-go-to-url-on-rive-event";
import { useJumpToStepFromBurgerMenu } from "../hooks/use-jump-to-step-from-burger-menu";
import { useJumpToStepIfAlreadyVisited } from "../hooks/use-jump-to-step-if-already-visited";

export const RiveDemo = () => {
  const { rive, RiveComponent } = useRive({
    src: "rive-file.riv",
    stateMachines: "State Machine 1st Level",
    autoplay: true,
    onStateChange: (event) => {
      if (Array.isArray(event.data)) {
        const state = event.data[0];
        addStateToStateHistory(state);
        jumpTo2IfNecessary(state);
        jumpTo3IfNecessary(state);
      }
    },
  });

  useGoToUrlOnRiveEvent(rive);

  const { jumpExpand1, expand1ButtonRef } = useJumpToStepFromBurgerMenu(rive);

  const {
    addStateToStateHistory,
    jumpTo2IfNecessary,
    jumpTo3IfNecessary,
    jumpShow2,
    jumpShow3,
    show2ButtonRef,
    show3ButtonRef,
  } = useJumpToStepIfAlreadyVisited(rive);

  return (
    <>
      <button ref={expand1ButtonRef} onClick={() => jumpExpand1?.fire()}>
        Go directly to Expand 1 from Burger Menu
      </button>

      <div style={{ height: "1000px", width: "1600px" }}>
        <RiveComponent />
      </div>

      <button
        hidden
        ref={show2ButtonRef}
        onClick={() => jumpShow2?.fire()}
      ></button>

      <button
        hidden
        ref={show3ButtonRef}
        onClick={() => jumpShow3?.fire()}
      ></button>
    </>
  );
};
