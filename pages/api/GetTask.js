import GetTask from "@/controllers/GetTask";

const gettask = async (req, res) => {
  const method = req.method;
  switch (method) {
    case "GET":
      let getBooking = await GetTask(req, res)
      break;
    }
};

export default gettask;
