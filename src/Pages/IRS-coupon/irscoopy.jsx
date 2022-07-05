import React ,{useState} from 'react'
// import inputFormElements from '../Data/data'
import CounterParty ,{Custodian,AccountName,DayCountConvention,ClearingHouse,Currency,BenchmarkIndex,BusinessCentreHoliday,PaymentFrequency,RestructingType,RollConvention,PriceConvention,OrderTypeCDS,OrderTypeIRS,ValuationCDS,ValuationOptions,Commission,TypeOfBarrier,BusinessDateAdjustment,QuoteFormatcds,TradeTypes,TerminationDate,BookingStatus,QuoteType,Rounding,TradeTypeOtc,PrincipalExchange,FeesOtc,DiscountCurve,CashFlowType,Status,TraderDealer,PrimeBrokersServices,OrderType,ExpirationStyle,SettlementType,CurrencyPairs,OrderTypeRepo,SecurityType,TypeOfBarrierSingle,BusinessDateAdjustmentRestBdc} from '../Data/Datamain';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { amber } from '@mui/material/colors';
import { Button } from '@mui/material';
// import MenuItem from '@mui/material';
import MenuItem from "@mui/material/MenuItem";
// import { boxSizing } from '@mui/system';
// import { BorderColor } from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';



export default function IrsCoupon() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let email = data.get('email')
    let data1 = data.get('unexpected')
    console.log(email , data1);
  }


const [value, setValue] =useState('BSS');

const handleChange = (event) => {
  setValue(event.target.value);
};
const outerTheme = createTheme({
  palette: {
    primary: {
      main: amber[500],
    },
    secondary:{
      main:'#ffffff'
    },
    typography: {
      main:'#ffffff',
     
    },
  },
});

  return (
    <>
    <ThemeProvider theme={outerTheme}>
    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                style={{ background:'#616161',color:amber[500]}}
              />
              <TextField
              id="outlined-select-currency"
              select={true}
              sx={{color:'red'}}
              label="Counter Party"
              name='unexpected'
              value={value}
              inputprops={{ style: { fontFamily: 'Arial', color:  amber[500]}}}
              style={{ background:'#616161',color:amber[500]}}
              onChange={handleChange}
              >
            {CounterParty.elements.map((option) => (
              <MenuItem key={option.value} value={option.value} inputprops={{ style: { fontFamily: 'Arial', color:  amber[400]}}} >
                {option.text}
              </MenuItem>
            ))}
            
          </TextField>
               <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
    </Box>
    </ThemeProvider>
    </>
  )
}
