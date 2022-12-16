import React from "react";

export const LegalAgreements = () => {
  return (
    <>
      <label>
        <input name="cookiePolicy" type="checkbox" required />I agree with{" "}
        <a href="#">Cookie Policy</a>
      </label>
      <label>
        <input name="privacyPolicy" type="checkbox" required />I agree with the{" "}
        <a href="#">Privacy Policy</a>
      </label>
    </>
  );
};
