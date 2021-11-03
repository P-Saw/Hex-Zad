import TextField from '@mui/material/TextField';
import { StyledErrorMessage } from '../Form/Form.style';

const DiameterInput = ({ input, meta }) => {
  return (
    <>
      <TextField
        fullWidth
        {...input}
        label="Diameter"
        variant="standard"
        type="number"
        inputMode="decimal"
        helperText="Please use comma as separator"
        InputProps={{
          inputProps: {
            max: 50,
            min: 0,
            step: 0.1,
          },
        }}
        required
      />
      {meta.touched && meta.error && <StyledErrorMessage>This field is required.</StyledErrorMessage>}
    </>
  );
};

export default DiameterInput;
