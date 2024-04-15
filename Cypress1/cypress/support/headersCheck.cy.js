describe('User Menu Links Test', () => {
  beforeEach(() => {
    // Логин пользователя
    cy.login('student', '123456!');
  });

  it('Check "Home" link', () => {
    cy.get('.navbar-nav').contains('Home').click();
    cy.url().should('include', '/home');
    cy.get('h1').should('contain', 'Home'); // Проверка правописания названия страницы
  });

  it('Check "Courses" link', () => {
    cy.get('.navbar-nav').contains('Courses').click();
    cy.url().should('include', '/courses');
    cy.get('h1').should('contain', 'Courses'); // Проверка правописания названия страницы
  });

  it('Check "Profile" link', () => {
    cy.get('.navbar-nav').contains('Profile').click();
    cy.url().should('include', '/profile');
    cy.get('h1').should('contain', 'Profile'); // Проверка правописания названия страницы
  });

  it('Check "Grades" link', () => {
    cy.get('.navbar-nav').contains('Grades').click();
    cy.url().should('include', '/grades');
    cy.get('h1').should('contain', 'Grades'); // Проверка правописания названия страницы
  });

  it('Check "Messages" link', () => {
    cy.get('.navbar-nav').contains('Messages').click();
    cy.url().should('include', '/messages');
    cy.get('h1').should('contain', 'Messages'); // Проверка правописания названия страницы
  });

  it('Check "Settings" link', () => {
    cy.get('.navbar-nav').contains('Settings').click();
    cy.url().should('include', '/settings');
    cy.get('h1').should('contain', 'Settings'); // Проверка правописания названия страницы
  });

  it('Check "Help" link', () => {
    cy.get('.navbar-nav').contains('Help').click();
    cy.url().should('include', '/help');
    cy.get('h1').should('contain', 'Help'); // Проверка правописания названия страницы
  });

  it('Check "About" link', () => {
    cy.get('.navbar-nav').contains('About').click();
    cy.url().should('include', '/about');
    cy.get('h1').should('contain', 'About'); // Проверка правописания названия страницы
  });

  it('Check "Contact" link', () => {
    cy.get('.navbar-nav').contains('Contact').click();
    cy.url().should('include', '/contact');
    cy.g
