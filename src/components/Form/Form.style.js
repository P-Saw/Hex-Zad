import styled from 'styled-components';

export const StyledHeader = styled.h1`
  font-size: 2rem;
  color: #514f59;
  text-align: center;
  margin-bottom: 2.5rem;
`;

export const Wrapper = styled.div`
  background-color: #e9ecf5;
  width: 500px;
  height: 500px;
  padding: 20px;
  border: 5px #ccd6eb solid;
  border-radius: 20px;
`;

export const StyledForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  max-width: 250px;
  margin: auto;
`;

export const StyledErrorMessage = styled.span`
  margin: 5px 0;
  color: red;
`;
