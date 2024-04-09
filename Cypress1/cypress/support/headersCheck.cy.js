describe('Проверка ссылок в header меню для зарегистрированного пользователя (студента)', () => {
    beforeEach(() => {
      cy.visit('https://sqlverifier-live-6e21ca0ed768.herokuapp.com/login');
      cy.get('input[name="username"]').type('student');
      cy.get('input[name="password"]').type('123456!', { log: false });
      cy.contains('Sign In').click();
      cy.wait(1000); // Добавим задержку для обработки входа
    });
  
    it('Ссылка "Home" работает', () => {
      cy.contains('Home').click();
      cy.url().should('include', '/home');
    });
  
    it('Ссылка "Profile" работает', () => {
      cy.contains('Profile').click();
      cy.url().should('include', '/profile');
    });
  
    it('Ссылка "Browse Exercises" работает', () => {
      cy.contains('Browse Exercises').click();
      cy.url().should('include', '/exercises');
    });
  
    it('Ссылка "My Exercises" работает', () => {
      cy.contains('My Exercises').click();
      cy.url().should('include', '/myexercises');
    });
  
    it('Ссылка "My Results" работает', () => {
      cy.contains('My Results').click();
      cy.url().should('include', '/myresults');
    });
  
    it('Ссылка "Leaderboard" работает', () => {
      cy.contains('Leaderboard').click();
      cy.url().should('include', '/leaderboard');
    });
  
    it('Ссылка "Challenges" работает', () => {
      cy.contains('Challenges').click();
      cy.url().should('include', '/challenges');
    });
  
    it('Ссылка "Messages" работает', () => {
      cy.contains('Messages').click();
      cy.url().should('include', '/messages');
    });
  
    it('Ссылка "Settings" работает', () => {
      cy.contains('Settings').click();
      cy.url().should('include', '/settings');
    });
  
    it('Ссылка "Sign Out" работает', () => {
      cy.contains('Sign Out').click();
      cy.url().should('include', '/login');
    });
  
    it('Ссылка "Help" работает', () => {
      cy.contains('Help').click();
      cy.url().should('include', '/help');
    });
  });