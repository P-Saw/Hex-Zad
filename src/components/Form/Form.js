import axios from 'axios';
import { connect } from 'react-redux';
import { InputWrapper, StyledForm, StyledHeader, Wrapper } from './Form.style';
import { reduxForm, Field, formValueSelector, reset } from 'redux-form';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import NameInput from '../Inputs/NameInput';
import TimeInput from '../Inputs/TimeInput';
import SelectInput from '../Inputs/SelectInput';
import SlicesInput from '../Inputs/SlicesInput';
import DiameterInput from '../Inputs/DiameterInput';
import SpicinessInput from '../Inputs/SpicinessInput';

const required = (val) => {
  if (!val || val === '') {
    return true;
  }
  return undefined;
};

const onSubmit = (val, dispatch) => {
  axios
    .post('https://frosty-wood-6558.getsandbox.com:443/dishes', val)
    .then((res) => {
      alert('Order sent successfully!');
    })
    .catch((err) => {
      alert(`Upss there was an error, Please try again. \r\n Error: ${err}`);
    });
  dispatch(reset('my-form'));
};

let Form = ({ handleSubmit, typeDish, valid }) => {
  return (
    <Wrapper>
      <StyledHeader>Make an order</StyledHeader>
      <StyledForm onSubmit={handleSubmit}>
        <InputWrapper>
          <Field name="name" component={NameInput} validate={required} />
        </InputWrapper>
        <Field name="preparation_time" component={TimeInput} validate={required} />
        <InputWrapper>
          <Field name="type" component={SelectInput} validate={required}>
            <option value="" disabled hidden />
            <option value="pizza">Pizza</option>
            <option value="soup">Soup</option>
            <option value="sandwich">Sandwich</option>
          </Field>
        </InputWrapper>

        {typeDish === 'pizza' && (
          <>
            <InputWrapper>
              <Field name="no_of_slices" component={SlicesInput} parse={(value) => Number(value)} validate={required} />
            </InputWrapper>

            <InputWrapper>
              <Field name="diameter" component={DiameterInput} parse={(value) => Number(value)} validate={required} />
            </InputWrapper>
          </>
        )}
        {typeDish === 'soup' && <Field name="spiciness_scale" component={SpicinessInput} parse={(value) => Number(value)} validate={required} />}
        {typeDish === 'sandwich' && (
          <InputWrapper>
            <Field name="slices_of_bread" component={SlicesInput} parse={(value) => Number(value)} validate={required} />
          </InputWrapper>
        )}
        <Button disabled={!valid} variant="outlined" size="large" endIcon={<SendIcon />} type="submit">
          Send
        </Button>
      </StyledForm>
    </Wrapper>
  );
};

Form = reduxForm({
  form: 'my-form',
  onSubmit,
  forceUnregisterOnUnmount: true,
  destroyOnUnmount: true,
})(Form);

const selector = formValueSelector('my-form');
Form = connect((state) => {
  const typeDish = selector(state, 'type');
  return {
    typeDish,
  };
})(Form);

export default Form;
