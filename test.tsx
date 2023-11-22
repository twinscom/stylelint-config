import styled from "styled-components";

export const Button = styled.button`
  padding: 0.25rem 1rem;
  margin: 0 1rem;
  color: ${(props) => props.theme.colors.button};
  background: transparent;
  border: 0.25rem solid #bf4f74;
  border-radius: 0.25rem;
`;
