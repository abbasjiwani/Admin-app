import GetServiceProviderForApproval from "@/controllers/ServiceProviderGetForApproval";
import ServiceProviderAccepted from "@/controllers/ServiceProviderAceepted";

const admin = async (req, res) => {
  const method = req.method;
  switch (method) {
    case "GET":
      let admin = await GetServiceProviderForApproval(req, res);
      break;
    case "POST":
      let post = await ServiceProviderAccepted(req, res);
      break;
  }
};

export default admin;
