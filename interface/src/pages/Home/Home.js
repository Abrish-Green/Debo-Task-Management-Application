import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import SideBar from "../../components/Sidebar/SideBar";
import { Grid, Paper, Typography } from "@mui/material";
import Project from "./Project";
import Team from "./Team";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import { useParams} from 'react-router-dom'

const drawerWidth = 240;

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: "80vh",
  overflow:'auto'
}));

const mdTheme = createTheme();

function DashboardContent() {
  const [open, setOpen] = React.useState(true);
  const [addTask, setAddTask] = React.useState(false);

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const handleAddTask = (event) => {
    setAddTask(true);
  };
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Drawer
          variant="permanent"
          sx={{ display: { xs: "none", sm: "block" } }}
          open={open}
        >
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1],
            }}
          >
            <SideBar />
          </Toolbar>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Grid
            sx={{ padding: { xs: "5vh", md: "6vh" } }}
            container
            spacing={10}
          >
            <Grid item xs={7} spacing={5}>
              <Item>
                <Grid item xs={12}>
                  <Item
                    sx={{
                      color: "white",
                      height: { xs: "5vh", md: "10vh" },
                      backgroundColor: "#1976d2",
                    }}
                  >
                    <Typography variant="h5" gutterBottom component="div">
                      Projects
                    </Typography>
                  </Item>
                  <Grid item xs={12} sx={{ margin: "10px" }}>
                    <Project />
                  </Grid>
                  <Grid item xs={12} sx={{ margin: "10px" }}>
                    <Project />
                  </Grid>
                  <Grid item xs={12} sx={{ margin: "10px" }}>
                    <Project />
                  </Grid>
                  <Grid item xs={12} sx={{  margin: '10px' }}>
                    
                    <Box
                      sx={{
                        display: addTask ? 'block':'none' ,
                       
                      
                      }}
                  >
                  <Typography variant="h6" gutterBottom component="div">
                      Add Project
                  </Typography>
                  <TextField sx={{ float: 'left', width:'100%',padding:'10px'}} id="outlined-basic" label="Task" variant="outlined" />
                   
                  </Box>

                        {(addTask) &&
                          <Button sx={{color :'white'}} onClick={(e) => {handleAddTask(e)}}>
                            <Fab color="success" variant="extended">
                              Save
                            </Fab>
                          </Button>}
                        {(!addTask) &&
                          <Button sx={{color :'white'}} onClick={(e) => { handleAddTask(e)}}>
                            <Fab color="primary" aria-label="Add">
                              <AddIcon />
                            </Fab>
                          </Button>
                        }
                         
                       
                  
                    </Grid>
                </Grid>
              </Item>
            </Grid>
            <Grid item xs={5}>
              <Item
                sx={{
                  color: "white",
                  height: { xs: "5vh", md: "10vh" },
                  backgroundColor: "#1976d2",
                }}
              >
                <Typography variant="h5" gutterBottom component="div">
                  Team
                </Typography>
              </Item>
              <Grid item xs={12} sx={{ margin: "10px" }}>
                  <Item sx={{ margin: "5px" }}>
                  <Grid item xs={12} sx={{ margin: "10px" }}>
                      <Team email="abrhammuche@gmail.com" />
                  </Grid>
                  <Grid item xs={12} sx={{ margin: "10px" }}>
                      <Team email="abrhammuche@gmail.com" />
                  </Grid>
                  <Grid item xs={12} sx={{ margin: "10px" }}>
                      <Team email="abrhammuche@gmail.com" />
              </Grid>
              </Item>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
