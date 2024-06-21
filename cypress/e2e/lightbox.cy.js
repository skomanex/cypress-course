/// <reference types="cypress" />
context('Lightbox testing', () => {
    beforeEach(() => {
        cy.visit('../../app/lightbox.html');
    });
    it('opens the lightbox when image is clicked', () => {
        // Select the image and click on it
        cy.get('[data-cy=image]').click();

        // Assert that the lightbox is visible
        cy.get('[data-cy=lightbox]').should('be.visible');
    });
    it('closes the lightbox when clicking away from it', () => {
        // Select the image and click on it
        cy.get('[data-cy=image]').click();

        // Click away from the center
        cy.get('[data-cy=body]').click({position:'topLeft'});
        
        // Assert that the lightbox isn't opened anymore
        cy.get('[data-cy=lightbox]').should('not.be.visible');
    })
    it('clicks the like button after opening the lightbox', () => {
        // Select the image and click on it
        cy.get('[data-cy=image]').click();

        // Select the like and click on it
        cy.get('[data-cy=like-button]')
    })
})