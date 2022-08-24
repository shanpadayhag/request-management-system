class Auth {
    static getAppsScriptSecrets() {
        return {
            secretKey: process.env.REACT_APP_SECRET_KEY,
            secretValue: process.env.REACT_APP_SECRET_VALUE,
        }
    }
}

export default Auth;
