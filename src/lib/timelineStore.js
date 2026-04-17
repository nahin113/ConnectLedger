"use client";
import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

const TimelineContext = createContext();

export const TimelineProvider = ({ children }) => {
  const [timeline, setTimeline] = useState([]);

  // add new interaction
  const addInteraction = (type, friendName) => {
    const newEntry = {
      id: Date.now(),
      type,
      friendName,
      date: new Date().toISOString(),
    };

    setTimeline((prev) => [newEntry, ...prev]);

    toast.success(
        `${
          type.charAt(0).toUpperCase() + type.slice(1)
        } with ${friendName}`
    );

  };

  return (
    <TimelineContext.Provider value={{ timeline, addInteraction }}>
      {children}
    </TimelineContext.Provider>
  );
};

// custom hook (clean usage)
export const useTimeline = () => {
  return useContext(TimelineContext);
};
