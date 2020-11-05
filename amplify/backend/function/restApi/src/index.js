
exports.handler = async (event) => {
    // TODO implement
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda!'),
    };
    return response;
};
const AWS = require("aws-sdk");
const { type } = require("os");

exports.handler = function(event, context) {
  AWS.config.update({ region: "ap-southeast-2" });
  if (!event.body)
    return;
  let body = event.body;
  const obj = JSON.parse(body)
  let email = obj.email;
  let emailType = obj.type;
  let emailText = obj.text;
  let linkUrl = obj.linkUrl;
  if (!email.match(/^[^@]+@[^@]+$/)) {
    context.done(null, "Failed");
    return;
  }
  const htmlBody = `
 <!DOCTYPE html>
 </html>
  <head>
  </style>
  </head>
  <body>
    <p>${emailType}</p>
    <p>${emailText}</p>
    <div style="display: flex;">
    <div style="border-radius: 2px;margin: 5px;">
          <a href=${linkUrl} target="_blank" style="background-color: blue; padding: 8px 12px; border: 1px solid #ED2939;border-radius: 2px;font-family: Helvetica, Arial, sans-serif;font-size: 14px; color: #ffffff;text-decoration: none;font-weight:bold;display: inline-block;">
              View more info
          </a>
    </div>
</body>
</html>
  `;
  const textBody = '';

  // Create sendEmail params
  const params = {
    Destination: {
      ToAddresses: [email]
    },
    Message: {
      Body: {
        Html: {
          Charset: "UTF-8",
          Data: htmlBody
        },
        Text: {
          Charset: "UTF-8",
          Data: textBody
        }
      },
      Subject: {
        Charset: "UTF-8",
        Data: "Invite you to our team"
      }
    },
    Source: "plz.Liguo@gmail.com"
  };

  // Create the promise and SES service object
  const sendPromise = new AWS.SES({ apiVersion: "2010-12-01" })
    .sendEmail(params)
    .promise();

  // Handle promise's fulfilled/rejected states
  sendPromise
    .then(data => {
      context.done(null, "Success");
    })
    .catch(err => {
      console.error(err, err.stack);
      context.done(null, "Failed");
    });
}; 