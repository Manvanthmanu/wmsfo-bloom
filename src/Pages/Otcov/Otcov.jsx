import React from 'react'
import Dropdown from '../API/Dropdown'
import Datepicker from '../API/Calender'
import InputField from '../API/InputField'
import CounterParty , {Custodian,AccountName,DayCountConvention,ClearingHouse,Currency,BenchmarkIndex,BusinessCentreHoliday,PaymentFrequency,RestructingType,RollConvention,PriceConvention,OrderTypeCDS,OrderTypeIRS,ValuationCDS,ValuationOptions,Commission,TypeOfBarrier,BusinessDateAdjustment,QuoteFormatcds,TradeTypesirs,TerminationDate,BookingStatus,QuoteType,Rounding,TradeTypeOtc,PrincipalExchange,FeesOtc,DiscountCurve,CashFlowType,Status,TraderDealer,PrimeBrokersServices,OrderType,ExpirationStyle,SettlementType,CurrencyPairs,OrderTypeRepo,SecurityType,TypeOfBarrierSingle,BusinessDateAdjustmentRestBdc ,ReferenceInstrument, BermudaExcerise, Type, Settlement, PaymentTypes, Yesno, NearRateType} from '../Data/Datamain'
import SingleBarrier ,{DoubleBarrier} from '../API/SingleBarrier'



import { Box } from '@mui/material'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import { ThemeProvider } from '@mui/material'
import { green,blue } from '@mui/material/colors'
import { createTheme } from '@mui/material'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import './Otcov.css'

const theme = createTheme({
  palette: {
    primary: {
      main: green['A200'],
    },
    secondary: {
      main: green[500],
    },
  },
});

function CDS() {
 
  const manvanth=true;
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    var date1= data.get('row-radio-buttons-group')
    console.log(date1)

  }

  const [changed, setchanged] = React.useState(<SingleBarrier/>);
  const handleChange=(event)=>{
    setchanged(<DoubleBarrier/>);
  }
  const handleChange2=(event)=>{
    setchanged(<SingleBarrier/>);
  }
   



  return (
    <div style={{background:'black' ,paddingBottom:'100px'}}>
      <Container >
        <div className="header">
          <h1 style={{textAlign:'center' }}>OTC & Exotic  Barrier Options </h1>
        </div>
        <ThemeProvider theme={theme}>   
          <Box component='form'  onSubmit={handleSubmit}>

            <Grid container spacing={1} className='mainGrid-1' >
              <Dropdown name={CounterParty} label={CounterParty.label} />
              <Dropdown name={TradeTypesirs} label={TradeTypesirs.label} />
              <Dropdown name={AccountName} label={'Account Name'} />
              <Datepicker name={'Trade Date'} label={'Trade Date'}/>
              <InputField label={'Deal Number'} value={Math.floor((Math.random() * 1000) + 1)}  disabled={manvanth}/>
              <Datepicker name={'Settlement date'} label={'Settlement date'}/>
              <Dropdown name={TraderDealer} label={TraderDealer.label} />
              <Dropdown name={BookingStatus} label={BookingStatus.label} />
            </Grid>

            <Grid container spacing={1} className='mainGrid-2' > 
              <InputField label={'Initial Margin %'} type={'number'}/>
              <Dropdown name={Currency} label={'Currency'} />

            </Grid>
            <Grid container className='barrier' spacing={2}>

                <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">{'Barrier'}</FormLabel>
                <RadioGroup
                    row
                    defaultValue={'single barrier'}
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"       
                    >
                    <FormControlLabel onClick={handleChange2} value='single barrier' control={<Radio />} label={'single barrier'} />
                    <FormControlLabel onClick={handleChange} value='double barrier' control={<Radio />} label={'double barrier'}  />
                </RadioGroup>
                </FormControl>

                </Grid>

           <Grid container spacing={1} className='mainGrid-3 changeable'  id="change"> 


            <div className='subheading subheading-1'>
                  <h3 className='subHeading'>TERMS</h3>
              </div>
              <div className="container">
                <Grid container className='container-sub' >
                  <InputField label={'Underlying'} type={'text'}/>
                  <Grid item className={'section'} xs={5.5}></Grid>
                  <Dropdown name={OrderType} label={'Transaction'} />
                  <InputField label={'Call'} type={'number'}/>
                  <InputField label={'Quantity'} type={'number'}/>
                  <InputField label={'Contract Size'} type={'number'}/>
                  <InputField label={'Strike'} type={'number'}/>
                  <Datepicker name={'Expiry'} label={'Expiry'}/>
                  <Dropdown name={ExpirationStyle} label={'Exercise Type'} />
                  <InputField label={'FX Rate (Trade to Book)'} type={'number'}/>
                  <InputField label={'Price [premium}'} type={'number'}/>
                  <Dropdown name={Currency} label={'Premium Currency'} />
                  <InputField label={'Volatility Proxy'} type={'number'}/>
                  <Grid item className={'section'} xs={5.5}></Grid>
                  <Dropdown name={SettlementType} label={'Settlement Type'} />

                  

                </Grid>
              </div> 
            </Grid> 
                {changed}

                <Grid container className='barrier Dividends' spacing={2}>

                <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">{'Dividends'}</FormLabel>
                <RadioGroup
                    row
                    defaultValue={'Adjustment'}
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"       
                    >
                    <FormControlLabel value='Adjustment' control={<Radio />} label={'Adjustment'} />
                    <FormControlLabel  value='No Adjustment' control={<Radio />} label={'No Adjustment'}  />
                </RadioGroup>
                </FormControl>

                </Grid>
            <div className="change" id="change">

            </div>


            <Grid container spacing={1} className='mainGrid-2' >
                <InputField label={'Payments'} type={'number'}/>

                <Grid item className={'section'} xs={5.5}></Grid>
                <Dropdown name={OrderType} label={'Order type'} />
                <Grid item className={'section'} xs={5.5}></Grid>
                <Dropdown name={Currency} label={'Settlement Currency'} />
                <Grid item className={'section'} xs={5.5}></Grid>
                <Dropdown name={Status} label={'Destination'} />
                <Grid item className={'section'} xs={5.5}></Grid>
                <Dropdown name={PrimeBrokersServices} label={'Prime Broker'} />
                <Grid item className={'section'} xs={5.5}></Grid>
                <Dropdown name={Commission} label={Commission.label} />
                <Grid item className={'section'} xs={5.5}></Grid>
                <Dropdown name={FeesOtc} label={FeesOtc.label} />
            </Grid>

            <Grid container spacing={1} className='mainGrid-2' >
              <Dropdown name={Status} label={'Destination'} />
              <Grid item className={'section'} xs={5.5}></Grid>
              <Dropdown name={PrimeBrokersServices} label={'Prime Broker'} />
              <Grid item className={'section'} xs={5.5}></Grid>
              <Dropdown name={Commission} label={Commission.label} />
            </Grid>

            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 5, mb: 2 ,width:'300px' ,float:'right' ,bgcolor:blue[400] ,color:'white'}}
              >
                Submit
              </Button>


          </Box>
        </ThemeProvider>
      </Container>
    </div>
  )
}

export default CDS
