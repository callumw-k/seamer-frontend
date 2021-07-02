import React from "react";
import styled from "@emotion/styled";
import { breakpoints } from "../helpers";
import Button from "./button";
import { css } from "@emotion/react";

const FormWrapper = styled.form`
  flex-basis: 70%;
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
    background-color: var(--black);
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
        <Button
          extendedStyle={css`
            font-size: var(--h4);
          `}
          type="submit"
          value="Submit"
          text="Submit"
        />
      </SubmitColumn>
    </FormWrapper>
  );
}
