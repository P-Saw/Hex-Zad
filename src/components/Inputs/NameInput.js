import TextField from '@mui/material/TextField';
import { StyledErrorMessage } from '../Form/Form.style';

const NameInput = ({ input, meta }) => {
  return (
    <>
      <TextField {...input} variant="outlined" label="Name" required fullWidth />
      {meta.touched && meta.error && <StyledErrorMessage>This field is required.</StyledErrorMessage>}
    </>
  );
};

export default NameInput;
