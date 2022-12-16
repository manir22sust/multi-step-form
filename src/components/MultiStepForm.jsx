import { useEffect } from "react";
import { useMultiStepModel } from "../providers/MultiStepModelProvider";
import { FormStep } from "./FormStep";

export const MultiStepForm = (props) => {
  const { steps, currentStep, setSteps, setSubmitHandler } =
    useMultiStepModel();

  useEffect(() => {
    setSteps(props.steps);
  }, [setSteps, props.steps]);

  useEffect(() => {
    setSubmitHandler(() => props.submit);
  }, [setSubmitHandler]);
  return (
    <>
      {steps.map((step, index) => (
        <FormStep isHidden={index !== currentStep} key={index}>
          {step}
        </FormStep>
      ))}
    </>
  );
};
