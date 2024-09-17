import Keycloak from 'keycloak-js';

// Setup Keycloak instance as needed
// Pass initialization options as required or leave blank to load from 'keycloak.json'
const keycloak = new Keycloak({
    realm: 'LABOURHUB',
    url: 'http://localhost:8080/',
    clientId: 'LHFE',
    
}
);

export default keycloak;