describe('Test de Hugo', () => {
    it('Vérifier le changement de couleur du header', () => {
        cy.visit('http://harmony.barbec.tk/')
    })

    it('Homepage ?', () => {
        cy.get('h1').should('have.text', "T'as reconnu l'équipe :")
    })

    it('Test changeHeaderColor', () => {
        cy.get('#header').click()
        cy.get('#header').last().should('have.css', "background-color", "rgb(0, 128, 0)")
    })
})