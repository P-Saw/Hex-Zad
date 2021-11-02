import axios from 'axios';
import { connect } from 'react-redux';
import { StyledForm, StyledHeader, Wrapper } from './Form.style';
import { reduxForm, Field, formValueSelector, reset } from 'redux-form';
import NameInput from '../NameInput';
import TimeInput from '../TimeInput';
import SelectInput from '../SelectInput';

const required = (val) => {
  if (!val || val === '') {
    return true;
  }
  return undefined;
};

const onSubmit = (val, dispatch) => {
  console.log(JSON.stringify(val));
  axios
    .post('https://frosty-wood-6558.getsandbox.com:443/dishes', val)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
  dispatch(reset('my-form'));
};

let Form = ({ handleSubmit, typeDish }) => {
  return (
    <Wrapper>
      <StyledHeader>Make an order</StyledHeader>
      <StyledForm onSubmit={handleSubmit}>
        <Field name="name" component={NameInput} validate={required} />
        <Field name="preparation_time" component={TimeInput} validate={required} />
        <Field name="type" component={SelectInput} validate={required}>
          <option value="" disabled hidden />
          <option value="pizza">Pizza</option>
          <option value="soup">Soup</option>
          <option value="sandwich">Sandwich</option>
        </Field>
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
