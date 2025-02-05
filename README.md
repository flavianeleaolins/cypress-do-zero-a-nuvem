# Testes Automatizados - Central de Atendimento ao Cliente TAT   

Este projeto contém testes automatizados utilizando o **Cypress** para validar o comportamento da aplicação **Central de Atendimento ao Cliente TAT**.

## 📌 **Descrição**  

Os testes cobrem diversas funcionalidades da aplicação, incluindo:
- Verificação do título da página  
- Preenchimento e envio do formulário  
- Validação de campos obrigatórios  
- Upload de arquivos  
- Interação com checkboxes, radio buttons e selects  
- Testes na página de política de privacidade  

---

## 🚀 **Pré-requisitos**  

Antes de rodar os testes, certifique-se de ter instalado:
- **Node.js**  
- **Cypress**  

Caso o Cypress ainda não esteja instalado, você pode instalá-lo com:  
```sh
npm install cypress --save-dev
```

Para abrir a interface do Cypress e rodar os testes:  
```sh
npx cypress open
```

Para rodar os testes em modo headless (sem abrir o navegador):  
```sh
npx cypress run
```

---

## 📂 **Estrutura do Projeto**  

```
cypress/
│── e2e/
│   ├── CAC-TAT.cy.js  # Arquivo de testes principais
│── fixtures/
│   ├── example.json   # Arquivo de dados para testes
│── support/
│   ├── commands.js    # Comandos customizados
│── cypress.config.js  # Configurações do Cypress
```

---

## 🧪 **Casos de Teste Implementados**  

### ✅ **1. Verificação do Título da Aplicação**
- Confirma se o título da página é **"Central de Atendimento ao Cliente TAT"**.  

### ✅ **2. Preenchimento e Envio do Formulário**
- Preenche os campos obrigatórios e verifica se o envio foi bem-sucedido.  
- Testa envio com texto longo.  

### ✅ **3. Validação de Formulário**
- Exibe mensagem de erro ao enviar com **e-mail inválido**.  
- Garante que o campo **telefone** não aceita caracteres não numéricos.  
- Testa erro ao enviar sem preencher campos obrigatórios.  
- Marca a opção que torna o telefone obrigatório e verifica erro ao não preenchê-lo.  

### ✅ **4. Upload de Arquivos**
- Seleciona um arquivo da pasta `fixtures/`.  
- Simula um **drag and drop** no upload.  
- Usa uma fixture com **alias** para o upload.  

### ✅ **5. Interação com Elementos**
- Seleciona um **produto** via texto, valor e índice.  
- Marca um **radio button**.  
- Marca e desmarca **checkboxes**.  

### ✅ **6. Testes na Página de Política de Privacidade**
- Verifica se a página abre em uma **nova aba** sem a necessidade de um clique.  
- Remove o atributo `target` e acessa a página diretamente.  
- Testa a política de privacidade de forma independente.  

---

## 🔧 **Comando Customizado**
Foi criado um comando customizado chamado **`cy.flavi()`**, utilizado para facilitar a execução de um teste específico.

---

## 📌 **Observações**
- Algumas formas mais **genéricas** de seleção foram evitadas para melhorar a confiabilidade dos testes.  
- Sempre verifique se o Cypress está atualizado (`npm update cypress`).  

---

## 📝 **Contribuição**
Se quiser contribuir com este projeto:
1. Faça um **fork** do repositório.  
2. Crie uma **branch** com a sua funcionalidade (`git checkout -b minha-feature`).  
3. Faça o **commit** das mudanças (`git commit -m 'Adiciona nova funcionalidade'`).  
4. Faça um **push** para a branch (`git push origin minha-feature`).  
5. Abra um **Pull Request**.  .

---

## 📜 **Licença**
Este projeto está sob a licença **MIT**.
