# NetflixClone [![Netlify Status](https://api.netlify.com/api/v1/badges/3508310c-ad12-46d9-8b6a-04a41815ebb6/deploy-status)](https://app.netlify.com/sites/rainbow-chaja-a419e9/deploys)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Passo a Passo para Gerar um Token de Acesso no TMDB

### 1. Crie uma Conta no TMDB

- Acesse [The Movie Database](https://www.themoviedb.org).
- Clique em "Sign Up" para criar uma nova conta.
- Preencha os dados necessários e confirme seu e-mail.

### 2. Obtenha sua Chave de API

- Após fazer login, vá para a seção de configurações da sua conta.
- Clique em "API" no menu.
- Solicite uma chave de API preenchendo o formulário com as informações solicitadas.

### 3. Gere um Token de Solicitação

- Use a chave de API para fazer uma solicitação para gerar um token de solicitação. Execute a seguinte chamada de API:

### 4. adicione o Token no arquivo de environment.ts

- Adicione o token gerado no arquivo `environment.ts`

`TMDB_API_KEY: 'SUA_CHAVE_DE_API_AQUI'`