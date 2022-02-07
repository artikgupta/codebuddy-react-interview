import React, { useState } from 'react';
import FormOne from './FormOne';
import FormTwo from './FormTwo';
import FormThree from './FormThree';

export function Forms() {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const pages = () => {
    switch (step) {
      case 1:
        return <FormOne nextStep={nextStep} prevStep={prevStep} />;
      case 2:
        return <FormTwo nextStep={nextStep} prevStep={prevStep} />;
      case 3:
        return <FormThree nextStep={nextStep} prevStep={prevStep} />;
      default:
        return <FormOne nextStep={nextStep} prevStep={prevStep} />;
    }
  };

  return <div>{pages()}</div>;
}
