import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { Link, Navigate } from 'react-router-dom';

const style = {
  width: '100%',
  maxWidth: 360,
  bgcolor: 'background.paper',
};

const styles = {
  textDecoration:'none',
  color: 'black'
}

export default function ListDividers() {
  return (
    <List sx={style} component="nav" aria-label="mailbox folders">
      <ListItem Link>
        <Link style={styles} to="/Manager/Home">Dashboard </Link>
      </ListItem>
      <Divider />
      <ListItem Link divider>
        <Link  style={styles} to="/Manager/Project/:projectId">Projects </Link>
      </ListItem>
      <ListItem Link>
        <ListItemText primary="Team" />
      </ListItem>
      <Divider light />
      
    </List>
  );
}
