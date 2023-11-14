import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function ProtectionRoute(props) {
  const { children } = props;
  const { currentUser } = useSelector((state) => state.auth);

  if (currentUser) {
    return children;
  } else {
    return <Navigate to="/login" replace />;
  }
}

export default ProtectionRoute;
