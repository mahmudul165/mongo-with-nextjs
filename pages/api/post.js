import clientPromise from "../lib/mongodb";
export default function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("sample_mflix");
  if (req.method !== "POST") {
    res.status(405).send({ message: "Only POST requests allowed" });
    return;
  }

  const body = JSON.parse(req.body);

  // the rest of your code
}
