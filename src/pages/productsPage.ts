import { expect } from "@playwright/test";

export default class ProductsPage {

    private Elements = {
        lblProducts: "//span[contains(text(),'Products')]"
    }

    async isVisible() {
        await global.page.waitForSelector(this.Elements.lblProducts);
        await expect(global.page.locator(this.Elements.lblProducts)).toBeVisible();
    }
}