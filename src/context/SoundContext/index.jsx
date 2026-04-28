import React, { createContext, useContext, useEffect, useRef } from "react";

const SoundContext = createContext();
export const useSound = () => useContext(SoundContext);

export const SoundProvider = ({ children }) => {
  const clickRef = useRef(null);

  useEffect(() => {
    clickRef.current = new Audio("/sounds/click.mp3"); // your click sound file
  }, []);

  const playClick = () => {
    if (clickRef.current) {
      clickRef.current.currentTime = 0;
      clickRef.current.play().catch(() => {});
    }
  };

  return (
    <SoundContext.Provider value={{ playClick }}>
      {children}
    </SoundContext.Provider>
  );
};