import React, { useState } from "react";
import OutletsList from "./OutletsList";
import OutletForm from "./OutletForm";

const OutletsDash = () => {
  return (
    <div>
      <OutletForm />
      <OutletsList />
    </div>
  );
};

export default OutletsDash;
