export default async function ServiceProviderAccepted(req, res) {
  const { firstname, lastname, email, password, document, accepted } = req.body;
  const data = await fetch(
    "http://localhost:5000/api/serviceprovider/service_provider_signup",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password,
        document: document,
        accepted: accepted,
      }),
    }
  );
  const response = await data.json();

  res.status(200).json({ data: response });
}
