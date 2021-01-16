import React from 'react';
import { Button, createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import { StylesProvider, withStyles } from '@material-ui/styles';

const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      contained: {
        borderRadius: '8px',
        boxShadow: 'none',
        backgroundColor: '#039be5',
        color: 'white',
        textTransform: 'none',
        '&:hover': {
          backgroundColor: '#0388ca'
        }
      }
    }
  }
});

const GlobalCSS = withStyles({
  '@global': {
    '.MuiButton-contained': {
      borderRadius: '8px',
      boxShadow: 'none',
      backgroundColor: '#039be5',
      color: 'white',
      textTransform: 'none',
      '&:hover': {
        backgroundColor: '#0388ca'
      }
    }
  }
})(()=>null)
function App() {
  return (

    <StylesProvider>
      <div>
        <GlobalCSS/>
        <Button variant='contained'>Click</Button>
      </div>
    </StylesProvider>

  );
}

export default App;
