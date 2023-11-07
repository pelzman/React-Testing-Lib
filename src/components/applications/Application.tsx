import React from "react";

const Application = () => {
  return (
    <>
      <h1>Job Application Form</h1>
      <h2>Section One</h2>
      <p>All is well</p>

      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="FirstName" />
        </div>

        <div>
          <label htmlFor="Bio">Bio</label>
          <textarea id="Bio"></textarea>

          <div data-testid="customElement">custome HTML</div>
        </div>
        <div>
          <label htmlFor="job-location">Job location</label>
          <select id="job-location">
            <option value="">Select a country</option>
            <option value="US">United States</option>
            <option value="GB">United Kingdom</option>
            <option value="CA">Canada</option>
            <option value="IN">India</option>
            <option value="AU">Australia</option>
          </select>
        </div>
        <div>
          <label htmlFor="terms">
            <input type="checkbox" id="terms" value="Oluwapelumi" /> I agree to
            the terms and conditions
          </label>
        </div>
        <button type="button" disabled>
          Submit
        </button>
      </form>
    </>
  );
};

export default Application;
