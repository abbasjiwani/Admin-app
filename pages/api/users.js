import GetUsers from "@/controllers/GetUsers";

const users = async (req, res) => {
  const method = req.method;
  switch (method) {
    case "GET":
      let getService = await GetUsers(req, res)
      break;
    }
};

export default users;
