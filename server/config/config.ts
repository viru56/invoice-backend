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
  accountCreation: {
    link: `http://localhost:4200/#/accountactivation/?token=`,
    linkDescription: "Click here to set password",
    subject: "Welcome to Indi-Invoice",
    text1: "Welcome to Indi-Invoice! We are happy to have you on board.",
    text2:
      "Invoiced takes the work out of billing so you can get back to doing what you do best. By joining Indi-Invoice you have just made an important step towards taking control of your accounts receivable.",
    text3: "Click on the below link to set a new password for your account."
  },
  accountActivation: {
    link: `http://localhost:4200/#/accountactivation/?token=`,
    linkDescription: "Click here to activate your account",
    subject: "Account Activation",
    text1:
      "Welcome to indi-invoice, You have registered successfully in indi-invoice. Click here to confirm your registration.",
    text2: "Once you confirm, Your account will be activated.",
    text3: ""
  },
  forgotPassword: {
    link: "http://localhost:4200/#/resetpassword/?token=",
    linkDescription: "Click here to reset your password",
    subject: "Reset Password",
    text1:
      "We have received the request to reset your password associated with this e-mail address and have created the reset password link.",
    text2:
      "If you have not requested for your password reset, you can safely ignore this email. Rest assured your customer account is safe.",
    text3: ""
  },
  responseMessages: {
    accountCreation: {
      message1:
        "your account is created, please check your mail to set up new password."
    },
    accountActivation: {
      message1:
        "your account is created, please check your mail to activate account"
    },
    forgotPassword: {
      mailSent:
        "If the supplied email address is associated with a user account then a password reset email has been sent.",
      passwordChanged:
        "Your password is changed successfully. Now login with your new password."
    },
    error:{
      login:"invalid email or password"
    }
  }
};
