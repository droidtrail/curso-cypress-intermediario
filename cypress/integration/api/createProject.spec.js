///<reference types="Cypress"/>

const faker = require('faker')

describe('Create Project', () => {
    it('successfully', () => {
        const project = {
            name: `project-${faker.random.uuid()}`,
            description: faker.random.words(5)
        }
        cy.api_createProject(project).then(response =>{
            expect(response.status)
        })
    });
});