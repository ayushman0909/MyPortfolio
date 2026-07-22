import { useEffect, useRef } from "react";
import startupSound from "../assets/sounds/aistartup.mp3";

const useStartupSound = () => {
  const played = useRef(false);
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current = new Audio(startupSound);
    audioRef.current.volume = 0.5;

    const playSound = async () => {
      if (played.current) return;

      played.current = true;

      try {
        audioRef.current.currentTime = 0;
        await audioRef.current.play();
      } catch (err) {
        console.error("Audio blocked:", err);
      }

      window.removeEventListener("pointerdown", playSound);
    };

    window.addEventListener("pointerdown", playSound);

    return () => {
      window.removeEventListener("pointerdown", playSound);
    };
  }, []);
};

export default useStartupSound;