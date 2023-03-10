import axios from "axios";

const handler = async (event, context) => {
  const listId = "3d44be569f";
  const apikey = "c3ac1c46c3d863ea4284e368c41b6224-us14";

  const body = JSON.parse(event.body);
  const { email_address, merge_fields } = body;

  if (!email_address) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: "Please privide a valid email address",
      }),
    };
  }

  try {
    const payload = {
      email_address,
      merge_fields,
      status: "subscribed",
    };

    const { data } = await axios.post(
      `https://us14.api.mailchimp.com/3.0/lists/${listId}/members`,
      payload,
      {
        headers: {
          Authorization: `Basic ${apikey}`,
        },
      }
    );

    return {
      status: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    console.log(error);
    return {
      status: 500,
      body: JSON.stringify(error),
    };
  }
};

 {/* <Form
        formFields={["name", "email", "message"]}
        formURL='https://formify.vercel.app/api/forms/submissions?id=d3baf624-bb4c-43f3-8a2a-e0ce35e14d29'
        formTitle=''
      /> */}

export default handler;


