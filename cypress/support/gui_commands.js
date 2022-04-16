///<reference types="Cypress"/>

Cypress.Commands.add('login', () => {
    cy.visit('users/sign_in')
    cy.get('[data-qa-selector="login_field"]').type(Cypress.env('user_name'))
    cy.get('[data-qa-selector="password_field"]').type(Cypress.env('user_password'))
    cy.get('[data-qa-selector="sign_in_button"]').click()

})

Cypress.Commands.add('logout', () => {
    cy.get('.qa-user-avatar').click()
    cy.contains('Sign out').click()
})

Cypress.Commands.add('gui_createProject', project => {
    cy.visit('projects/new')
    cy.get('#project_name').type(project.name)
    cy.get('#project_description').type(project.description)
    cy.get('#project_initialize_with_readme').check()
    cy.contains('Create project').click()
})

Cypress.Commands.add('gui_createIssue', issue => {
    cy.visit(`${Cypress.env('user_name')}/${issue.project.name}/issues/new`)
    cy.get('.qa-issuable-form-title').type(issue.title)
    cy.get('.qa-issuable-form-description').type(issue.description)
    cy.contains('Submit issue').click()
    cy.contains(issue.title)
})

Cypress.Commands.add('gui_createLabel', label => {
    cy.visit(`${Cypress.env('user_name')}/${issue.project.name}/-/labels/new`)
    cy.get('.qa-label-title').type(label.name)
    cy.get('.qa-label-description').type(label.description)
    cy.get('.qa-label-create-button').click()
    cy.contains('Submit issue').click()
    cy.contains(label.description)
})

Cypress.Commands.add('gui_setLabelOnIssue', label => {
    cy.get('.qa-edit-link-labels').click()
    cy.contains(label.name).click()
    cy.get('body').click()
})

Cypress.Commands.add('gui_setMilestoneOnIssue', milestone => {
    cy.get('.block.milestone .edit-link').click()
    cy.contains(milestone.title).click()
  })
  


