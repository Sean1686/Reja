const http = require("http");
const { MongoClient } = require("mongodb");

let db;

const connectionString =
"mongodb+srv://khudayberdi111:OR5lrZGvS6BcBJeE@cluster0.v2bx9b7.mongodb.net/Reja?retryWrites=true&w=majority&appName=Reja";

MongoClient.connect(
  connectionString,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, client) => {
    if (err) {
      console.log("MongoDB connection error", err);
      return;
    }

    console.log("MongoDB connection succeeded");

    // ✅ CREATE DB
    db = client.db("Reja");

    // ✅ EXPORT DB
    module.exports = db;

    const app = require("./app");
    const server = http.createServer(app);

    const PORT = 3000;
    server.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  }
);