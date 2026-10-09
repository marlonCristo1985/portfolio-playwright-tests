# Testes automatizados do meu portfólio com Playwright

[![Playwright Tests](https://github.com/marlonCristo1985/portfolio-playwright-tests/actions/workflows/playwright.yml/badge.svg)](https://github.com/marlonCristo1985/portfolio-playwright-tests/actions/workflows/playwright.yml)

Projeto de automação de testes E2E e de API com **Playwright + TypeScript**, usando como sistema sob teste o meu portfólio profissional: [marloncristo1985.github.io](https://marloncristo1985.github.io).

O objetivo é aplicar na prática o que estudo na pós-graduação em Automação de Testes, com os padrões usados em projetos reais: Page Object, integração contínua, relatório de execução e fluxo de trabalho com branch, Pull Request e merge.

## O que é testado

| Funcionalidade | Cenários | Status |
|---|---|---|
| Troca de idioma PT/EN | Abre em português por padrão; troca para inglês e volta para português | ✅ |
| Navegação pelo menu | — | 🔜 |
| Carrossel de projetos | — | 🔜 |
| Links de contato | — | 🔜 |
| Layout em celular | — | 🔜 |
| API (pgats-02-api-revisao) | — | 🔜 |

## Por onde comecei

Escolhi a **troca de idioma** como primeiro teste porque ela afeta a página inteira: todo texto do site existe em duas versões, e uma falha ali prejudica qualquer visitante estrangeiro. Cada teste confere duas camadas ao mesmo tempo:

- **Estado do botão:** o atributo `aria-pressed` indica qual idioma está ativo.
- **Conteúdo na tela:** o texto do idioma escolhido aparece e o do outro idioma fica escondido.

Assim, o teste pega tanto um botão que muda de cor sem trocar o texto quanto um texto que muda sem o botão acompanhar.

## Tecnologias

- [Playwright](https://playwright.dev) com TypeScript
- Node.js 20 ou superior
- GitHub Actions (integração contínua)

## Estrutura do projeto

```
portfolio-playwright-tests
├── .github/workflows/playwright.yml   # pipeline do GitHub Actions
├── pages/
│   └── HomePage.ts                    # Page Object da página inicial
├── tests/
│   └── idioma.spec.ts                 # testes de troca de idioma
└── playwright.config.ts               # configuração do Playwright
```

## Padrões adotados

- **Page Object:** os seletores e as ações de cada página ficam em `pages/`. Os testes só descrevem o comportamento esperado. Se o site mudar, a correção é feita em um lugar só.
- **Seletores por papel e nome acessível** (`getByRole`), seguindo a recomendação do Playwright. São os mesmos nomes que um leitor de tela usa, o que deixa os testes mais estáveis.
- **Navegador em português do Brasil** (`locale: 'pt-BR'`), para simular o visitante principal do portfólio.
- **Branches com prefixo** (`feature/`, `fix/`, `docs/`) e **commits no padrão Conventional Commits** (`feat:`, `fix:`, `docs:`).
- **Nada vai direto para a main:** todo trabalho passa por Pull Request, e o merge só acontece com os testes passando no GitHub Actions.

## Como rodar

```bash
# 1. Clonar o repositório
git clone https://github.com/marlonCristo1985/portfolio-playwright-tests.git
cd portfolio-playwright-tests

# 2. Instalar as dependências e os navegadores
npm ci
npx playwright install

# 3. Rodar os testes
npx playwright test

# 4. Abrir o relatório HTML
npx playwright show-report
```

## Integração contínua

A cada Pull Request para a `main`, o GitHub Actions instala o projeto, roda todos os testes e guarda o relatório HTML como artefato da execução (aba **Actions** → execução → **Artifacts** → `playwright-report`).

Em caso de falha, o relatório traz a foto da tela e o trace, uma gravação passo a passo do teste, para investigar a causa.

## Próximos passos

- [ ] Chegar a 10–15 testes web
- [ ] Testes de API com `request` do Playwright, usando a [pgats-02-api-revisao](https://github.com/marlonCristo1985/pgats-02-api-revisao)
- [ ] README de estratégia de testes completo

## Autor

**Marlon de Cristo Paula**, Analista de Testes · QA Engineer · Test Lead
[LinkedIn](https://www.linkedin.com/in/marlon-de-cristo-paula-b1299144) · [Portfólio](https://marloncristo1985.github.io) · [GitHub](https://github.com/marlonCristo1985)