import express, { Request, Response } from "express";
import cors from "cors";
import axios from "axios";

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/signup", async (req: Request, res: Response) => {
  const { username, secret, email, fullname } = req.body;

  // Store a user-copy on Chat Engine!
  try {
    const r = await axios.post(
      "https://api.chatengine.io/users/",
      { username, secret, email, fullname },
      { headers: { "Private-Key": "2ce7cf14-1478-4d83-b1a0-c13c9c9b276d" } }
    );
    return res.status(r.status).json(r.data);
  } catch (err) {
    return res.status(500).json({ error: "Internal server error" });
  }
});

app.post("/login", async (req: Request, res: Response) => {
  const { username, secret } = req.body;

  // Fetch this user from Chat Engine in this project!
  try {
    const r = await axios.get("https://api.chatengine.io/users/me/", {
      headers: {
        "Project-ID": "4dd2c849-bcb1-4f22-b3fc-796bec5d4d19",
        "User-Name": username,
        "User-Secret": secret,
      },
    });
    return res.status(r.status).json(r.data);
  } catch (err) {
    return res.status(500).json({ error: "Internal server error" });
  }
});

const port = 5000;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
