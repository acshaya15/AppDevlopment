import * as React from 'react';
import { useState } from 'react';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
// import Typography from '@mui/material/Typography';
// import ContentCut from '@mui/icons-material/ContentCut';
import ContentCopy from '@mui/icons-material/ContentCopy';
import ContentPaste from '@mui/icons-material/ContentPaste';
// import Cloud from '@mui/icons-material/Cloud';
import {Link} from "react-router-dom";
export default function IconMenu() {


  

  return (
    <Paper sx={{ width: 320, maxWidth: '100%' }}>
      <MenuList>
      
        {/* <MenuItem>
          <ListItemIcon>
            <ContentCopy fontSize="small" />
          </ListItemIcon>
          <ListItemText>Switch Appearance</ListItemText>
       
        </MenuItem> */}
        {/* <MenuItem>
          <ListItemIcon>
            <ContentPaste fontSize="small" />
          </ListItemIcon>
          <ListItemText>Report a problem</ListItemText>
          
        </MenuItem> */}
        <Divider />
        {/* <MenuItem>
          
          <ListItemText>Switch accounts</ListItemText>
        </MenuItem> */}
        <MenuItem>
          
          <ListItemText><Link to="/login" style={{textDecoration:"none"}}>Log out</Link></ListItemText>
        </MenuItem>
      </MenuList>
    </Paper>
  );
}