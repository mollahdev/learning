/**
 * BROWSER COMPONENTS ARCHITECTURE
 * --------------------------------------------------
 * 
 * 1. User Interface (UI)
 *    - Includes the address bar, back/forward buttons, bookmarking menu, tabs, etc.
 *    - Everything you interact with on the browser window, *except* the viewport where the requested web page is displayed.
 * 
 * 2. Browser Engine
 *    - The "bridge" or coordinator between the User Interface and the Rendering Engine.
 *    - It queries and manipulates the Rendering Engine based on user actions from the UI components (e.g., refreshing the page or navigating back).
 * 
 * 3. Rendering Engine (e.g., Blink for Chrome, WebKit for Safari, Gecko for Firefox)
 *    - Responsible for displaying the requested content.
 *    - If the requested content is HTML, it parses the HTML and CSS, combines them, and draws the painted pixels to the screen.
 * 
 * 4. Networking
 *    - Handles network calls such as HTTP and HTTPS requests.
 *    - Provides a platform-independent interface to handle things like security, caching, DNS resolution, and connection management.
 * 
 * 5. UI Backend
 *    - Used for drawing basic OS-level widgets like combo boxes, input blocks, and alert windows.
 *    - It exposes a generic interface that relies on the underlying operating system's UI methods.
 * 
 * 6. JavaScript Engine (e.g., V8 for Chrome/Node, SpiderMonkey for Firefox, JavaScriptCore for Safari)
 *    - The interpreter/compiler responsible for parsing, compiling, and executing JavaScript code.
 *    - It often uses Just-In-Time (JIT) compilation to run code efficiently.
 * 
 * 7. Data Storage (Data Persistence)
 *    - The persistence layer where the browser saves data locally.
 *    - Includes storage mechanisms such as Cookies, localStorage, sessionStorage, IndexedDB, WebSQL, and Cache API.
 * 
 * --------------------------------------------------
 * HIGH-LEVEL WORKFLOW
 * --------------------------------------------------
 * 
 * - When you type a URL into the UI address bar, the Browser Engine coordinates the fetch.
 * - The Networking component fetches the HTML document over the internet.
 * - The Rendering Engine receives the HTML chunks and begins parsing them to build the DOM.
 * - When the Rendering Engine encounters a `<script>` tag, it pauses and passes execution to the JavaScript Engine.
 * - External resources like CSS and Images are fetched via the Networking component.
 * - Finally, the UI Backend is used to paint the resulting visual elements to the screen.
 * 
 */
