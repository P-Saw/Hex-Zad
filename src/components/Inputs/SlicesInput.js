import TextField from '@mui/material/TextField';
import { StyledErrorMessage } from '../Form/Form.style';

const SlicesInput = ({ input, meta }) => {
  return (
    <>
      <TextField
        fullWidth
        {...input}
        label="Number of slices"
        variant="outlined"
        type="number"
        InputProps={{
          inputProps: {
            max: 100,
            min: 0,
          },
        }}
        required
      />
      {meta.touched && meta.error && <StyledErrorMessage>This field is required. </StyledErrorMessage>}
    </>
  );
};

export default SlicesInput;
