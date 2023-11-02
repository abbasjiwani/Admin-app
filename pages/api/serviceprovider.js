import GetServiceProvier from "@/controllers/GetServiceProvider";
import GetServiceProvierByEmail from "@/controllers/GetServiceByEmail";

const gettask = async (req, res) => {
  const method = req.method;
  switch (method) {
    case "GET":
      let getService = await GetServiceProvier(req, res);
      break;
    case "POST":
      let Service = await GetServiceProvierByEmail(req, res);
      break;
  }
};

export default gettask;
