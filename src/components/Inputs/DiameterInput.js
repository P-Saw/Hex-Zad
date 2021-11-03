import TextField from '@mui/material/TextField';

const DiameterInput = ({ input }) => {
  return (
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
  );
};

export default DiameterInput;
