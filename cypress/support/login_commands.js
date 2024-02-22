/// <reference types="cypress" />

import 'cypress-wait-until'
import loc from "./locators"

//Validar acesso ao projeto.
Cypress.Commands.add('validaAcessoTelaLogin', () =>
{
    cy.get(loc.tLogin.logotipo)
        .should('be.visible')
        .and('have.attr', 'src', 'img/Login_Bot_graphic.png')
});

//Validar url do projeto.
Cypress.Commands.add('validaUrlTelaLogin', () =>
{
    cy.visit(Cypress.env("baseUrl"))

    cy.get(loc.tLogin.logotipo)
        .should('be.visible')

    cy.url()
        .should('eq', 'https://www.saucedemo.com/v1/')
});

//Validar status com sucesso ao acessar o projeto.
Cypress.Commands.add('validaStatusTelaLogin', () =>
{
    cy.visit(Cypress.env("baseUrl"))

    cy.get(loc.tLogin.logotipo)
        .should('be.visible')

    cy.request(Cypress.env("baseUrl"))
        .its('status')
        .should('eq', 200)
});

//Validar critérios de aceite.
Cypress.Commands.add('validaCriteriosDeAceiteTelaLogin', () =>
{
    cy.visit(Cypress.env("baseUrl"))

    cy.get(loc.tLogin.formLogin)
        .should('be.visible')

    cy.get(loc.tLogin.inpUser)
        .should('be.visible')
        .and('have.attr', 'type', 'text')
        .and('have.attr', 'placeholder', 'Username')
        .and('have.css', 'background-color', 'rgb(255, 255, 255)')
        .and('have.css', 'color', 'rgb(0, 0, 0)')

    cy.get(loc.tLogin.inptPass)
        .should('be.visible')
        .and('have.attr', 'type', 'password')
        .and('have.attr', 'placeholder', 'Password')
        .and('have.css', 'background-color', 'rgb(255, 255, 255)')
        .and('have.css', 'color', 'rgb(0, 0, 0)')

    cy.get(loc.tLogin.btnLogin)
        .should('be.visible')
        .and('have.attr', 'type', 'submit')
        .and('have.attr', 'value', 'LOGIN')
        .and('have.css', 'background-color', 'rgb(226, 35, 26)')
        .and('have.css', 'color', 'rgb(255, 255, 255)')
});

//Validar login inválido - Usuário em branco e Senha em branco
Cypress.Commands.add('loginInvalidoSemUsuarioSemSenha', () =>
{
    cy.get(loc.tLogin.formLogin)
        .should('be.visible')

    cy.get(loc.tLogin.btnLogin)
        .click()

    cy.get(loc.tLogin.divAlertaLogin)
        .should('be.visible')
        .and('have.css', 'color', 'rgb(74, 74, 74)')
        .and('contain.text', 'Epic sadface: ')
        .and('contain.text', 'Username is required')

    cy.get(loc.tLogin.btnAlertLogin)
        .should('be.visible')
        .and('have.attr', 'role', 'img')
        .and('have.css', 'color', 'rgb(255, 0, 0)')
});

//Validar login inválido - Usuário inserido e Senha em branco.
Cypress.Commands.add('loginInvalidoUsuarioSemSenha', () =>
{
    cy.get(loc.tLogin.formLogin)
        .should('be.visible')

    cy.get(loc.tLogin.inpUser)
        .type('Bruno')

    cy.get(loc.tLogin.btnLogin)
        .click()

    cy.get(loc.tLogin.divAlertaLogin)
        .should('be.visible')
        .and('have.css', 'color', 'rgb(74, 74, 74)')
        .and('contain.text', 'Epic sadface: ')
        .and('contain.text', 'Password is required')

    cy.get(loc.tLogin.btnAlertLogin)
        .should('be.visible')
        .and('have.attr', 'role', 'img')
        .and('have.css', 'color', 'rgb(255, 0, 0)')
});

//Validar login inválido - Usuário inserido e Senha inserida.
Cypress.Commands.add('loginInvalidoUsuarioSenha', () =>
{
    cy.get(loc.tLogin.formLogin)
        .should('be.visible')

    cy.get(loc.tLogin.inpUser)
        .type('Bruno')

    cy.get(loc.tLogin.inptPass)
        .type('B12345!')

    cy.get(loc.tLogin.btnLogin)
        .click()

    cy.get(loc.tLogin.divAlertaLogin)
        .should('be.visible')
        .and('have.css', 'color', 'rgb(74, 74, 74)')
        .and('contain.text', 'Username and password do not match any user in this service')

    cy.get(loc.tLogin.btnAlertLogin)
        .should('be.visible')
        .and('have.attr', 'role', 'img')
        .and('have.css', 'color', 'rgb(255, 0, 0)')
});

//Validar login inválido - Usuário em branco e Senha inserida.
Cypress.Commands.add('loginInvalidoSemUsuarioSenha', () =>
{
    cy.get(loc.tLogin.formLogin)
        .should('be.visible')

    cy.get(loc.tLogin.inptPass)
        .type('B12345!')

    cy.get(loc.tLogin.btnLogin)
        .click()

    cy.get(loc.tLogin.divAlertaLogin)
        .should('be.visible')
        .and('have.css', 'color', 'rgb(74, 74, 74)')
        .and('contain.text', 'Username is required')

    cy.get(loc.tLogin.btnAlertLogin)
        .should('be.visible')
        .and('have.attr', 'role', 'img')
        .and('have.css', 'color', 'rgb(255, 0, 0)')
});

//Validar login válido.
Cypress.Commands.add('loginValido', () =>
{
    cy.get(loc.tLogin.formLogin)
        .should('be.visible')

    cy.get(loc.tLogin.inpUser)
        .type('standard_user')

    cy.get(loc.tLogin.inptPass)
        .type('secret_sauce')

    cy.get(loc.tLogin.btnLogin)
        .click()

    cy.get(loc.tProducts.divTitleProd)
        .should('be.visible')
        .and('contain.text', 'Products')
});

/*
cy.session(name, () => {
  cy.visit('/login')
  cy.get('[data-test=name]').type(name)
  cy.get('[data-test=password]').type('s3cr3t')
  cy.get('form').contains('Log In').click()
  cy.url().should('contain', '/login-successful')
})
*/

///Validar login válido - Sesion.
Cypress.Commands.add('loginValidoSesion',
({
    user = Cypress.env('user_name'),
    password = Cypress.env('user_password'),
    cacheSession = true
}) =>
{
    const loginValidoSesion = () =>
    {
        cy.visit(Cypress.env("baseUrl"))

        cy.get(loc.tLogin.formLogin)
            .should('be.visible')

        cy.get(loc.tLogin.inpUser)
            .type(user)

        cy.get(loc.tLogin.inptPass)
            .type(password, { log: false })

        cy.get(loc.tLogin.btnLogin)
            .click()
    }
    const options =
    {
        cacheAcrossSpecs: true,
    }
    if (cacheSession)
    {
        cy.session(user, loginValidoSesion, options)
    }
    else
    {
        loginValidoSesion()
    }
})