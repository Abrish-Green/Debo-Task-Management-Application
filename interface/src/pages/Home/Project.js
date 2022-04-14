import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AppsIcon from '@mui/icons-material/Apps';
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
        
      <Button sx={{border:'0px solid #111', color: '#333333', fontSize:'16px',width: '100%' }} variant="outlined">
        <Typography sx={{ float: 'left', color: '#333333' }} variant="span" >
            <span style={{ padding: '15px'}}>Project Name</span>
        </Typography>
      </Button>
      </CardContent>
    </Card>
  );
}
