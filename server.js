const http = require("http");
const mongodb = require("mongodb");

let db;
const connnectionString = 
"mongodb+srv://khudayberdi111:OR5lrZGvS6BcBJeE@cluster0.v2bx9b7.mongodb.net/reja"

mongodb.connect(connnectionString, {
    useNewUrlParse: true, 
    useUnifiedTopology: true
}, (err, client) => {
    if(err) console.log("ERROR on connection mongoDB");
    else {
        console.log("MongoDB connnection secceed");
        module.exports = client
        const app = require("./app");
const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})
}
});