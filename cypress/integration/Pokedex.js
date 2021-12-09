/* eslint-disable no-undef */

describe('Pokedex', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5000/')
  })

  it('front page can be opened', () => {
    cy.get('#app').should('be.visible')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })

  it('pokemon page can be navigated to', () => {
    cy.contains('charmander').click()
    cy.get('.pokemon-page').should('contain', 'charmander')
  })

})
