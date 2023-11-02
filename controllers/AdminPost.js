export default async function AdminPost(req, res) {
  const { firstname, lastname, email, image } = req.body;
  const postData = {
    firstname: firstname,
    lastname: lastname,
    email: email,
    image: image,
  };
  const data = await fetch("http://localhost:5000/api/admin", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(postData),
  });
  const response = await data.json();

  res.status(200).json({ data: response });
}
