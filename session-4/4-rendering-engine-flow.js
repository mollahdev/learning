/**
 *  Blink — used by Google Chrome, Microsoft Edge, Opera, Electron-based desktop apps such as Slack, VS Code, etc
 *  Gecko (-moz-) – used by Mozilla Firefox
 *  WebKit (-webkit-) — used by Apple Safari
 *  --------------------------------------------------
 *
 * RENDERING ENGINE FLOW
 * 1. Parsing (Nothing visible. Translating a document into a structure that code can use)
 *      - Conventional Parsing
 *          - CSS -> CSSOM Tree
 *          - Javascript -> JS Engine
 *              - V8 (Chrome, Edge, Node.js, Electron)
 *              - SpiderMonkey (Firefox)
 *              - JavaScriptCore / Nitro (Safari)
 *      - Unconventional Parsing
 *          - HTML -> DOM Tree
 *
 * 2. Rendering tree: Browser knows what to draw, but not where.
 *      - combining DOM and CSSOM trees
 *      - contains only the visible elements
 *      - render elements
 *          - None, Inline, Block, Inline-Block
 *
 * 3. Layout/Reflow: Browser knows where things are, but hasn't drawn pixels yet.
 *      - calculating the exact position and size of each element
 *      - Incremental Layout
 *          - Dirty bit system: Render tree nodes are marked as "dirty" when they need to be recalculated.
 *      - Global Layout
 *          - Full recalculation of the layout
 *          - Triggered by changes is resize, font changes
 *
 * 4. Paint/Repaint
 *      - Drawing the pixels to the screen
 *      - Order
 *          1. background color
 *          2. background image
 *          3. borders
 *          4. text
 *          5. images
 *          6. outline
 *
 * 5. Composite (Compositing)
 *      - **The UI becomes visible to the user at this stage.**
 *
 * --------------------------------------------------
 * CORE WEB VITALS & RENDERING
 * --------------------------------------------------
 * The "Stopwatch" for these metrics usually stops at the Composite step (when the frame is drawn),
 * but the delays happen in earlier steps.
 *
 * 1. FCP (First Contentful Paint) -> The first time ANY content (text, image, canvas) is painted to the screen.
 * 2. LCP (Loading Speed) -> Heavy on Parsing, Layout, and Paint.
 * 3. CLS (Visual Stability) -> Caused by unexpected changes in the Layout step.
 * 4. INP (Responsiveness) -> Delays in JS Execution (Parsing), Style, or Layout blocking the Main Thread.
 **/

/**
 * FAQ
 * 
 * 1. How HTML and CSS are rendered? (Summary)
 *    - HTML -> DOM (incremental, non-blocking)
 *    - CSS -> CSSOM (Render Blocking! The browser pauses Rendering until CSSOM is ready)
 *    - DOM + CSSOM -> Render Tree -> Layout -> Paint -> Composite
 * 
 * 2. What is Critical CSS?
 *    - The minimum CSS required to render the "Above the Fold" (visible part) of the page.
 *    - Strategy: Inline this CSS in the HTML `<head>` and load the rest of the CSS asynchronously.
 *    - Benefit: Eliminates "Render Blocking" for the initial view, improving FCP and LCP.
 * 
 * 3. How Fonts should be loaded?
 *    - Problem: Late loading fonts cause "Layout Shift" (CLS) where text jumps/reshapes.
 *    - Solution 1 (Best): Preload critical fonts in HTML `<head>`.
 *      * `<link rel="preload" href="..." as="font" type="font/woff2" crossorigin>`
 *      * Forces browser to download font immediately, often arriving before CSS is parsed.
 *    - Solution 2: `font-display: optional` (or `swap` with metric overrides).
 *      * `swap`: Shows text immediately -> Swaps font -> Text Jumps (CLS risk!).
 *      * `optional`: Good for slow connections. If font takes too long, browser keeps the system font (No Jump).
 * 
 * 4. Issue with using background image?
 *    - Performance Risk: Large images consume bandwidth & memory.
 *    - LCP Impact: Bad score if it's the main visual and loads slowly.
 *    - Render Blocking? NO. It does not block parsing.
 * 
 * 5. Complex UI Elements (Gradients, Blobs, Shadows): Inline SVG vs Image?
 *    - Simple Designs: Use CSS or Inline SVG.
 *      * Pros: Crisp scaling, no extra network request.
 *      * Cons: Can bloat DOM size.
 *    - Complex Designs (Heavy Blurs, Noise, deeply nested layers): Use Raster Image (WebP/AVIF).
 *      * Reason: "Painting" complex vectors is expensive for the CPU/GPU on every frame.
 *      * Images are pre-baked pixels. The browser just has to "Composite" them (fast).
 */



