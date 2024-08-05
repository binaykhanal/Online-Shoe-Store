import React, { createContext, useState } from 'react';

const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
  const [value, setValue] = useState(1);

  const updateValue = (newValue) => {
    setValue(newValue);
  };
  const handleValue=()=>{
    setValue(value+1);
  }

  return (
    <MyContext.Provider value={{ value, updateValue,handleValue }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyContext;