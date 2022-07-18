import * as React from 'react';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import './style.css'





export default function BoxSx() {

    
  return (
    <div style={{background:'black' ,paddingBottom:'40px'}}>
       <Container sx={{mt:5 }}>
        {/* ----------------------------------------------------- 1 */}
       <Grid container spacing={14}>
            <Grid item xs={4} >
            <Card sx={{ maxWidth: 300 ,bgcolor:'#FFC000'}} >
                
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" style={{color:'black'}}>
                    IRS-coupon
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" style={{color:'green' , fontWeight:'bolder'}}  href='irsCoupon'>TRADE</Button>
                    
                </CardActions>
                </Card>
            </Grid>
            {/* ---------------------------------------------------- */}
            <Grid item xs={4} >
            <Card sx={{ maxWidth: 300, bgcolor:'#ffc000' }}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div"  style={{color:'black'}}>
                    IRS-Basis
                    </Typography>
                    
                </CardContent>
                <CardActions>
                    <Button size="small" style={{color:'green' , fontWeight:'bolder'}} href='irsBasis'>TRADE</Button>
                    
                </CardActions>
                </Card>
            </Grid>
            {/* ---------------------------------------------------- */}
            <Grid item xs={4} >
            <Card sx={{ maxWidth: 300 , bgcolor:'#ffc000'}}  style={{color:'black'}}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Credit Default Swaps
                    </Typography>
                    
                </CardContent>
                <CardActions>
                    <Button size="small" style={{color:'green' , fontWeight:'bolder'}} >TRADE</Button>
                     
                </CardActions>
                </Card>
            </Grid>
            {/* ------------------------------------------------- 4*/}
            <Grid item xs={4}>
            <Card sx={{ maxWidth: 300 , bgcolor:'#ffc000'}}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div"  style={{color:'black'}}>
                    swaptions
                    </Typography>
                    
                </CardContent>
                <CardActions>
                    <Button size="small" style={{color:'green' , fontWeight:'bolder'}}  href={'swapation'}>TRADE</Button>
                     
                </CardActions>
                </Card>
            </Grid>
            {/* ------------------------------ 5*/}
            <Grid item xs={4}>
            <Card sx={{ maxWidth: 300 , bgcolor:'#ffc000'}}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div"  style={{color:'black'}}>
                    interest are cap and floor
                    </Typography>
                    
                </CardContent>
                <CardActions>
                    <Button size="small" style={{color:'green' , fontWeight:'bolder'}} href='capandfloor'>TRADE</Button>
                     
                </CardActions>
                </Card>
            </Grid>
             {/* ------------------------------ 6 */}
             <Grid item xs={4}>
            <Card sx={{ maxWidth: 300, bgcolor:'#ffc000' }}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div"  style={{color:'black'}}>
                    Forward Rate Agreement 
                    </Typography>
                    
                </CardContent>
                <CardActions>
                    <Button size="small" style={{color:'green' , fontWeight:'bolder'}} href='fra'>TRADE</Button>
                     
                </CardActions>
                </Card>
            </Grid>
             {/* ------------------------------ 7 */}
             <Grid item xs={4}>
            <Card sx={{ maxWidth: 300 , bgcolor:'#ffc000'}}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div"  style={{color:'black'}}>
                    Repo 
                    </Typography>
                    
                </CardContent>
                <CardActions>
                    <Button size="small" style={{color:'green' , fontWeight:'bolder'}} href='repo'>TRADE</Button>
                     
                </CardActions>
                </Card>
            </Grid>
             {/* ------------------------------ 8 */}
             <Grid item xs={4}>
            <Card sx={{ maxWidth: 300 , bgcolor:'#ffc000'}}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div"  style={{color:'black'}}>
                    FX Swap
                    </Typography>
                    
                </CardContent>
                <CardActions>
                    <Button size="small" style={{color:'green' , fontWeight:'bolder'}} href='fxswap'>TRADE</Button>
                     
                </CardActions>
                </Card>
            </Grid>
             {/* ------------------------------ 9 */}
             <Grid item xs={4}>
            <Card sx={{ maxWidth: 300, bgcolor:'#ffc000' }}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" style={{color:'black'}}>
                    OTC & Exotic  Barrier Options 
                    </Typography>
                    
                </CardContent>
                <CardActions>
                    <Button size="small" style={{color:'green' , fontWeight:'bolder'}} href='otcov'>TRADE</Button>
                     
                </CardActions>
                </Card>
            </Grid>
             {/* ------------------------------ 10 */}
             <Grid item xs={4}>
            <Card sx={{ maxWidth: 300, bgcolor:'#ffc000' }}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div"  style={{color:'black'}}>
                    Fx options
                    </Typography>
                    
                </CardContent>
                <CardActions>
                    <Button size="small" style={{color:'green' , fontWeight:'bolder'}} href='fxoptions'>TRADE</Button>
                     
                </CardActions>
                </Card>
            </Grid>
             {/* ------------------------------ */}
             <Grid item xs={4}>
            <Card sx={{ maxWidth: 300, bgcolor:'#ffc000' }}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div"  style={{color:'black'}}>
                    SLB 
                    </Typography>
                    
                </CardContent>
                <CardActions>
                    <Button size="small" style={{color:'green' , fontWeight:'bolder'}} href='slb'>TRADE</Button>
                     
                </CardActions>
                </Card>
            </Grid>
             {/* ------------------------------ */}
             <Grid item xs={4}>
            <Card sx={{ maxWidth: 300, bgcolor:'#ffc000' }}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div"  style={{color:'black'}}>
                    Brand-Price Trade Off 
                    </Typography>
                    
                </CardContent>
                <CardActions>
                    <Button size="small" style={{color:'green' , fontWeight:'bolder'}} href='bdto'>TRADE</Button>
                     
                </CardActions>
                </Card>
            </Grid>
            </Grid>
       </Container>
    </div>
  );
}