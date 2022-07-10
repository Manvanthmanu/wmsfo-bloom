import React from 'react'
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { Grid } from '@mui/material';
import './style.css'



function Dropdown(props) {


    const [value, setvalue] = React.useState(props.name.elements[0].value);
    const handleChange = (event) => {
        setvalue(event.target.value);
      }
  return (
    <Grid className='dropdown' item xs={5.5}>
        <Typography className={props.classname}>
            {props.label} 
        </Typography>
        <FormControl sx={{  minWidth: 120 ,bgcolor:'#FFC000' }} size="small" >
                    <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    name={props.name.name}
                    onChange={handleChange}
                    
                    value={value}
                    style={{border:'none' , width:'345px' , height:'40px' ,fontSize:'12px'}}
                    >
                    {props.name.elements.map((option) => (
                        <MenuItem style={{fontSize:'10px'}} key={option.value} value={option.value}  >
                            {option.text}   
                        </MenuItem>
                        ))}
                    </Select>
        </FormControl>
    </Grid>
  )
}

export default Dropdown