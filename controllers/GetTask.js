export default async function GetTask(req, res) {
  const data = await fetch("http://localhost:5000/api/booking");
  const response = await data.json();

  res.status(200).json({ data: response });
}
