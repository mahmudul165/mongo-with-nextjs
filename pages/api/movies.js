import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("sample_mflix");
  const movies = await db
    .collection("movies")
    .find({})
    .sort({ metacritic: -1 })
    .limit(20)
    .toArray();
  console.log("db is", movies);
  res.json(movies);
}

// const handler = async (req, res) => {
//   const client = await clientPromise;
//   const db = client.db("sample_mflix");
//   const movies = await db
//     .collection("movies")
//     .find({})
//     .sort({ metacritic: -1 })
//     .limit(20)
//     .toArray();
//   console.log("db is", movies);
//   res.json(movies);
// };
// export default handler;
