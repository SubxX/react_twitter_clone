import React, { useEffect } from "react";

export const Alert = ({ message, autoCloseTimer, closeAlert }) => {
  useEffect(() => {
    let timeOut;
    if (autoCloseTimer)
      timeOut = setTimeout(() => closeAlert(false), autoCloseTimer);
    return () => {
      timeOut && clearTimeout(timeOut);
    };
  });

  return (
    <div className="alert">
      <p>{message}</p>
    </div>
  );
};
