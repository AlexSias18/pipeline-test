export default class LoginPage {
    private Elements = {
        userInput: "#user-name",
        passwordInput: "//input[@id='password']",
        loginBtn: "//input[@id='login-button']"
    }

    async navigateToSaucedemoPage() {
        await global.page.goto(process.env.BASEURL);
    }

    async login(user: string, password: string) {
        await global.page.type(this.Elements.userInput, user);
        await global.page.type(this.Elements.passwordInput, password)
        await global.page.click(this.Elements.loginBtn);
    }
}