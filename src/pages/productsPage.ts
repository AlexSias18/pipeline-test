import { expect } from "@playwright/test";

export default class ProductsPage {

    private Elements = {
        lblProducts: "//span[contains(text(),'Products')]",
        lblMessageError:"//*[@id='login_button_container']/div/form/div[3]/h3"
    }

    async isVisible() {
        await global.page.waitForSelector(this.Elements.lblProducts);
        await expect(global.page.locator(this.Elements.lblProducts)).toBeVisible();
    }
    async loginFailed() {
        await global.page.waitForSelector(this.Elements.lblMessageError);
        await expect(global.page.locator(this.Elements.lblMessageError)).toHaveText("Epic sadface: Username and password do not match any user in this service");
    }
}