import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("sample_mflix");
  if (req.method === "GET") {
    const movies = await db.collection("comments").find({}).limit(20).toArray();
    console.log("comments is", movies);
    res.json(movies);
  } else {
  }
}
