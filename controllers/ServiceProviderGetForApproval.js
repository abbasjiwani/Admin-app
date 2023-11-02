export default async function GetServiceProviderForApproval(req, res) {
  const data = await fetch(
    "http://localhost:5000/api/serviceprovider/get_service_provider_admin"
  );
  const response = await data.json();

  res.status(200).json({ data: response });
}
