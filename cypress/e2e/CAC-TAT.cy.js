//variaveis globais
const longText = Cypress._.repeat('preciso testar o com um texto mais longo.', 10)

describe('Central de Atendimento ao Cliente TAT', () => {
  beforeEach(() =>{
    cy.visit('./src/index.html')
  })
  it('verifica o título da aplicação', () => {
    cy.title().should('be.equal','Central de Atendimento ao Cliente TAT')
  })
  it('preenche os campos obrigatórios e envia o formulário', ()=>{
    cy.get('#firstName').type('Maria')
    cy.get('#lastName').type('Leao')
    cy.get('#email').type('leao@email.com')
    cy.get('#open-text-area').type(longText,{daley:0})
    //cy.get('.button[type="submit"]').click()
    cy.contains('button', 'Enviar').click()
    cy.get('.success').should('be.visible')

  })
  it('Exibe mensagem de erro ao submeter o formulario com um emailcom formatação invalida', () =>{
    cy.get('#email').type('email-invalido')
    //cy.get('.button[type="submit"]').click()
    cy.contains('button', 'Enviar').click()
    cy.get('.error').should('be.visible')
    

  })
  it('Validação de um valor não numerico, o valor continuará vazio', () =>{
     cy.get('#phone').type('abc!@#')
     cy.get('#phone').should('have.value','')
  })
  it(' mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário',()=>{
    
    cy.get('#firstName').type('Maria')
    cy.get('#lastName').type('Leao')
    cy.get('#email').type('leao@email.com')
    cy.get('#open-text-area').type(longText,{daley:0})
    //cy.get('#phone-checkbox').click()
    cy.get('#phone-checkbox').check()
    //cy.get('.button[type="submit"]').click()
    cy.contains('button', 'Enviar').click()
    cy.get('.error').should('be.visible')
    
  })
  it('preenche e limpa os campos nome, sobrenome, email e telefone', () => {
    cy.get('#firstName').type('Maria')
    cy.get('#lastName').type('Leao').should('have.value', 'Leao')
    cy.get('#lastName').clear().should('have.value', '')
    cy.get('#lastName').type('Leao').should('have.value', 'Leao')
    cy.get('#email').type('leao@email.com')
    cy.get('#open-text-area').type(longText,{daley:0})
    //cy.get('.button[type="submit"]').click()
    cy.contains('button', 'Enviar').click()
    cy.get('.success').should('be.visible')
  })

  it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', () => {
    //cy.get('.button[type="submit"]').click()
    cy.contains('button', 'Enviar').click()
    cy.get('.error').should('be.visible')
  })

  it('envia o formuário com sucesso usando um comando customizado', () => {
    //cy.get('.button[type="submit"]').click()
    cy.contains('button', 'Enviar').click()
    cy.get('.error').should('be.visible')
  })

  it('envia o formuário com sucesso usando um comando customizado', () => {
    cy.flavi();
  })
  it('seleciona um produto (YouTube) por seu texto', ()=>{
    cy.get('#product').select('YouTube');
    cy.get('#product').should('have.value', 'youtube');

  })
  it('seleciona um produto (Mentoria) por seu valor (value)', ()=>{
    cy.get('#product').select('mentoria');
    cy.get('#product').should('have.value', 'mentoria');

  })
  it('seleciona um produto (Blog) por seu índice', ()=>{
    cy.get('#product').select(1);
    cy.get('#product').should('have.value', 'blog');

  })
  it('marca o tipo de atendimento "Feedback"', ()=>{
    cy.get('input[type="radio"][value="feedback"]').check();
    cy.get('input[type="radio"][value="feedback"]').should('be.checked');

  })
  it('marca cada tipo de atendimento', ()=>{
    cy.get('input[type="radio"]').each(typeofService => {
      cy.wrap(typeofService).check().should('be.checked')
  })
    
  })
  it('marca ambos checkboxes, depois desmarca o último',()=>{
    cy.get('input[type="checkbox"]').check().should('be.checked')
    .uncheck(['phone']).should('not.be.checked')
  })
  it('seleciona um arquivo da pasta fixtures',()=>{
    cy.get('#file-upload').selectFile('cypress/fixtures/example.json')
    .should(input=>{
      console.log(input =>{
        esxpect(input[0].files[0].name).to.equal('example.json')
      })

    })
  })
  it('seleciona um arquivo simulando um drag-and-drop',()=>{
    cy.get('#file-upload').selectFile('cypress/fixtures/example.json',{action: 'drag-drop'})
    .should(input=>{
      console.log(input =>{
        esxpect(input[0].files[0].name)
      })

    })
  })
  it('seleciona um arquivo utilizando uma fixture para a qual foi dada um alias',()=>{
    cy.fixture('example.json').as('meuarquivo',)
    cy.get('#file-upload').selectFile('@meuarquivo').should(input=>{
      console.log(input =>{
        esxpect(input[0].files[0].name).to.equal('example.json')
      })

    })
  })
  it('verifica que a política de privacidade abre em outra aba sem a necessidade de um clique',()=>{
   // cy.get('a').should('have.attr','target','_blank') funciona mas é uma forma muito generica
      cy.contains('a','Política de Privacidade').should('have.attr', 'href', 'privacy.html').and('have.attr', 'target', '_blank')
  })
  it('acessa a página da política de privacidade removendo o target e então clicando no link',()=>{
    //cy.get('a').invoke('removeAttr','target') forma generica, mas funciona
      cy.contains('a','Política de Privacidade').invoke('removeAttr','target')
      .click()
      
      cy.contains('h1','CAC TAT - Política de Privacidade').should('be.visible')
  })
  // esse codigo foi testado de forma independente em outro arquivo cy.js
  it('testa a página da política de privacidade de forma independentea',()=>{
   // cy.get('a').click().should('be.visible') forma muito generica apesar de funcionar. 
      
  })
  
  
  
  



})
