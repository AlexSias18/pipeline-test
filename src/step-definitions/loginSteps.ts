import { Given, Then, When } from "@cucumber/cucumber";
import LoginPage from "../pages/loginPage";
import ProductsPage from "../pages/productsPage";

const loginPage = new LoginPage();
const productsPage = new ProductsPage();

Given('estoy en la página de Saucedemo', async function () {
    await loginPage.navigateToSaucedemoPage();
});

When('inicio sesión con mis credenciales usuario {string} y password {string}', async function (user, password) {
    await loginPage.login(user, password);
});

Then('el inicio de sesión es satisfactorio', async function () {
    await productsPage.isVisible();
});