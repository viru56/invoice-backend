// containter for all environments

const environments = {
  development: {},
  production: {},
  testing: {}
};

// development environment (default)
environments.development = {
  httpPort: process.env.PORT || 3000,
  httpsPort: process.env.PORT || 3001,
  envName: "development",
  secret: process.env.JWT_SECRET || "thisisasecret",
  hostName: process.env.WEB_URL || "http://localhost:3000",
  mongoUrl: process.env.MONGO_URI ||
    "mongodb://localhost:27017/test",
    merchantId: process.env.BRAINTREE_MERCHANT_ID,
    publicKey: process.env.BRAINTREE_PUBLIC_KEY,
    privateKey: process.env.BRAINTREE_PRIVATE_KEY,
    tokenizationKeys: process.env.BRAINTREE_TOKENIZATION_KEY
};

// production environment
environments.production = {
  httpPort: process.env.PORT || 5000,
  httpsPort:process.env.PORT || 5001,
  hostName: process.env.WEB_URL || "http://localhost:5000",
  envName: "production",
  secret: process.env.JWT_SECRET || "thisisasecret",
  mongoUrl: process.env.MONGO_URI,
  merchantId: process.env.BRAINTREE_MERCHANT_ID,
  publicKey: process.env.BRAINTREE_PUBLIC_KEY,
  privateKey: process.env.BRAINTREE_PRIVATE_KEY,
  tokenizationKeys: process.env.BRAINTREE_TOKENIZATION_KEY
};

// testing environment
environments.testing = {
  httpPort: 1000,
  httpsPort: 1001,
  hostName: "http://127.0.0.1:1000",
  envName: "testing",
  secret: "thisistestingsecret",
  mongoUrl:
    "mongodb://localhost:27017/test"
};

// determine which environment was passed as a command-line argument
const currentEnvironment =
  typeof process.env.NODE_ENV == "string" && process.env.NODE_ENV.trim() !== ""
    ? process.env.NODE_ENV
    : "development";

//chech that the current environment is one of the environments above, if not, default to development
// export the module
export const config =
  typeof environments[currentEnvironment] == "object"
    ? environments[currentEnvironment]
    : environments.development;

export const applicationData = {
  accountCreation: {
    link: `${config.hostName}/#/accountactivation/?token=`,
    linkDescription: "Click here to set password",
    subject: "Welcome to Indi-Invoice",
    text1: "Welcome to Indi-Invoice! We are happy to have you on board.",
    text2:
      "Invoiced takes the work out of billing so you can get back to doing what you do best. By joining Indi-Invoice you have just made an important step towards taking control of your accounts receivable.",
    text3: "Click on the below link to set a new password for your account.",
    template: "general-mail.ejs",
    hostName:environments[currentEnvironment].hostName
  },
  accountActivation: {
    link: `${config.hostName}/#/accountactivation/?token=`,
    linkDescription: "Click here to activate your account",
    subject: "Account Activation",
    text1:
      "Welcome to indi-invoice, You account is created as a team member for indi-invoice.",
    text2: "Click on the below link to set a new password for your account.",
    text3: "",
    template: "general-mail.ejs",
    hostName:environments[currentEnvironment].hostName
  },
  forgotPassword: {
    link: `${config.hostName}/#/resetpassword/?token=`,
    linkDescription: "Click here to reset your password",
    subject: "Reset Password",
    text1:
      "We have received the request to reset your password associated with this e-mail address and have created the reset password link.",
    text2:
      "If you have not requested for your password reset, you can safely ignore this email. Rest assured your customer account is safe.",
    text3: "",
    template: "general-mail.ejs",
    hostName:environments[currentEnvironment].hostName
  },
  invoice: {
    subject: "Invoice from ",
    text1:
      "A new invoice has been created on your account. You may find a PDF of your invoice attached.",
    text2: "Thank you for your business!",
    text3: "This invoice was sent to ",
    template: "general-mail.ejs",
    hostName:environments[currentEnvironment].hostName
  },
  responseMessages: {
    accountCreation: {
      message1:
        "your account is created, please check your mail to set up new password."
    },
    accountActivation: {
      message1: "user account is created and send a mail to set password"
    },
    forgotPassword: {
      mailSent:
        "If the supplied email address is associated with a user account then a password reset email has been sent.",
      passwordChanged:
        "Your password is changed successfully. Now login with your new password."
    },
    error: {
      login: "invalid email or password"
    }
  }
};
