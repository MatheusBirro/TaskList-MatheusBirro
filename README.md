# TaskList Front-End.

## Inicialização do projeto.

- **Node Version**: v20.9.0^
- **Npm Version**: v10.1.0^
- **Instalação de dependências**: `npm i`| `npm install`
- **Rodar a aplicação**: Comando para iniciar a aplicação: `npm run dev`.

## Introdução

O TaskList é um projeto Front-End em react Type-script baseado na API que eu desenvolvi durante as aulas e adaptei alguns end-points para que o projeto fizesse sentido.

O projeto consiste em um site para organização de tarefas dividindo elas em categorias

## TaskList API

- **Documentação**: <https://github.com/Kenzie-Academy-Brasil-Developers/Kenzie-Academy-Brasil-Developers-m5-template-entrega1-matheusbirro>
- **URL Base**: <https://kenzie-academy-brasil-developers-m5-5gcq.onrender.com>

> [!WARNING]
> Como a API está rodando em um servidor grátis pode ser que ela demore um pouco para iniciar.

## Vercel

- **Link**: <https://task-list-jade.vercel.app/>

## Estilização

Toda a parte de CSS foi feita através da biblioteca do SCSS.

## Bibliotecas Usadas

- **React**: <https://react.dev/>
- **ZOD Documentação**: <https://zod.dev/>
- **React-Toastify Documentação**: <https://fkhadra.github.io/react-toastify/introduction/>
- **React-axios Documentação**: <https://www.npmjs.com/package/react-axios>
- **React DOM Documentação**: <https://legacy.reactjs.org/docs/react-dom.html>
- **React Router DOM Documentação**: <https://reactrouter.com/en/main>
- **React Hook Form Documentação**: <https://react-hook-form.com/docs>
- **SCSS Documentação**: <https://sass-lang.com/documentation/>

## Páginas

### Tela de Cadastro

1. **Cadastro**: Todos os requisitos do cadastro são feitos através da biblioteca do ZOD no arquivo `RegisterFormSchema.ts` pela constante `formRegisterSchema`.

2. **Sucesso**: Em caso de sucesso no cadastro o usuário será redirecionado para a página de login automaticamente.

3. **Erro**: Em caso de erro será gerado um toast ou indicará o erro de cadastro abaixo do campo de input.

### Tela de Login

1. **Login**: Todos os requisitos do login são feitos através da biblioteca do ZOD no arquivo `LoginFormSchema.ts` pela constante `formLoginSchema`.

2. **Sucesso**: Em caso de sucesso no login o usuário será redirecionado para a rota (/task) automaticamente.

3. **Erro**: Em caso de erro será gerado um toast indicando o erro.

### Tela de Tarefas

1. **Problemas no desenvolvimento**: Enquanto estava desenvolvendo essa página tive dificuldade de renderizar as task, pois existe uma rota na API que retorna apenas as tasks de uma categoria específica passando o nome dessa categoria, pensei em algumas maneiras de usa-la para essa renderização porém nao consegui executa-la, dessa forma fiz um filtro no momento em que é chamado o card das tasks.
