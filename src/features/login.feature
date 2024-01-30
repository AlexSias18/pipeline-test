@prueba-pipeline
Feature: Login Saucedemo

    @login
    Scenario: Login exitoso Saucedemo
        Given estoy en la página de Saucedemo
        When inicio sesión con mis credenciales usuario "standard_user" y password "secret_sauce"
        Then el inicio de sesión es satisfactorio

    @login_fallido
    Scenario: Login fallido Saucedemo
        Given estoy en la página de Saucedemo
        When inicio sesión con mis credenciales usuario "standard_user" y password "password"
        Then el inicio de sesión es fallido