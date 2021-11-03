import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import styled from 'styled-components';
import { red } from '@mui/material/colors';
import { StyledHeading } from './TimeInput';

const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
`;

const marks = [
  {
    value: 0,
    label: '0',
  },
  {
    value: 1,
    label: '1',
  },
  {
    value: 2,
    label: '2',
  },
  {
    value: 3,
    label: '3',
  },
  {
    value: 4,
    label: '4',
  },
  {
    value: 5,
    label: '5',
  },
  {
    value: 6,
    label: '6',
  },
  {
    value: 7,
    label: '7',
  },
  {
    value: 8,
    label: '8',
  },
  {
    value: 9,
    label: '9',
  },
  {
    value: 10,
    label: '10',
  },
];

const SpicinessInput = ({ input, ...rest }) => {
  return (
    <>
      <StyledHeading>Spiciness Level*</StyledHeading>
      <Wrapper>
        <Slider
          value={input.value ? parseInt(input.value) : 0}
          onChange={input.onChange}
          {...rest}
          defaultValue={0}
          min={0}
          max={10}
          step={1}
          marks={marks}
          required
        />
        <LocalFireDepartmentIcon sx={{ color: red[800] }} />
      </Wrapper>
    </>
  );
};

export default SpicinessInput;
