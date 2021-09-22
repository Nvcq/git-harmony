// nico.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

describe('Test de Nico', () => {
    it('should visit a site', () => {
        cy.visit('http://harmony.barbec.tk/')
    })

    it('Change image', () => {
        cy.get('#picture').click()
        cy.get('#picture').should('have.attr', 'src', 'img/pic2.jpg')
    })

})