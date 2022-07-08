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
    <div style={{background:'black'}}>
       <Container sx={{mt:5 }}>
        {/* ----------------------------------------------------- 1 */}
       <Grid container spacing={14}>
            <Grid item xs={4} >
            <Card sx={{ maxWidth: 300 ,bgcolor:'#FFC000'}} >
                
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" style={{color:'black'}}>
                    IRS-coupon
                    </Typography>
                    <Typography variant="body2" color="text.secondary" style={{color:'black'}}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" style={{color:'green' , fontWeight:'bolder'}}  href='irsCoupon'>START</Button>
                    <Button size="small" style={{color:'red' }}>Learn More</Button>
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
                    <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" style={{color:'green' , fontWeight:'bolder'}} href='irsBasis'>START</Button>
                    <Button size="small" style={{color:'red' }}>Learn More</Button>
                </CardActions>
                </Card>
            </Grid>
            {/* ---------------------------------------------------- */}
            <Grid item xs={4} >
            <Card sx={{ maxWidth: 300 , bgcolor:'#ffc000'}}  style={{color:'black'}}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    CDS
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" style={{color:'green' , fontWeight:'bolder'}} >START</Button>
                     <Button size="small" style={{color:'red' }}>Learn More</Button>
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
                    <Typography variant="body2" color="text.secondary">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" style={{color:'green' , fontWeight:'bolder'}}  href={'swapation'}>START</Button>
                     <Button size="small" style={{color:'red' }}>Learn More</Button>
                </CardActions>
                </Card>
            </Grid>
            {/* ------------------------------ 5*/}
            <Grid item xs={4}>
            <Card sx={{ maxWidth: 300 , bgcolor:'#ffc000'}}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div"  style={{color:'black'}}>
                    Cap & Floar
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" style={{color:'green' , fontWeight:'bolder'}} href='capandfloor'>START</Button>
                     <Button size="small" style={{color:'red' }}>Learn More</Button>
                </CardActions>
                </Card>
            </Grid>
             {/* ------------------------------ 6 */}
             <Grid item xs={4}>
            <Card sx={{ maxWidth: 300, bgcolor:'#ffc000' }}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div"  style={{color:'black'}}>
                    FRA
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" style={{color:'green' , fontWeight:'bolder'}} href='fra'>START</Button>
                     <Button size="small" style={{color:'red' }}>Learn More</Button>
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
                    <Typography variant="body2" color="text.secondary">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" style={{color:'green' , fontWeight:'bolder'}} href='repo'>START</Button>
                     <Button size="small" style={{color:'red' }}>Learn More</Button>
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
                    <Typography variant="body2" color="text.secondary">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" style={{color:'green' , fontWeight:'bolder'}} href='fxswap'>START</Button>
                     <Button size="small" style={{color:'red' }}>Learn More</Button>
                </CardActions>
                </Card>
            </Grid>
             {/* ------------------------------ 9 */}
             <Grid item xs={4}>
            <Card sx={{ maxWidth: 300, bgcolor:'#ffc000' }}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" style={{color:'black'}}>
                    OTC-OV 
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" style={{color:'green' , fontWeight:'bolder'}} href='otcov'>START</Button>
                     <Button size="small" style={{color:'red' }}>Learn More</Button>
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
                    <Typography variant="body2" color="text.secondary">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" style={{color:'green' , fontWeight:'bolder'}} href='fxoptions'>START</Button>
                     <Button size="small" style={{color:'red' }}>Learn More</Button>
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
                    <Typography variant="body2" color="text.secondary">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" style={{color:'green' , fontWeight:'bolder'}} href='slb'>START</Button>
                     <Button size="small" style={{color:'red' }}>Learn More</Button>
                </CardActions>
                </Card>
            </Grid>
             {/* ------------------------------ */}
             <Grid item xs={4}>
            <Card sx={{ maxWidth: 300, bgcolor:'#ffc000' }}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div"  style={{color:'black'}}>
                    BDTO 
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" style={{color:'green' , fontWeight:'bolder'}} href='bdto'>START</Button>
                     <Button size="small" style={{color:'red' }}>Learn More</Button>
                </CardActions>
                </Card>
            </Grid>
            </Grid>
       </Container>
    </div>
  );
}