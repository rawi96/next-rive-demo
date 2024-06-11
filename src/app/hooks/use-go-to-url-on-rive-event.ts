import { EventType, Rive } from "@rive-app/react-canvas";
import { useEffect } from "react";

export const useGoToUrlOnRiveEvent = (rive: Rive | null) => {
  const onRiveEventReceived = (riveEvent: any) => {
    switch (riveEvent.data.url) {
      case "dashboard":
        window.location.href = "https://www.google.com";
        break;
      case "profile":
        window.location.href = "https://www.facebook.com";
        break;
    }
  };

  useEffect(() => {
    if (rive) {
      rive.on(EventType.RiveEvent, onRiveEventReceived);
    }
  }, [rive]);
};
