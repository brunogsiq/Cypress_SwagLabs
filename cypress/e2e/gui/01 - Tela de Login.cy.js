/// <reference types="cypress" /> 

var Context = 0
var Describe = 0
var Teste = 0
var Complemento = 0

context(`${++Context} - Tela de Login.`, () =>
{
	describe(`Cenário ${++Describe} - Validação de rotas e critérios de aceite.`, () =>
	{
		it(`Teste ${++Teste}.${++Complemento} - Validar acesso ao projeto.`, () =>
		{
			cy.visit(Cypress.env("baseUrl"))
			cy.validaAcessoTelaLogin()
		})

		it(`Teste ${Teste}.${++Complemento} - Validar url do projeto.`, () =>
		{
			cy.validaUrlTelaLogin()
		})

		it(`Teste ${Teste}.${++Complemento} - Validar status com sucesso ao acessar o projeto.`, () =>
		{
			cy.validaStatusTelaLogin()
		})

		it(`Teste ${Teste}.${++Complemento} - Validar critérios de aceite.`, () =>
		{
			cy.validaCriteriosDeAceiteTelaLogin()
		})
	})
})