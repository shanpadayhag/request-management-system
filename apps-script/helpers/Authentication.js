class Authentication {
    setAuthorizationKeys(secretKey, secretValue) {
        PropertiesService.getScriptProperties().setProperty(secretKey, secretValue);
    }

    static getSecretValue(secretKey) {
        return PropertiesService.getScriptProperties().getProperty(secretKey);
    }
}