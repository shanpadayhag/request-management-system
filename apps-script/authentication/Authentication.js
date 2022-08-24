class Authentication {
    setAuthorizationKeys({ secretKey, secretValue }) {
        PropertiesService.getScriptProperties().setProperty(secretKey, secretValue);
    }

    static verify({ secretKey, secretValue }) {
        const notPermitted = PropertiesService.getScriptProperties().getProperty(secretKey) !== secretValue;

        if (notPermitted) {
            throw new Error('Authorization is required to perform action');
        }
    }
}
