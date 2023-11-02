export default async function GetServiceProvierByEmail(req, res) {
  const { email } = req.body;
  const data = await fetch(
    "http://localhost:5000/api/serviceprovider/getservicebyemail",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email }),
    }
  );
  const response = await data.json();

  res.status(200).json({ data: response });
}
