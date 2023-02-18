require("dotenv").config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const verifyServiceSid = process.env.TWILIO_VERIFY_SERVICE_SID;

const twilioClient = require('twilio')(accountSid, authToken);
const phoneNumber = '+916385685916';

async function startVerify(phoneNumber) {
  try {
    const verification = await twilioClient.verify
      .services(verifyServiceSid)
      .verifications
      .create({ to: phoneNumber, channel: 'sms' });
    console.log(verification);
  } catch (error) {
    console.error(error);
  }
}

// export default startVerify;
