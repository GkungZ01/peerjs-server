import { PeerServer } from 'peer';
import cors from 'cors';

const peerServer = PeerServer({
  port: 9000,
  key: "hoshizora",
  allowCORS: true, // Enable CORS
});

console.log('PeerJS server running on port 9000');