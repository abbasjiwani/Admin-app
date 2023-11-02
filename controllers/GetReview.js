export default async function GetReview(req, res) {
    const data = await fetch("http://localhost:5000/api/rating/get_rating");
    const response = await data.json();
  
    res.status(200).json({ data: response });
  }
  