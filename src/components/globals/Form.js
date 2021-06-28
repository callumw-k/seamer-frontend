import React from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { breakpoints } from "../helpers";

const FormWrapper = styled.form`
  flex-basis: 70%;
  color: white;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 1rem 0;
  label {
    font-size: var(--smallText);
    margin-bottom: 0.25rem;
  }
  input {
    padding: 0.75rem 1rem;
    background-color: #1b1b1b;
    color: white;
    line-height: 1.4rem;
    border: none;
    border-bottom: 5px solid white;
    transition: border-bottom-color 200ms;
    &:focus {
      outline: none;
      border-bottom: 5px solid var(--orange);
    }
  }
`;

const DoubleColumn = styled.div`
  display: flex;
  flex-direction: column;
  ${breakpoints.md} {
    flex-direction: row;
    & > div:first-of-type {
      margin-right: 2rem;
    }
  } ;
`;

const SubmitColumn = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 2rem 0 0 0;
`;

const SubmitButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: white;
  border: none;
  outline: none;
  transition: background-color 250ms ease-in, color 250ms ease-in;
  &:hover {
    background-color: black;
    color: white;
  }
`;

export default function Form() {
  return (
    <FormWrapper>
      <DoubleColumn>
        <InputWrapper>
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            id="first-name"
            name="first_name"
            placeholder="First Name"
          />
        </InputWrapper>
        <InputWrapper>
          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            id="last-name"
            name="last_name"
            placeholder="Last Name"
          />
        </InputWrapper>
      </DoubleColumn>
      <DoubleColumn>
        <InputWrapper>
          <label htmlFor="company">Company</label>
          <input
            type="text"
            id="company"
            name="company"
            placeholder="Company"
          />
        </InputWrapper>
        <InputWrapper>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            pattern=".+@globex\.com"
            placeholder="Email"
          />
        </InputWrapper>
      </DoubleColumn>
      <div>
        <InputWrapper>
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Phone Number"
          />
        </InputWrapper>
      </div>
      <SubmitColumn>
        <SubmitButton type="submit" value="Submit">
          Submit
        </SubmitButton>
      </SubmitColumn>
    </FormWrapper>
  );
}
