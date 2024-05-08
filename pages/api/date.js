import { initializeApp } from "firebase/app";
import { getDatabase, ref, child, push, update  } from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyDDb1T_gaUgBfl4lIbHfIO2-70h_CgVcLI",
  authDomain: "amen-1bc99.firebaseapp.com",
  databaseURL: "https://amen-1bc99-default-rtdb.firebaseio.com",
  projectId: "amen-1bc99",
  storageBucket: "amen-1bc99.appspot.com",
  messagingSenderId: "700594999363",
  appId: "1:700594999363:web:13a19802ecdb3045e884f6",
  measurementId: "G-55EV267W4H",
};
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

async function writeNewPost(info) {

  //dapat info-naay object identifier date para sorter?

  // A post entry.


  // Get a key for a new Post.
  const newPostKey = push(child(ref(db), 'posts')).key;

  // Write the new post's data simultaneously in the posts list and the user's post list.
  const updates = {};
  updates['/posts/' + 'logs/' + newPostKey] = info;
  // updates['/user-posts/' + uid + '/' + newPostKey] = postData;

  return update(ref(db), updates);
  //increment by update, =naa sa firebase
}

const d = new Date




const allowCors = (fn) => async (req, res) => {
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Origin", "*");
  // another common pattern
  // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,OPTIONS,PATCH,DELETE,POST,PUT",
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
  );
  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }
  if (req.method === "POST") {
    const data = req.body;
    res.status(200).json({ message: "data received" });
    console.log(data);
    await writeNewPost(data)
  }

  if (req.method === "GET") {
    res.status(200).json({ message: "amen" });
  }
  return await fn(req, res);
};

const handler = (req, res) => {
  const d = new Date();
  res.end(d.toString());
};

export default allowCors(handler);
