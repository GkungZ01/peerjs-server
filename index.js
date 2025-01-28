import { PeerServer } from "peer";
import express from "express";

const app = express();
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // Allow all origins
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const peerServer = PeerServer({ port: 9000, path: "/myapp" });
app.use(peerServer);

console.log("PeerJS server running on port 9000");