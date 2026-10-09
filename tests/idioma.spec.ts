import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage.ts';

// Simula um navegador configurado em português do Brasil
test.use({ locale: 'pt-BR' });

test.describe('Troca de idioma PT/EN', () => {

  test('abre em português por padrão', async ({ page }) => {
    const home = new HomePage(page);
    await home.abrir();

    await expect(home.botaoPT).toHaveAttribute('aria-pressed', 'true');
    await expect(home.botaoEN).toHaveAttribute('aria-pressed', 'false');
    await expect(home.fraseEmPortugues).toBeVisible();
    await expect(home.fraseEmIngles).toBeHidden();
  });

  test('troca para inglês e volta para português', async ({ page }) => {
    const home = new HomePage(page);
    await home.abrir();

    // Troca para inglês
    await home.trocarIdioma('en');
    await expect(home.botaoEN).toHaveAttribute('aria-pressed', 'true');
    await expect(home.botaoPT).toHaveAttribute('aria-pressed', 'false');
    await expect(home.fraseEmIngles).toBeVisible();
    await expect(home.fraseEmPortugues).toBeHidden();

    // Volta para português
    await home.trocarIdioma('pt');
    await expect(home.botaoPT).toHaveAttribute('aria-pressed', 'true');
    await expect(home.botaoEN).toHaveAttribute('aria-pressed', 'false');
    await expect(home.fraseEmPortugues).toBeVisible();
    await expect(home.fraseEmIngles).toBeHidden();
  });

});