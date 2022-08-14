import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: black;
  padding: 40px;
  a {
    text-decoration: none;
    color: white;
    font-weight: bold;
  }
`;
export const InputMail = styled.input`
  width: calc(100% - 15px);
  height: 40px;
  border-radius: 5px;
  padding-left: 15px;
  border: 1px solid #1a1d29;
  margin-bottom: 10px;
  color: white;
  background-color: rgba(48, 51, 62, 1);
  font-size: 14px;
  font-weight: bold;
  outline: none;
`;
