export default async function handler(req, res) {
  if (req.method == "POST") {
    try {
      console.log("Attempting to add to google groups....");
    } catch (error) {
      console.log(error);
    }
  }

  return response;
}
