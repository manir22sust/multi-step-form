import { MultiStepForm } from "./components/MultiStepForm";
import { UserDetails } from "./components/UserDetails";
import { PersonalInfo } from "./components/PersonalInfo";
import { LegalAgreements } from "./components/LegalAgreements";
const App = () => {
  const submit = (data) => {
    console.log("Form Submit");
    console.log("Data:", data);
  };
  return (
    <>
      <MultiStepForm
        steps={[<UserDetails />, <LegalAgreements />, <PersonalInfo />]}
        submit={submit}
      />
    </>
  );
};

export default App;
