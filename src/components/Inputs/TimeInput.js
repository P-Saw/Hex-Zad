import { StyledErrorMessage } from '../Form/Form.style';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
`;
export const StyledHeading = styled.h4`
  font-size: 1rem;
  color: #514f59;
  margin-bottom: 10px;
  text-align: center;
`;

const Input = styled.input.attrs({
  type: 'time',
})`
  font-size: 1.5rem;
  background: #ccd6eb;
  color: #514f59;
  cursor: pointer;
  border: 2px rgba(0, 0, 0, 0.1) solid;
  border-radius: 5px;
  padding: 0 5px;
  height: 56px;
  width: 100%;
`;

const TimeInput = ({ input, meta }) => {
  return (
    <Wrapper>
      <StyledHeading>Preparation time*</StyledHeading>
      <Input {...input} type="time" step="1" />
      {meta.touched && meta.error && <StyledErrorMessage>This field is required. </StyledErrorMessage>}
    </Wrapper>
  );
};

export default TimeInput;
