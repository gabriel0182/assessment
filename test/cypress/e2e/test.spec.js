import firstTest from '../support/pageObject/firstTest'

before(() => {
  cy.visit('https://google.com')
})

describe('go to google', () => {
  it('search something by testlio', () => {
    firstTest.search('testlio')
  })

  it('I select and Print the 3rd results Login', () => {
    firstTest.selectResultLogin()
  })

  it('I select and Print the 3rd results Become a Tester', () => {
    firstTest.selectResultBecome()
  })
})
