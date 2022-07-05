import * as React from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { color, height } from '@mui/system';
import createTheme from '@mui/system/createTheme';
import './style.css'
import { FormControl } from '@mui/material/';

export default function Datepicker(props) {
  const [value, setValue] = React.useState(new Date('2014-08-18T21:11:54'));

  const handleChange = (newValue) => {
    setValue(newValue);
    console.log(value)
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} style={props.value}>
      <Stack spacing={3} sx={{color:'red'  ,width:'345px' ,maxHeight:'40px' ,zIndex:'2'}}>
      
        <DesktopDatePicker
        
          className='changewidth'
          style={{}}
          inputFormat="MM/dd/yyyy"
          value={value}
          onChange={handleChange}
          renderInput={(params) =><FormControl sx={{bgcolor:'#FFC000' }} size="small" > <TextField className='manvanth' style={{bgcolor:'#FFC000'}} {...params}/></FormControl>
        }
        />
      
      </Stack>
    </LocalizationProvider>
  );
}
