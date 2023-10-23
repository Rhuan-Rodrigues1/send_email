class ValidatorError extends Error {
  constructor(message) {
    super(message);
    this.name = "EmailInvalid";
  }
}

module.exports = { ValidatorError };
