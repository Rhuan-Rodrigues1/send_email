const request = require("supertest");
const { app } = require("../../app");

const dataInvalid = {
  sender_email: "pessoal.rhuangmail.com",
  receiver_email: "gitrhuan34gmail.com",
  email_subject: "teste",
  email_body: "teste",
};

const dataValid = {
  sender_email: "pessoal.rhuan@gmail.com",
  receiver_email: "gitrhuan34@gmail.com",
  email_subject: "teste",
  email_body: "teste",
};

describe("Test Contoller", () => {
  it("should return an error when typing invalid email", async () => {
    const res = await request(app).post("/send_email").send(dataInvalid);

    expect(res.status).toBe(400);
    expect(res.body.message).toBe("Email Invalid");
  });

  it("should return ok when email is sent successfully", async () => {
    const res = await request(app).post("/send_email").send(dataValid);

    expect(res.status).toBe(200);
    expect(res.body.message).toBe(`email sent to ${dataValid.receiver_email}`);
  });
});
