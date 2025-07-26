import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import { styled } from '@mui/material/styles';
import StarIcon from '@mui/icons-material/Star';

const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#DDDB00', 
  },
  '& .MuiRating-iconHover': {
    color: '#DDDB00', 
  },
  '& .MuiRating-iconEmpty': {
    color: '#ffffff', 
  },
});

export default function BasicRating() {
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);
  
  const labels = {
    1: '1',
    2: '2',
    3: '3',
    4: '4',
    5: '5',
  };

  function getLabelText(value) {
    return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
  }

  return (
    <Box sx={{ width: 200, display: 'flex', alignItems: 'center' }}>
      <StyledRating
        name="simple-controlled"
        value={value}
        getLabelText={getLabelText}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        icon={<StarIcon fontSize="inherit" />}
        emptyIcon={<StarIcon fontSize="inherit" style={{ opacity: 0.55 }} />}
      />
      {value !== null && (
        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}/{labels[5]}</Box>
      )}
    </Box>
  );
}