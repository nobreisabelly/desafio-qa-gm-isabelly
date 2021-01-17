describe('Tests for press gesture event', () => {
    it('Should open a page a page and assert its title', () => {
        cy.visit('./src/index.html')
        cy.title().should('be.equal', 'press gesture feature')
    });

    it('Should verify square initial size of 90 x 90', () => {
        cy.get('.square').should('have.css', 'height', '90px')
        cy.get('.square').should('have.css', 'width', '90px')
    });

    it('Should simulate the long press with left button on square and verify if size has changed to 225 x 225', () => {
        cy.get('.square').trigger('mousedown', { button: 0 })
        cy.wait(500)
        cy.get('.square').should('have.css', 'height', '225px')
        cy.get('.square').should('have.css', 'width', '225px')
    });

    it('Should simulate the long press with left button on square and verify if size returned to 90 x 90', () => {
        cy.get('.square').trigger('mousedown', { button: 0 })
        cy.wait(500)
        cy.get('.square').should('have.css', 'height', '90px')
        cy.get('.square').should('have.css', 'width', '90px')
    });

    it('Should simulate the long press with right button on square and and verify if size does not change', () => {
        cy.get('.square').trigger('mousedown', { button: 1 })
        cy.wait(500)
        cy.get('.square').should('have.css', 'height', '90px')
        cy.get('.square').should('have.css', 'width', '90px')
    });

    it('Should simulate the long press with middle button on square and verify if size does not change', () => {
        cy.get('.square').trigger('mousedown', { button: 2 })
        cy.wait(500)
        cy.get('.square').should('have.css', 'height', '90px')
        cy.get('.square').should('have.css', 'width', '90px')
    });

    it('Should simulate the click event on square and verify if size does not change', () => {
        cy.get('.square').click()
        cy.wait(500)
        cy.get('.square').should('have.css', 'height', '90px')
        cy.get('.square').should('have.css', 'width', '90px')
    });

    it('Should simulate the double click event on square and verify if size does not change', () => {
        cy.get('.square').dblclick()
        cy.wait(500)
        cy.get('.square').should('have.css', 'height', '90px')
        cy.get('.square').should('have.css', 'width', '90px')
    });
})
