describe('Verifier Page Load Test', () => {
it('successfully loads Verifier page', () => {
cy.visit('https://sqlverifier-live-6e21ca0ed768.herokuapp.com/'),
cy.get('d-flex align-items-center nav-link active
 ').should('exist');
});
})