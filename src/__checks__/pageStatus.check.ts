// @ts-ignore
import { test, expect } from '@playwright/test'
import { defaults } from '../defaults'

test('Checkly 404 page', async ({ page }) => {
  await page.setViewportSize(defaults.playwright.viewportSize)
  const response = await page.goto(`${defaults.pageUrl}`)

  expect(response.status()).toBe(200)
  await page.screenshot({ path: '200.jpg' })
})
