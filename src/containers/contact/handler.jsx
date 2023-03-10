import axios from "axios";
const listId = "3d44be569f";
const apiKey = '38b2a1efe8a12fe18ed705480463da5b-us14';
// Another apikey = "d04894d8268a8ac2fb163950bd01b863-us14";
// another apikey = "a3c4c6c51fbb4bdfe3aaf5bf144dd869-us14";

// NEW API KEY -- d04894d8268a8ac2fb163950bd01b863-us14

//  THE PREVIOUS KEY HAS BEEN REVOKED -- c3ac1c46c3d863ea4284e368c41b6224-us14

const handleFormSubmit = (values, actions) => {
  const payload = {
    email_address: values.email,
    status: "subscribed",
    merge_fields: {
      FNAME: values.name,
      MESSAGE: values.message,
    },
  };

  axios.post( `https://us14.api.mailchimp.com/3.0/lists/${listId}/members`, payload,{
//   axios.post(`http://localhost:3000/subscribe`, payload, {
      headers: {
        Accept: "application/json",
        Authorization: `Basic, apikey: ${apiKey} `,
      },
    })
    .then((response) => {
      console.log("Data submitted successfully:", response);
      actions.setSubmitting(false);
      actions.resetForm();
    })
    .catch((error) => {
      console.error("Error submitting data:", error);
      actions.setSubmitting(false);
    });
};
export default handleFormSubmit;
