import React, { createContext, useState } from "react";

const UserContext = createContext();

const Wrapper = (props) => {
  const [greeting, setgreeting] = useState("Hello");

  const changeGreeting = (e) => {
    setgreeting(e);
  };

  return (
    <UserContext.Provider value={{ greeting, changeGreeting }}>
      {props.children}
    </UserContext.Provider>
  );
};
export { Wrapper, UserContext };