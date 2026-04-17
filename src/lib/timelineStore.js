"use client";
import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

const TimelineContext = createContext();

export const TimelineProvider = ({ children }) => {
  const [timeline, setTimeline] = useState([]);

  const addInteraction = (type, friendName) => {
    const newEntry = {
      id: Date.now(),
      type,
      friendName,
      date: new Date().toISOString(),
    };

    setTimeline([...timeline , newEntry]);

    toast.success(
      `${type} with ${friendName}`
    );
  };

  return (
    <TimelineContext.Provider value={{ timeline, addInteraction }}>
      {children}
    </TimelineContext.Provider>
  );
};

export const useTimeline = () => {
  return useContext(TimelineContext);
};
