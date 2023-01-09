/*
 *   Copyright (c) 2023 
 *   All rights reserved.
 */
import './__init__/App.css';
import AppRouteSwitcher from './__init__/AppRouteSwitcher';
import AppHeader from './__init__/AppHeader';

function App() {
  return (
    <div className="App">
      < AppHeader />
      < AppRouteSwitcher />
    </div >

  );
}

export default App;
