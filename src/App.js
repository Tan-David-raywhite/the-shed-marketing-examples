import React from 'react'

import {
  Fab,
  Link,
  Tooltip,
} from '@mui/material/';

import Header from './components/header'

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />

      {/* FAB LINK TO RAYWHITE.COM */}
      <Link href="https://raywhite.com">
        <Tooltip placement='left' arrow followCursor title="Go to raywhite.com">
          <Fab color="primary" sx={{
            margin: 0,
            top: 'auto',
            right: 50,
            bottom: 50,
            left: 'auto',
            position: 'fixed',
            color: '#595959',
          }}>
            <img alt="home icon" height={'35%'} src='https://rw-media.s3.amazonaws.com/raywhitecom/wp-content/uploads/2021/12/06113552/ICONS_01Grey-21.png' />
          </Fab>
        </Tooltip>
      </Link>
      {/* FAB LINK TO RAYWHITE.COM end */}
    </div>
  );
}

export default App;
