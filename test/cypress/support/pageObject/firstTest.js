class firstTest {

static search(){
    cy.get('input').first().should('be.visible')
    .clear().type('something{enter}')
}

}

export default firstTest