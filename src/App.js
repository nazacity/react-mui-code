import React from 'react';

// MUI
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './style/theme';

// Layout
import Navbar from './components/layout/Navbar';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <div className="App">
        <h1>test</h1>
      </div>
    </ThemeProvider>
  );
}

export default App;
