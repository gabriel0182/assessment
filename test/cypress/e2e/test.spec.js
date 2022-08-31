
import firstTest from '../support/pageObject/firstTest'

before(() => {
  cy.visit('https://google.com')
  });

describe("go to google", () => {
  
  it("search something", () => {
    firstTest.search()
  });

});