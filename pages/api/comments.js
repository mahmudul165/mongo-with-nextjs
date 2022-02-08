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

  if (req.method === "POST") {
    // const movies = await db.collection("comments").find({}).limit(20).toArray();
    // console.log("comments is", movies);
    // res.json(movies);
  } else {
  }
}

// {
//         "_id": "5a9427648b0beebeb6957aa3",
//         "name": "mahmud",
//         "email": "mahmud@fakegmail.com",
//         "movie_id": "mahmud",
//         "text": "Occaecati commodi quidem aliquid delectus dolores. Facilis fugiat soluta maxime ipsum. Facere quibusdam vitae eius in fugit voluptatum beatae.",
//         "date": "1980-07-13T06:41:13.000Z"
//     }
