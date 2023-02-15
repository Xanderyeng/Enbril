const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/subscribe', async (req, res) => {
  const { email, name, message } = req.body;
  const data = {
    email_address: email,
    status: 'subscribed',
    merge_fields: {
      FNAME: name,
      MESSAGE: message,
    },
  };
  const apiKey = 'c3ac1c46c3d863ea4284e368c41b6224-us14';
  const listId = '3d44be569f';
  const url = `https://us14.api.mailchimp.com/3.0/lists/${listId}/members`;

  try {
    const response = await axios.post(url, data, {
      headers: {
        Authorization: `apikey ${apiKey}`,
        'Content-Type': 'application/json',
      },
    });
    res.json(response.data);
  } catch (error) {
    res.status(error.response.status).json(error.response.data);
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
