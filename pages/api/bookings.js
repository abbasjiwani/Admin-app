import GetBookings from "@/controllers/GetBookings";

const booking = async (req, res) => {
  const method = req.method;
  switch (method) {
    case "GET":
      let getService = await GetBookings(req, res)
      break; 
    }
};

export default booking;
