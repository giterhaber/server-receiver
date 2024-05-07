// pages/api/data-receiver.js
export default function handler(req, res) {
  if (req.method === "POST") {
    // Handle the incoming data here
    const data = req.body;

    // Do something with the data (e.g., save to database, process, etc.)

    res.status(200).json({ message: "Data received successfully" });
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
 