import Keycloak from 'keycloak-js';

const keycloak = new Keycloak({
  url: 'http://localhost:9090',
  realm: 'BlackjackRealm',
  clientId: 'blackjack-frontend',
});

export default keycloak;