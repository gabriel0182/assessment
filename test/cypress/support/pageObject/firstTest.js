class firstTest {
  static search(val) {
    cy.intercept('POST', 'https://play.google.com/log?**').as('search')
    cy.get('input').first().should('be.visible').clear().type(`${val}{enter}`)
    cy.wait('@search')
  }

  static selectResultLogin() {
    cy.get('#search').within(() => {
      cy.get('tbody')
        .children('tr')
        .children('td:nth-child(1)')
        .find('a')
        .first()
        .then(($a) => {
          const login = $a.text()
          cy.log(login)
        })
    })
  }

  static selectResultBecome() {
    cy.get('#search').within(() => {
      cy.get('tbody')
        .children('tr')
        .children('td:nth-child(1)')
        .find('a')
        .eq(1)
        .then(($a) => {
          const login = $a.text()
          cy.log(login)
        })
    })
  }
}

export default firstTest
