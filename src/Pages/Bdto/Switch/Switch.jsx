import React from 'react'
import Dropdown from '../../API/Dropdown'
import Datepicker from '../../API/Calender'
import InputField from '../../API/InputField'
import CounterParty , {Custodian,AccountName,DayCountConvention,ClearingHouse,Currency,BenchmarkIndex,BusinessCentreHoliday,PaymentFrequency,RestructingType,RollConvention,PriceConvention,OrderTypeCDS,OrderTypeIRS,ValuationCDS,ValuationOptions,Commission,TypeOfBarrier,BusinessDateAdjustment,QuoteFormatcds,TradeTypesirs,TerminationDate,BookingStatus,QuoteType,Rounding,TradeTypeOtc,PrincipalExchange,FeesOtc,DiscountCurve,CashFlowType,Status,TraderDealer,PrimeBrokersServices,OrderType,ExpirationStyle,SettlementType,CurrencyPairs,OrderTypeRepo,SecurityType,TypeOfBarrierSingle,BusinessDateAdjustmentRestBdc ,ReferenceInstrument, BermudaExcerise, Type, Settlement, PaymentTypes, Yesno, NearRateType , FinancingType ,ordertypeslb ,PayoutTime, Buysell} from '../../Data/Datamain'


import { Box } from '@mui/material'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import { ThemeProvider } from '@mui/material'
import { green,blue } from '@mui/material/colors'
import { createTheme } from '@mui/material'
import { Typography  } from '@mui/material'
import Grow from '@mui/material/Grow'

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

function BinaryNOTouchOptions() {
  return (
    <Grow
    in={true}
    style={{ transformOrigin: '0 0 0' }}
    {...(true ? { timeout: 1000 } : {})}
    >
        <Grid container spacing={1} className='mainGrid-2' >
            <InputField label={'Intiail Margin %'} type='number'/>
            <Dropdown name={Currency} label={'IM Currency'} />
            <Dropdown name={CurrencyPairs} label={'Currency Pair'} />
            <Datepicker name={'Expiry'} label={'Expiry'}/>
            <InputField label={'Barrier'} type='text'/>
            <Dropdown name={TypeOfBarrierSingle} label={'Barrier Type'} />
            <Grid item xs={0.8}></Grid>
            <h3 style={{color:'green' , textDecoration:'underline'}}>Payout </h3>
            <Grid item xs={5.5}></Grid>
            
            <Datepicker name={'Option Settle Date'} label={'Option Settle Date'}/>
            <Dropdown name={Currency} label={'Payout Currency'} />
            <InputField label={'Calculation Agent'} type='text'/>
            <Datepicker name={'Trigger Date'} label={'Trigger Date'}/>
            <Dropdown name={PayoutTime} label={'Payout Times'} />
            <InputField label={'Cut1 (City Timings)'} type='time'/>
            <Grid item className={'section'} xs={5.5}></Grid>
            <InputField label={'Cut1 (City Timings)'} type='time'/>
            <Dropdown name={Buysell} label={'Payout Times'} />
            <Grid item className={'section'} xs={5.5}></Grid>
            <InputField label={'Premium (Basis Points )'} type='integer'/>
            <Dropdown name={Currency} label={'Premium Currency'} />
            <Dropdown name={Currency} label={'Settlment currency'} />
            <InputField label={'FX rate'} type='integer'/>
        </Grid>
       
    </Grow>
  )
}
function BinaryNodoubleTouchOptions() {
  return (
    <Grow
    in={true}
    style={{ transformOrigin: '0 0 0' }}
    {...(true ? { timeout: 1000 } : {})}
    >
        <Grid container spacing={1} className='mainGrid-2' >
            <InputField label={'Intiail Margin %'} type='number'/>
            <Dropdown name={Currency} label={'IM Currency'} />
            <Dropdown name={CurrencyPairs} label={'Currency Pair'} />
            <Datepicker name={'Expiry'} label={'Expiry'}/>
            <InputField label={'Lower Barrier'} type='text'/>
            <InputField label={'Higher Barrier'} type='text'/>
            <Grid item xs={0.8}></Grid>
            <h3 style={{color:'green' , textDecoration:'underline'}}>Payout </h3>
            <Grid item xs={5.5}></Grid>
            
            <Datepicker name={'Option Settle Date'} label={'Option Settle Date'}/>
            <Dropdown name={Currency} label={'Payout Currency'} />
            <InputField label={'Calculation Agent'} type='text'/>
            <Datepicker name={'Trigger Date'} label={'Trigger Date'}/>
            <Dropdown name={PayoutTime} label={'Payout Times'} />
            <InputField label={'Cut1 (City Timings)'} type='time'/>
            <Grid item className={'section'} xs={5.5}></Grid>
            <InputField label={'Cut1 (City Timings)'} type='time'/>
            <Dropdown name={Buysell} label={'Payout Times'} />
            <Grid item className={'section'} xs={5.5}></Grid>
            <InputField label={'Premium (Basis Points )'} type='integer'/>
            <Dropdown name={Currency} label={'Premium Currency'} />
            <Dropdown name={Currency} label={'Settlment currency'} />
            <InputField label={'FX rate'} type='integer'/>
        </Grid>
    </Grow>
  )
}
function BinarydoubleoneTouchOptions() {
  return (
    <Grow
    in={true}
    style={{ transformOrigin: '0 0 0' }}
    {...(true ? { timeout: 1000 } : {})}
    >
        <Grid container spacing={1} className='mainGrid-2' >
            <InputField label={'Intiail Margin %'} type='number'/>
            <Dropdown name={Currency} label={'IM Currency'} />
            <Dropdown name={CurrencyPairs} label={'Currency Pair'} />
            <Datepicker name={'Expiry'} label={'Expiry'}/>
            <InputField label={'Lower Barrier'} type='text'/>
            <InputField label={'Higher Barrier'} type='text'/>
            <Grid item xs={0.8}></Grid>
            <h3 style={{color:'green' , textDecoration:'underline'}}>Payout </h3>
            <Grid item xs={5.5}></Grid>
            
            <Datepicker name={'Option Settle Date'} label={'Option Settle Date'}/>
            <Dropdown name={Currency} label={'Payout Currency'} />
            <InputField label={'Calculation Agent'} type='text'/>
            <Datepicker name={'Trigger Date'} label={'Trigger Date'}/>
            <Dropdown name={PayoutTime} label={'Payout Times'} />
            <InputField label={'Cut1 (City Timings)'} type='time'/>
            <Grid item className={'section'} xs={5.5}></Grid>
            <InputField label={'Cut1 (City Timings)'} type='time'/>
            <Dropdown name={Buysell} label={'Payout Times'} />
            <Grid item className={'section'} xs={5.5}></Grid>
            <InputField label={'Premium (Basis Points )'} type='integer'/>
            <Dropdown name={Currency} label={'Premium Currency'} />
            <Dropdown name={Currency} label={'Settlment currency'} />
            <InputField label={'FX rate'} type='integer'/>
        </Grid>
    </Grow>
  )
}
function BinaryoneTouchOptions() {
  return (
    <Grow
    in={true}
    style={{ transformOrigin: '0 0 0' }}
    {...(true ? { timeout: 1000 } : {})}
    >
        <Grid container spacing={1} className='mainGrid-2' >
            <InputField label={'Intiail Margin %'} type='number'/>
            <Dropdown name={Currency} label={'IM Currency'} />
            <Dropdown name={CurrencyPairs} label={'Currency Pair'} />
            <Datepicker name={'Expiry'} label={'Expiry'}/>
            <InputField label={'Barrier'} type='text'/>
            <Dropdown name={TypeOfBarrierSingle} label={'Barrier Type'} />
            <Grid item xs={0.8}></Grid>
            <h3 style={{color:'green' , textDecoration:'underline'}}>Payout </h3>
            <Grid item xs={5.5}></Grid>
            
            <Datepicker name={'Option Settle Date'} label={'Option Settle Date'}/>
            <Dropdown name={Currency} label={'Payout Currency'} />
            <InputField label={'Calculation Agent'} type='text'/>
            <Datepicker name={'Trigger Date'} label={'Trigger Date'}/>
            <Dropdown name={PayoutTime} label={'Payout Times'} />
            <InputField label={'Cut1 (City Timings)'} type='time'/>
            <Grid item className={'section'} xs={5.5}></Grid>
            <InputField label={'Cut1 (City Timings)'} type='time'/>
            <Dropdown name={Buysell} label={'Payout Times'} />
            <Grid item className={'section'} xs={5.5}></Grid>
            <InputField label={'Premium (Basis Points )'} type='integer'/>
            <Dropdown name={Currency} label={'Premium Currency'} />
            <Dropdown name={Currency} label={'Settlment currency'} />
            <InputField label={'FX rate'} type='integer'/>
        </Grid>
    </Grow>
  )
}
function DigitalOptions() {
  return (
    <Grow
    in={true}
    style={{ transformOrigin: '0 0 0' }}
    {...(true ? { timeout: 1000 } : {})}
    >
        <div>
            <Grid container spacing={1} className='mainGrid-2' >
                <InputField label={'Intiail Margin %'} type='number'/>
                <Dropdown name={Currency} label={'IM Currency'} />
                <Dropdown name={CurrencyPairs} label={'Currency Pair'} />
                <Datepicker name={'Expiry'} label={'Expiry'}/>
                <InputField label={'strike rate'} type='number'/>
                <InputField label={'call/ put'} type='number'/>
            </Grid>

            <FormControl style={{alignItems:'center' , display:'flex' , marginTop:'20px'}}>
                    <FormLabel id="demo-row-radio-buttons-group-label" style={{textAlign:'center'}}>{'Payout type'}</FormLabel>
                    <RadioGroup
                        row
                        defaultValue={'Cash'}
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"       
                        >
                        <FormControlLabel value='Cash' control={<Radio />} label={'Cash'} />
                        <FormControlLabel  value='Assets' control={<Radio />} label={'Assets'}  />
                    </RadioGroup>
            </FormControl>

            <Grid container spacing={1} className='mainGrid-2' >
                <InputField label={'Cut1 (City Timings)'} type='time'/>
                <InputField label={'Cut2 (City Timings)'} type='time'/>
                <InputField label={'Calculation Agent'} type='text'/>
                <Datepicker name={'Trigger Date'} label={'Expiry'}/>
                <Dropdown name={PayoutTime} label={'Payout Time'} />
                <Grid item className={'section'} xs={5.5}></Grid>
                <InputField label={'Premium details'} type='text'/>
                <Grid item className={'section'} xs={5.5}></Grid>
                <Dropdown name={Buysell} label={'Order Type'} />
                <Grid item className={'section'} xs={5.5}></Grid>
                <InputField label={'Premium (Basis Points)'} type='text'/>
                <Dropdown name={Currency} label={'Premium Currency'} />
                <Dropdown name={Currency} label={'Settlment currency'} />
                <InputField label={'FX rate'} type='text'/>

            </Grid>

            <Grid container spacing={1} className='mainGrid-2' >
                <InputField label={'Commission'} type='text'/>
                <Grid item className={'section'} xs={5.5}></Grid>
                <Dropdown name={FeesOtc} label={'Fees/Taxes'} />


            </Grid>
        </div>
    </Grow>
  )
}



export default BinaryNOTouchOptions

export { BinaryNodoubleTouchOptions , BinarydoubleoneTouchOptions , BinaryoneTouchOptions , DigitalOptions }
