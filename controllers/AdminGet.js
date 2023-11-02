export default async function AdminPost(req, res) {
  const {  email } = req.body;
  const postData = {
    email: email,
  };

  const data = await fetch("http://localhost:5000/api/admin_get", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(postData),
  });
  const response = await data.json();

  res.status(200).json({ data: response });
}
