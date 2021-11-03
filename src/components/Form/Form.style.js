import styled from 'styled-components';

export const StyledHeader = styled.h1`
  font-size: 2rem;
  color: #514f59;
  text-align: center;
  margin-bottom: 2.5rem;
`;

export const InputWrapper = styled.div`
  width: 100%;
`;

export const Wrapper = styled.div`
  background-color: #e9ecf5;
  width: 100%;
  max-width: 500px;
  margin: 0 20px;
  padding: 40px;
  border: 5px #ccd6eb solid;
  border-radius: 20px;
  box-shadow: 0px 0px 69px 16px rgba(66, 68, 90, 1);
`;

export const StyledForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 30px;
  max-width: 250px;
  margin: auto;
`;

export const StyledErrorMessage = styled.p`
  margin: 5px 0;
  color: red;
`;
