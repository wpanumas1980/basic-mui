import { createMuiTheme, CssBaseline, makeStyles, ThemeProvider } from '@material-ui/core';
import React from 'react';
import Header from '../components/Header';
import SideMenu from '../components/SideMenu';
import Employees from '../pages/Employees/Employees';




const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#3f51b5',
      light: '#3c44b126'
    },
    secondary: {
      main: '#f50057',
      light: '#f84526'
    },
    background: {
      default: '#f4f4fd'
    }
  },
  overrides:{
    MuiAppBar:{
      root:{
        transform:'translateZ(0)'
      }
    }
  },
  props:{
    MuiIconButton:{
      disableRipple:'true'
    }
  }
  // shape:{
  //   borderRadius:'12px'
  // }
})

const useStyles = makeStyles({
  appMain: {
    paddingLeft: '320px',
    width: '100%'
  }
})

function App() {
  const classes = useStyles()
  return (
    <ThemeProvider theme={theme}>
      <SideMenu />
      <div className={classes.appMain}>
        <Header />
        <Employees/>
      </div>
      <CssBaseline />
    </ThemeProvider >
  );
}

export default App;
