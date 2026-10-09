import { type Page, type Locator } from '@playwright/test';

export class HomePage {
  readonly page: Page;

  // Botões de idioma (ficam no grupo "Idioma / Language")
  readonly botaoPT: Locator;
  readonly botaoEN: Locator;

  // Frase principal da página, em cada idioma
  readonly fraseEmPortugues: Locator;
  readonly fraseEmIngles: Locator;

  constructor(page: Page) {
    this.page = page;

    const grupoIdioma = page.getByRole('group', { name: 'Idioma / Language' });
    this.botaoPT = grupoIdioma.getByRole('button', { name: 'PT' });
    this.botaoEN = grupoIdioma.getByRole('button', { name: 'EN' });

    this.fraseEmPortugues = page.locator('p.statement.pt');
    this.fraseEmIngles = page.locator('p.statement.en');
  }

  // Abre a página inicial do portfólio
  async abrir() {
    await this.page.goto('/');
  }

  // Troca o idioma clicando no botão PT ou EN
  async trocarIdioma(idioma: 'pt' | 'en') {
    if (idioma === 'en') {
      await this.botaoEN.click();
    } else {
      await this.botaoPT.click();
    }
  }
}