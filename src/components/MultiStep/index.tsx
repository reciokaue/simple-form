import React from "react";

import {
  Container,
  Step,
  Connector,
  ContactIcon,
  PersonIcon,
  CheckIcon,
} from "./styles";

const MultiStep: React.FC = () => {
  return (
    <Container>
      <div>
        <Step className="completed">
          <ContactIcon />
          <h2>Contact Information</h2>
        </Step>
        <Connector />
        <Step>
          <PersonIcon />
          <h2>Personal Information</h2>
        </Step>

        <Connector />
        <Step>
          <CheckIcon />
          <h2>Finish Project</h2>
        </Step>
      </div>
    </Container>
  );
};

export default MultiStep;
