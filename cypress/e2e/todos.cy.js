describe('Pruebas_ToDo', () => {
    beforeEach(() => {
      cy.visit('http://todomvc-app-for-testing.surge.sh/')
    })
  
    it('Añadir tarea', () => {
      cy.get('.new-todo').type ('Tarea 1{enter}') 
  })

  it('Marcar una Tarea', () => {
      cy.get('.new-todo').type ('Tarea 1{enter}') 
      cy.get('.toggle').click()
      cy.get('.destroy')

})

  it('Crear varias Tareas, marcar como completadas y borrarlas', () => {
  cy.get('.new-todo').type ('Tarea 1{enter}')
  cy.get('.new-todo').type ('Tarea 2{enter}')
  cy.get('.new-todo').type ('Tarea 3{enter}')   
  cy.get(':nth-child(1) > .view > .toggle').click()
  cy.get(':nth-child(2) > .view > .toggle').click()
  cy.get(':nth-child(3) > .view > .toggle').click()
  cy.get('.clear-completed').click()

})

})

it('Borrar con X', () => {
cy.get('.new-todo').type ('Tarea 1{enter}')
cy.get('.new-todo').type ('Tarea 2{enter}')
cy.get('.new-todo').type ('Tarea 3{enter}')   
cy.get(':nth-child(1) > .view > .toggle').click()


})
