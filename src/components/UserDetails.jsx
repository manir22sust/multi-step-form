import React from "react";

export const UserDetails = () => {
  return (
    <>
      
      <label>Email</label>
      <input name="email" type="email" required />
      <label>Password</label>
      <input name="password" type="password" required />
    </>
  );
};
