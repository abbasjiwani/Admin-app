export default async function GetServiceProvier(req, res) {
    const data = await fetch("http://localhost:5000/api/user/user");
    const response = await data.json();
  
    res.status(200).json({ data: response });
  }
  