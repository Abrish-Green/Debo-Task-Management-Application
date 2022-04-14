import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AssignmentIcon from '@mui/icons-material/Assignment';
import Team from './Team'
import { Grid } from '@mui/material';
const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        
        <Typography sx={{ float: 'left', color: '#333333', fontSize:'20px' }} variant="span" >
            <AssignmentIcon color="success" />   
            <span style={{ padding: '15px'}}>Do this task</span>
        </Typography>
        <Grid container >
          <Grid item xs={8}>
              <Team email="abrhammuche@gmail.com" />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
