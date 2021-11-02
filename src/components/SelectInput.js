import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { StyledErrorMessage } from './Form/Form.style';

const SelectInput = ({ input, children, meta, ...rest }) => {
  return (
    <>
      <FormControl fullWidth>
        <InputLabel id="select-label">Type*</InputLabel>
        <Select native labelId="select-label" label="Type*" {...input} {...rest}>
          {children}
        </Select>
      </FormControl>
      {meta.touched && meta.error && <StyledErrorMessage>This field is required. </StyledErrorMessage>}
    </>
  );
};

export default SelectInput;
