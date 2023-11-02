import GetReview from "@/controllers/GetReview";
import GetReviewByEmail from "@/controllers/GetReviewByEmail";
const review = async (req, res) => {
  const method = req.method;
  switch (method) {
    case "GET":
      let getService = await GetReview(req, res)
      break;
    case "POST":
      let byemail = await GetReviewByEmail(req, res);
      break; 
    }
};

export default review;
