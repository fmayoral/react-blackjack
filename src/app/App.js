import React from 'react';
import { useKeycloak } from '@react-keycloak/web';

import GameBoard from '../components/board/GameBoard';
import './App.css';

function App() {
  const { keycloak, initialized } = useKeycloak();

  if (!initialized) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {keycloak.authenticated ? (
        <div>
          <p>Welcome, {keycloak.tokenParsed.preferred_username}!</p>
          <GameBoard />
        </div>
      ) : (
        <div>
          <p>You need to log in to access the game.</p>
        </div>
      )}
    </div>
  );
}

export default App;
