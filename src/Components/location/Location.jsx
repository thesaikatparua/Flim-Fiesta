import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function SelectSmall() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
    
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120}} size="small" error>
      <InputLabel id="demo-select-small-label"><LocationOnIcon style={{color:"black"}}/></InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={age}
        label="Age"
        onChange={handleChange}
       
      >
        <MenuItem value={10}>Kolkata</MenuItem>
        <MenuItem value={20}>Delhi</MenuItem>
        <MenuItem value={100}>Bengaluru</MenuItem>
        <MenuItem value={30}>Mumbai</MenuItem>
        <MenuItem value={30}>Hyderabad</MenuItem>
      </Select>
    </FormControl>
  );
}