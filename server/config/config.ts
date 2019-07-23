// containter for all environments

const environments = {
  development: {},
  production: {},
  testing: {}
};

// development environment (default)
environments.development = {
  httpPort: 3000,
  httpsPort: 3001,
  envName: "development",
  secret: "thisisasecret",
  mongoUrl:
    "mongodb+srv://viru:viru@cluster0-gqhiq.mongodb.net/test?retryWrites=true&w=majority"
};

// production environment
environments.production = {
  httpPort: 5000,
  httpsPort: 5001,
  envName: "production",
  secret: "thisisasecret",
  mongoUrl:
    "mongodb+srv://viru:viru@cluster0-gqhiq.mongodb.net/test?retryWrites=true&w=majority"
};

// testing environment
environments.testing = {
  httpPort: 1000,
  httpsPort: 1001,
  envName: "testing",
  secret: "thisistestingsecret",
  mongoUrl:
    "mongodb+srv://viru:viru@cluster0-gqhiq.mongodb.net/test?retryWrites=true&w=majority"
};

// determine which environment was passed as a command-line argument
const currentEnvironment =
  typeof process.env.NODE_ENV == "string" ? process.env.NODE_ENV : "";

//chech that the current environment is one of the environments above, if not, default to development
// export the module
export const config =
  typeof environments[currentEnvironment] == "object"
    ? environments[currentEnvironment]
    : environments.development;

export const applicationData = {
  accountActivation: {
    message:
      "your account is created please check your mail to activate account",
    link: `http://localhost:3000/#/user/accountActivation/?token=`,
    linkDescription: "Click here to activate your account",
    subject: "Account Activation",
    text1:
      "Welcome to indi-invoice, You have registered successfully in indi-invoice. Click here to confirm your registration.",
    text2: "Once you confirm, Your account will be activated."
  },
  forgotPassword: {
    message:
      "We have sent you a link for reset password,please check you mail inbox ",
    link: "http://localhost:3000/user/forgotPassword/?token=",
    linkDescription: "Click here to reset your password",
    subject: "Reset Password",
    text1:
      "We have received the request to reset your password associated with this e-mail address and have created the reset password link.",
    text2:
      "If you have not requested for your password reset, you can safely ignore this email. Rest assured your customer account is safe."
  }
};
