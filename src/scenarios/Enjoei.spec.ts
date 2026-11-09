import { expect, test } from '@playwright/test';

test.describe('Enjoei - navegação pública', () => {
  test.beforeEach(async ({ page }) => {
    // Fecha a promoção mesmo quando ela aparece depois do carregamento inicial.
    await page.addLocatorHandler(
      page.getByTestId('create-account-button'),
      async () => {
        await page
          .getByRole('button', { name: 'Fechar modal', exact: true })
          .click();
      }
    );

    const aceitarCookies = page.getByText('entendi e concordo', {
      exact: true
    });
    await page.addLocatorHandler(aceitarCookies, async () => {
      await aceitarCookies.click();
    });

    await page.goto('https://www.enjoei.com.br/', {
      waitUntil: 'domcontentloaded'
    });
  });

  test('deve carregar a página inicial com produtos', async ({ page }) => {
    await expect(page).toHaveURL('https://www.enjoei.com.br/');
    await expect(page).toHaveTitle(/enjoei/i);
    await expect(
      page.getByRole('link', { name: 'ir para a página inicial' }).first()
    ).toBeVisible();
    await expect(page.locator('a[href*="/p/"] img').first()).toBeVisible();
  });

  test('deve navegar para a categoria Moda Feminina', async ({ page }) => {
    await page
      .getByRole('link', { name: 'Moda Feminina', exact: true })
      .click();

    await expect(page).toHaveURL(
      url =>
        url.pathname === '/feminino/s' &&
        url.searchParams.get('dep') === 'feminino'
    );
    await expect(page.locator('a[href*="/p/"] img').first()).toBeVisible();
  });

  test('deve listar produtos da marca Adidas', async ({ page }) => {
    // O href identifica o link do rodapé sem depender dos banners da home.
    await page
      .getByRole('link', { name: 'Adidas', exact: true })
      .and(page.locator('a[href*="ref=search_brand_footer"]'))
      .click();

    await expect(page).toHaveURL(
      url =>
        url.pathname === '/adidas/s' && url.searchParams.get('b') === 'adidas'
    );
    await expect(page.locator('a[href*="/p/"] img').first()).toBeVisible();
  });
});
