import styled from "styled-components";

export const StyledFormLogin = styled.form`
  height: max-content;
  width: 90%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  border-radius: 15px;
  background: var(--linear-gradient-form);
  h1 {
    color: var(--gray-0);
  }
  button {
    margin: 20px 0px;
    padding: 20px;
    border-radius: 10px;
  }
`;
