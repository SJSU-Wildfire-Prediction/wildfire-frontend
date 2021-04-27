import React from "react";
import { Image } from "react-bootstrap";
import Loading from "./Loading.gif";
// import "./Loading.gif";
import "./App.css";

const LoadingSpinner = () => (
    <div className="overlay-spinner">
        <Image src={Loading} alt="Loading..." />
    </div>
);

export default LoadingSpinner;

