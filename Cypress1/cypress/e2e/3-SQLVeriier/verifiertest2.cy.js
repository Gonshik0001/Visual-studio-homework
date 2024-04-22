describe('Verifier Page Load Test', () => {
  before(() => {
      // Переход на страницу происходит один раз перед всеми тестами в этом блоке
      cy.visit('https://sqlverifier-live-6e21ca0ed768.herokuapp.com/');
  });

  it('successfully loads Verifier page', () => {
      cy.get('.nav-link.active').should('exist');
  });
})