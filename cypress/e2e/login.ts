import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('I open the login page', () => {
  cy.visit('/login');
});

When('I enter valid credentials', () => {
  cy.get('input[id=username]').type('user');
  cy.get('input[id=password]').type('password');
  cy.get('button[type=submit]').click();
});

Then('I should see the dashboard', () => {
  cy.url().should('include', '/dashboard');
  cy.contains('Welcome to the dashboard!');
});
