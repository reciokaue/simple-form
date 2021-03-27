import React from "react";

import {
  Container,
  ImgContainer,
  FormContainer,
} from "./styles";
import Form from "../Form";

const Layout: React.FC = () => {

  return (
    <Container>
      <ImgContainer>
        <img src="" alt="" />
      </ImgContainer>

      <FormContainer>
        {/* <div className={step === 1? 'active': ''}></div> */}
        {/* <div>a</div> */}
        {/* <div>a</div> */}
        <Form/>
      </FormContainer>
    </Container>
  );
};

export default Layout;
