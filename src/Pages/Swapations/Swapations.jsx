import React from 'react'
import Dropdown from '../API/Dropdown'
import Datepicker from '../API/Calender'
import InputField from '../API/InputField'
import CounterParty , {Custodian,AccountName,DayCountConvention,ClearingHouse,Currency,BenchmarkIndex,BusinessCentreHoliday,PaymentFrequency,RestructingType,RollConvention,PriceConvention,OrderTypeCDS,OrderTypeIRS,ValuationCDS,ValuationOptions,Commission,TypeOfBarrier,BusinessDateAdjustment,QuoteFormatcds,TradeTypesirs,TerminationDate,BookingStatus,QuoteType,Rounding,TradeTypeOtc,PrincipalExchange,FeesOtc,DiscountCurve,CashFlowType,Status,TraderDealer,PrimeBrokersServices,OrderType,ExpirationStyle,SettlementType,CurrencyPairs,OrderTypeRepo,SecurityType,TypeOfBarrierSingle,BusinessDateAdjustmentRestBdc ,ReferenceInstrument, BermudaExcerise} from '../Data/Datamain'



import { Box } from '@mui/material'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import { ThemeProvider } from '@mui/material'
import { green,blue } from '@mui/material/colors'
import { createTheme } from '@mui/material'
import './swapations.css'

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
    var date1= data.get('date1')
    var date2= data.get('date2')
    var currency= data.get(Currency.name)
    var input= data.get('input1')
    console.log(date1,date2 , currency,input)
  }
  return (
    <div style={{background:'black' ,paddingBottom:'100px'}}>
      <Container >
        <div className="header">
          <h1 style={{textAlign:'center' }}>Swapations</h1>
        </div>
        <ThemeProvider theme={theme}>   
          <Box component='form'  onSubmit={handleSubmit}>

            <Grid container spacing={1} className='mainGrid-1' >
              <Dropdown name={CounterParty} label={CounterParty.label} />
              <Dropdown name={TradeTypesirs} label={TradeTypesirs.label} />
              <Dropdown name={Custodian} label={'Account Name'} />
              <Datepicker name={'Trade Date'} label={'Trade Date'}/>
              <InputField label={'Deal Number'} value={Math.floor((Math.random() * 1000) + 1)}  disabled={manvanth}/>
              <Datepicker name={'Settlement date'} label={'Settlement date'}/>
              <Dropdown name={TraderDealer} label={TraderDealer.label} />
              <Dropdown name={BookingStatus} label={BookingStatus.label} />
            </Grid>

            <Grid container spacing={1} className='mainGrid-2' >
              <Datepicker name={'Start Date '} label={'Start Date '}/>
              <Datepicker name={'Termination Date '} label={'Termination Date '}/>
              <Dropdown name={PrincipalExchange} label={PrincipalExchange.label} />
              <Dropdown name={Currency} label={'Settlement CCY'} />
              <Dropdown name={ClearingHouse} label={ClearingHouse.label} />
              <Dropdown name={BusinessCentreHoliday} label={'Settlement Days'} />
              <Grid item className='section' xs={5.5}></Grid>
              <InputField label={'Dirty Price'} type={'number'}/>
            </Grid>

            <Grid container spacing={1} className='mainGrid-2' >
              <Datepicker name={'Excerise start date '} label={'Excerise start date '}/>
              <Datepicker classname={'lowsize'} name={'Excerise termination date'} label={'Excerise termination date'}/>
              <InputField classname={'lowsize'}  label={'Exercise Fee(%) of notion'} type={'number'}/>
              <InputField label={'Accural rate scale factor '} type={'number'}/>
              <Dropdown name={BermudaExcerise} label={'Bermuda Excerise'} />
              <InputField label={'settlement type cash'} type={'text'}/>

            </Grid>


            <Grid container spacing={1} className='mainGrid-3' > 
              <div className='subheading subheading-1'>
                  <h3 className='subHeading'>Fixed Leg</h3>
              </div>
              <div className="container">
                <Grid container className='container-sub' >
                  <Dropdown name={Currency} label={'Notional Currency'} />
                  <Dropdown name={PaymentFrequency} label={PaymentFrequency.label} />
                  <Dropdown name={DayCountConvention} label={'Day Count'} />
                  <Dropdown name={BusinessDateAdjustmentRestBdc} label={'Business Day Conve'} />
                  <Datepicker name={'First Payment Date '} label={'First Payment Date'}/>
                  <Datepicker name={'Last Payment Date '} label={'Last Payment Date'}/>
                  <InputField label={'Fixed Rate'} type={'text'}/>
                  <Dropdown name={CashFlowType} label={CashFlowType.label} />
                  <Dropdown name={PaymentFrequency} label={'Reset Frequency'} />
                  <Dropdown name={BusinessCentreHoliday} label={'Holiday Centres'} />
                </Grid>
              </div>
            </Grid>


            <Grid container spacing={1} className='mainGrid-3' > 
              <div className='subheading subheading-1'>
                  <h3 className='subHeading'>Floating Leg</h3>
              </div>
              <div className="container">
                <Grid container className='container-sub' >
                  <Dropdown name={Currency} label={'Notional Currency'} />
                  <Dropdown name={PaymentFrequency} label={PaymentFrequency.label} />
                  <Dropdown name={DayCountConvention} label={'Day Count'} />
                  <Dropdown name={BusinessDateAdjustmentRestBdc} label={'Business Day Conve'} />
                  <Datepicker name={'First Payment Date '} label={'First Payment Date'}/>
                  <Datepicker name={'Last Payment Date '} label={'Last Payment Date'}/>
                  <Dropdown name={BenchmarkIndex} label={BenchmarkIndex.label} />
                  <Dropdown name={DiscountCurve} label={DiscountCurve.label} />
                  <Dropdown name={PaymentFrequency} label={'Reset Frequency'} />
                  <Dropdown name={BusinessCentreHoliday} label={'Holiday Centres'} />
                  <InputField label={'Lookback Days'} type={'text'}/>
                  <Dropdown name={DayCountConvention} label={'Reset Day Counts'} />
                  <InputField label={'Floor Rate'} type={'text'}/>
                  <InputField label={'Initial Spread (BPS)'} type={'text'}/>
                  <Datepicker name={'First Reset Date '} label={'First Reset Date'}/>
                  <Dropdown name={Rounding} label={Rounding.label} />
                  <Grid className='section' item xs={5.5}></Grid>
                  <Dropdown name={BusinessDateAdjustmentRestBdc} label={'Rest BDC'} />
                </Grid>
              </div>
            </Grid>

            <Grid container spacing={1} className='mainGrid-3' > 
              <div className='subheading subheading-1'>
                  <h3 className='subHeading'>Trade Instructions (SSI's)</h3>
              </div>
              <div className="container">
                <Grid container className='container-sub' >
                  <Dropdown name={OrderType} label={OrderType.label} />
                  <Dropdown name={Status} label={Status.label} />
                  <Dropdown name={OrderType} label={'swap transaction type'} />
                  <Dropdown name={PrimeBrokersServices} label={'Prime Broker'} />
                  <InputField label={'FX Float/Fixed'} type={'number'}/>
                  <Dropdown name={Commission} label={Commission.label} />
                </Grid>
              </div>
            </Grid>


            <Grid container spacing={1} className='mainGrid-3' > 
           
            </Grid>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 ,width:'300px' ,float:'right' ,bgcolor:blue[400] ,color:'white'}}
                
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
