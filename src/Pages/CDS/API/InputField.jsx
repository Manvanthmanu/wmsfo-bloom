import React  from 'react'
import { Grid } from '@mui/material'
import { Typography } from '@mui/material'
import TextField from '@mui/material/TextField'

function InputField(props) {


  return (
    <Grid className='section textfield' item xs={5.5}>
                <Typography>
                  {props.label}
                </Typography>
                <TextField
                  className='textfield5'
                  type={props.type}
                  disabled={props.disabled}
                  id="outlined-disabled"
                  name={props.name}
                  value={props.value}
                  sx={{color:'black'}}
                  
                />
                
              </Grid>
  )
}

export default InputField