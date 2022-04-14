import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
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
        
        <Typography sx={{ float: 'left', color: '#333333', fontSize:'17px' }} variant="span" >
            
            <span style={{ padding: '15px'}}><AccountCircleIcon color="primary" />   Username@gmail.com</span>
        </Typography>
      </CardContent>
    </Card>
  );
}
