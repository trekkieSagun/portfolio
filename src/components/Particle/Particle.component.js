import React from "react";
import Particles from "react-particles-js";
import ParticlesConfig from "./particle-config";

const ParticlesComponent = () => {
  return (
    <div>
      <Particles params={ParticlesConfig}></Particles>
    </div>
  );
};

export default ParticlesComponent;
