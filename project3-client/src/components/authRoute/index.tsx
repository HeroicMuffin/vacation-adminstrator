import React, { useState, useEffect } from "react";
import tokenHandler from "../../axios/tokenHandler";
import { Redirect } from "react-router-dom";

export const userWithAuth = (WrappedComponent: any) => {
  return function(props: any) {
    const [status, setStatus] = useState("loading");
    useEffect(() => {
      const verify = async () => {
        const result = await tokenHandler.get("/verify");
        const { status } = result.data;
        setStatus(status);
      };
      verify();
    }, []);
    if (status === "loading") return <div className="loader"></div>;
    if (!status) return <Redirect to="/Login" />;
    return <WrappedComponent {...props} />;
  };
};

export const adminWithAuth = (WrappedComponent: any) => {
  return function(props: any) {
    const [status, setStatus] = useState("loading");
    useEffect(() => {
      const verify = async () => {
        const result = await tokenHandler.get("/admin/verify");
        const { status } = result.data;
        setStatus(status);
      };
      verify();
    }, []);

    if (status === "loading") return <div className="loader"></div>;
    if (!status) return <Redirect to="/" />;
    return <WrappedComponent {...props} />;
  };
};
