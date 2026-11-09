# Playwright E2E

## GitHub Actions + SonarCloud

[![Build and Tests](https://github.com/GiaNinWorld/playwright-e2e/actions/workflows/node.js.yml/badge.svg?branch=master)](https://github.com/GiaNinWorld/playwright-e2e/actions/workflows/node.js.yml)

</br>

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=GiaNinWorld_playwright-e2e&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=GiaNinWorld_playwright-e2e)

## Getting Started

### Configurar o SonarQube Cloud no fork

O projeto [GiaNinWorld_playwright-e2e](https://sonarcloud.io/summary/new_code?id=GiaNinWorld_playwright-e2e)
já está configurado em `sonar-project.properties`, na organização `gianinworld`.
Não é necessário cadastrar variáveis para as chaves do projeto e da organização.

Na [configuração de análise do Sonar](https://sonarcloud.io/project/analysis_method?id=GiaNinWorld_playwright-e2e),
selecione a análise via GitHub Actions. Se a análise automática estiver habilitada,
desative-a antes de usar a análise via CI.

No [GitHub do fork](https://github.com/GiaNinWorld/playwright-e2e/settings/secrets/actions),
abra **Settings > Secrets and variables > Actions > New repository secret** e cadastre
`SONAR_TOKEN` com um token do SonarQube Cloud que tenha permissão para analisar esse projeto.
Não coloque o token em arquivos do projeto.

O workflow verifica se o secret foi cadastrado antes de executar o scanner.
Depois de salvar o secret e enviar as alterações do workflow, execute novamente o GitHub Actions.

Documentação: [SonarQube Cloud com GitHub Actions](https://docs.sonarsource.com/sonarqube-cloud/analyzing-source-code/ci-based-analysis/github-actions-for-sonarcloud).

### Executar os testes

In order to execute this project you must follow the steps below:

1. Install [Node JS](https://nodejs.org/) (version >= 22.x)
1. Run `npm i --save-dev` to install all the project dependencies
1. Run `npx playwright install` to install the browsers used by Playwright
1. Run `npm run ci` to execute the entire test suite
1. Run `npm run show-report` to visualize the reports

All execution artifacts can be found in `./artifacts`, if you want to remove these files run `npm run clean`.

## Using ZeroStep AI
</br>

To use the AI ​​feature with ZeroStep, you must create the `zerostep.config.json` file in the root of the project and add your ZeroStep token.

## Project Structure
</br>
<ul>
    <li>Scenarios: Test scenario mapping</li>
    <li>Support: Project structure files
        <ul>
            <li>Elements: Mapping the elements of each screen</li>
            <li>Fixtures: Data configuration files</li>
            <li>Pages: Logic used to perform actions in tests</li>
        </ul>
    </li>
</ul>
