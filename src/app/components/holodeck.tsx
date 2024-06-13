"use client";

import { useRive } from "@rive-app/react-canvas";

export const HoloDeck = () => {
  const { rive, RiveComponent } = useRive({
    src: "holodeck.riv",
    stateMachines: "State Machine",
    autoplay: true,
  });

  return (
    <>
      <div style={{ height: "100vh" }}>
        <RiveComponent />
      </div>
    </>
  );
};
