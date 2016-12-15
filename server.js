var MailDev = require('maildev');

var maildev = new MailDev({
  web: process.env.PORT || 1080,
  smtp: process.env.SMTP || 1025
});

maildev.listen();
