import clientPromise from "../../lib/mongodb";
const client = await clientPromise;
const db = client.db("sample_mflix");
export default async function handler(req, res) {
  if (req.method === "GET") {
    const movies = await db
      .collection("movies")
      .find({})
      .sort({ metacritic: -1 })
      .limit(20)
      .toArray();
    //console.log("db is", movies);
    res.json(movies);
  } else {
  }
  // const client = await clientPromise;
  // const db = client.db("sample_mflix");
  // const movies = await db
  //   .collection("movies")
  //   .find({})
  //   .sort({ metacritic: -1 })
  //   .limit(20)
  //   .toArray();
  // console.log("db is", movies);
  // res.json(movies);
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
