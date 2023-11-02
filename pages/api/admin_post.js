import AdminPost from "@/controllers/AdminPost";

const admin = async (req, res) => {
  const method = req.method;
  switch (method) {
    case "POST":
      let admin = await AdminPost(req, res);
      break;
  }
};

export default admin;
