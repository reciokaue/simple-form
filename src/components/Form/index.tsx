import React, { useState } from "react";
import Input from "../Input";
import MultiStep from "../MultiStep";

import {
  Container,
  SubContainer,
  ButtonsContainer
} from "./styles";

const Form: React.FC = () => {
  const [ name, setName] = useState('');
  const [ email, setEmail] = useState('');
  const [ number, setNumber] = useState('');
  const [ date, setDate] = useState('');

  const [ step, setStep ] = useState(1)

  function BackStep(){
    if(step > 1){
      setStep(step - 1)
    } 
  }
  function NextStep(){
    if(step < 3){
      setStep(step + 1)
    } 
  }

  return (
    <Container>
      {step}
      <MultiStep/>

      <SubContainer className={step === 1? 'active': 'disabled'}>
        <h1>Contact Information</h1>
        <Input state={setName} placeholder="Full Name" />
        <Input state={setEmail} type="email"placeholder="Email" />
        <Input state={setNumber} type="number" placeholder="Phone Number" />
        <Input state={setDate} type="date" placeholder="Birth Date" />
      </ SubContainer>
      <SubContainer className={step === 2? 'active': 'disabled'}>
        <h1>Contact Information</h1>
        <Input state={setName} placeholder="Mailing address" />
        <Input state={setEmail} placeholder="Country" />
        <Input state={setNumber} placeholder="City" />
        <Input state={setDate} placeholder="Poster Code" />
      </ SubContainer>
      <SubContainer className={step === 3? 'active': 'disabled'}>
        <h1>Contact Information</h1>
        <Input state={setName} placeholder="Full Name" />
        <Input state={setEmail} type="email"placeholder="Email" />
        <Input state={setNumber} type="number" placeholder="Phone Number" />
        <Input state={setDate} type="date" placeholder="Birth Date" />
      </ SubContainer>

      <ButtonsContainer>
        <button onClick={BackStep} className="outlined">Cancel</button>
        <button onClick={NextStep}>Next</button>
      </ButtonsContainer>
    </Container>
  );
};


export default Form;
