/**
 * Open System Interconnection (OSI) model 
 * 
 * It defines standard for how different computer systems can communicate with each other.
 * It's a 7 layer model. and It's used everywhere. Without this model, we can't 
 * imagine how the internet works.
 * 
 * - if every equipment has different standard, then it's impossible to communicate with each other.
 * - Like different router, switch, hub, modem, etc. has different standard, then it's impossible to communicate with each other.
 * 
 * 
 * 7 layers: Each describes specific network component. We mostly need layer 4 and 7 as web developer.
 */ 

// Think of it like a building — each floor serves a specific purpose,
// and each floor depends on the one below it.
//
// ┌─────────────────────────────────────────────────────────────────────┐
// │  Layer 7 — Application Layer                                        │
// │  What it does: Direct interaction with end-user applications        │
// │  Devices/Software: Web browsers (Chrome), email clients (Outlook),  │
// │                    Postman, Slack, WhatsApp                         │
// │  Protocols: HTTP, HTTPS, FTP, SMTP, DNS, WebSocket, gRPC            │
// │  Real example: When you type google.com in Chrome → Layer 7         │
// └─────────────────────────────────────────────────────────────────────┘
//
// ┌─────────────────────────────────────────────────────────────────────┐
// │  Layer 6 — Presentation Layer                                       │
// │  What it does: Translates, encrypts, and compresses data            │
// │  Devices/Software: SSL/TLS libraries, codecs (MP4, JPEG encoder)    │
// │  Protocols: TLS/SSL, JPEG, MPEG, ASCII, Unicode, JSON serializer    │
// │  Real example: HTTPS encrypts your data here before sending it      │
// └─────────────────────────────────────────────────────────────────────┘
// JSON -> Serialize (convert to string) -> JSON


// ┌─────────────────────────────────────────────────────────────────────┐
// │  Layer 5 — Session Layer                                            │
// │  What it does: Opens, manages, and closes communication sessions    │
// │  Devices/Software: OS session managers, RPC frameworks              │
// │  Protocols: RPC, PPTP, SIP (VoIP calls)                             │
// │  Real example: A Zoom call — it maintains your session alive        │
// │                throughout the entire video call                     │
// └─────────────────────────────────────────────────────────────────────┘
//
// ┌─────────────────────────────────────────────────────────────────────┐
// │  Layer 4 — Transport Layer                                          │
// │  What it does: Reliable delivery, segmentation, flow control        │
// │  Devices/Software: OS kernel (handles TCP/UDP), firewalls           │
// │  Protocols: TCP (reliable), UDP (fast, no guarantee)                │
// │  Real example: Sending a file — TCP breaks it into pieces and       │
// │                reassembles them in the correct order                │
// └─────────────────────────────────────────────────────────────────────┘
//
// ┌─────────────────────────────────────────────────────────────────────┐
// │  Layer 3 — Network Layer                                            │
// │  What it does: Logical addressing (IP) and routing between networks │
// │  Devices: Routers, Layer-3 switches                                 │
// │  Protocols: IP (IPv4/IPv6), ICMP (ping), OSPF, BGP                  │
// │  Real example: Your home Router decides your request should go      │
// │                to Google's server at 142.250.x.x via the internet   │
// └─────────────────────────────────────────────────────────────────────┘
//
// ┌─────────────────────────────────────────────────────────────────────┐
// │  Layer 2 — Data Link Layer                                          │
// │  What it does: Node-to-node delivery within the same network        │
// │                using MAC addresses, detects errors in frames        │
// │  Devices: Network switches, Wi-Fi Access Points, Network Cards (NIC)│
// │  Protocols: Ethernet, Wi-Fi (802.11), ARP, PPP                      │
// │  Real example: Your Wi-Fi router/switch directs data to the correct │
// │                device in your home using MAC addresses              │
// └─────────────────────────────────────────────────────────────────────┘
//
// ┌─────────────────────────────────────────────────────────────────────┐
// │  Layer 1 — Physical Layer                                           │
// │  What it does: Transmits raw bits (0s and 1s) over a physical medium│
// │  Devices: Ethernet cables, Fiber optic cables, Hubs, Repeaters,     │
// │           Modems, Wi-Fi antennas, Bluetooth chips                   │
// │  Protocols: USB, DSL, 802.11 (radio waves), Ethernet (electrical)   │
// │  Real example: The actual cable plugged into your laptop, or the    │
// │                radio waves your Wi-Fi card sends through the air    │
// └─────────────────────────────────────────────────────────────────────┘