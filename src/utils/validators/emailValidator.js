var emailRegex =
  /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;

const emailValidator = (email) => {
  if (!email) {
    return false;
  }

  if (email.length > 254) {
    return false;
  }

  if (!emailRegex.test(email)) {
    return false;
  }

  const parts = email.split("@");
  if (parts[0].length > 64) {
    return false;
  }

  const domainPart = parts[1].split(".");

  if (
    domainPart.some(function (part) {
      return part.length > 64;
    })
  ) {
    return false;
  }

  return true;
};

module.exports = { emailValidator };
