// src/context/AssistanceContext.js
import React, { createContext, useState } from 'react';

export const AssistanceContext = createContext();

export const AssistanceProvider = ({ children }) => {
  const [user, setUser] = useState(null);  // To manage user login state
  const [serviceRequest, setServiceRequest] = useState(null);  // To track assistance requests

  return (
    <AssistanceContext.Provider value={{ user, setUser, serviceRequest, setServiceRequest }}>
      {children}
    </AssistanceContext.Provider>
  );
};
