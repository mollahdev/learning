// =============================================================================
// RPC (Remote Procedure Call) & gRPC
// =============================================================================

// -----------------------------------------------------------------------------
// WHAT IS RPC (Remote Procedure Call)?
// -----------------------------------------------------------------------------
// RPC is a protocol that allows a program to execute a function/procedure on a
// REMOTE SERVER as if it were a local function call. You call it, get a result
// back — you don't worry about the network details underneath.
//
// Flow:
//   Client                          Server
//     |                               |
//     |  --> doSomething(args)  -->   |  (executes the function)
//     |  <--    returns result  <--   |
//     |                               |
//
// WITHOUT RPC — manual HTTP/REST call:
//
//   const response = await fetch('https://api.example.com/users/add', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({ name: 'Alice', age: 30 })
//   });
//   const user = await response.json();
//
// WITH RPC — feels like a local function call:
//
//   const user = await userService.addUser({ name: 'Alice', age: 30 });
//

// -----------------------------------------------------------------------------
// WHAT IS gRPC?
// -----------------------------------------------------------------------------
// gRPC (google Remote Procedure Call) is Google's modern, high-performance
// open-source implementation of RPC. It's built on two key technologies:
//

// -----------------------------------------------------------------------------
// HOW gRPC WORKS — STEP BY STEP
// -----------------------------------------------------------------------------

// STEP 1: Define your service in a .proto file
// --------------------------------------------
// Protobuf acts as a strict schema/contract between client and server.
//
//   syntax = "proto3";
//
//   service UserService {
//     rpc AddUser (AddUserRequest) returns (AddUserResponse);
//     rpc GetUser (GetUserRequest) returns (User);
//   }
//
//   message AddUserRequest {
//     string name = 1;
//     int32  age  = 2;
//   }
//
//   message AddUserResponse {
//     string id      = 1;
//     string message = 2;
//   }

// STEP 2: Generate code from the .proto file
// ------------------------------------------
// The protoc compiler auto-generates CLIENT STUBS and SERVER INTERFACES
// in your language (Node.js, Python, Go, Java, etc.) — no manual work needed.

// STEP 3: Implement the Server (Node.js example)
// -----------------------------------------------
//
//   const grpc = require('@grpc/grpc-js');
//
//   const server = new grpc.Server();
//   server.addService(UserService, {
//     addUser: (call, callback) => {
//       const { name, age } = call.request;
//       // ... save to DB ...
//       callback(null, { id: '123', message: 'User created!' });
//     }
//   });
//
//   server.bindAsync('0.0.0.0:50051', grpc.ServerCredentials.createInsecure(), () => {
//     server.start();
//   });

// STEP 4: Call from the Client (Node.js example)
// -----------------------------------------------
//
//   const client = new UserServiceClient(
//     'localhost:50051',
//     grpc.credentials.createInsecure()
//   );
//
//   // Feels just like a local function call!
//   client.addUser({ name: 'Alice', age: 30 }, (err, response) => {
//     console.log(response.message); // "User created!"
//   });

// -----------------------------------------------------------------------------
// gRPC vs REST — KEY DIFFERENCES
// -----------------------------------------------------------------------------
//
//   Feature            REST (HTTP/JSON)       gRPC (HTTP/2 + Protobuf)
//   ──────────────────────────────────────────────────────────────────
//   Protocol           HTTP/1.1               HTTP/2
//   Data Format        JSON (text)            Protobuf (binary)
//   Speed              Slower                 ~5-10x faster
//   Payload Size       Larger                 ~3x smaller
//   Type Safety        ✗ No                   ✓ Yes (schema enforced)
//   Code Generation    Manual                 ✓ Auto-generated stubs
//   Streaming          Limited (SSE/WS)       ✓ Native bi-directional
//   Browser Support    ✓ Full                 ⚠ Limited (needs grpc-web)
//   Human Readable     ✓ Easy to debug        ✗ Binary (harder to debug)

// -----------------------------------------------------------------------------
// gRPC STREAMING TYPES
// -----------------------------------------------------------------------------
// gRPC supports 4 types of calls — a huge advantage over REST:
//
//   1. Unary           — Client sends ONE request,    server sends ONE response
//   2. Server Stream   — Client sends ONE request,    server sends MANY responses
//   3. Client Stream   — Client sends MANY requests,  server sends ONE response
//   4. Bi-directional  — Both sides stream simultaneously (like a WebSocket)
//
// In .proto syntax:
//
//   service ChatService {
//     rpc SendMessage    (Message)         returns (Response);        // Unary
//     rpc LiveFeed       (Request)         returns (stream Message);  // Server stream
//     rpc UploadMessages (stream Message)  returns (Summary);         // Client stream
//     rpc Chat           (stream Message)  returns (stream Message);  // Bi-directional
//   }

// -----------------------------------------------------------------------------
// WHEN TO USE WHAT?
// -----------------------------------------------------------------------------
//
//   Use Case                              Recommendation
//   ──────────────────────────────────────────────────────
//   Public API (used by browsers)         REST
//   Internal microservice communication   gRPC
//   Real-time / streaming data            gRPC
//   Simple CRUD app                       REST
//   Low-latency, high-throughput systems  gRPC
//   Multiple languages in a system        gRPC (auto-generated clients)

// -----------------------------------------------------------------------------
// SUMMARY
// -----------------------------------------------------------------------------
//
//   RPC  = The CONCEPT — "call a function on another machine"
//   gRPC = Google's production-grade IMPLEMENTATION of RPC
//          Uses HTTP/2 + Protobuf for speed + type safety
//          Great for microservices, streaming, and polyglot systems
//
//   In short:
//   - REST  → Great for public-facing APIs where human readability matters.
//   - gRPC  → Shines for internal service-to-service communication where
//              performance, type safety, and streaming are critical.