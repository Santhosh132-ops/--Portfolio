import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import NotFound from './NotFound';
import ComingSoon from './ComingSoon';
import TerminalCode from './TerminalCode';
import './ArticlePage.css';

const ArticlePage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [activeSection, setActiveSection] = useState('');
    const [liked, setLiked] = useState(false);
    const contentRef = useRef(null);

    // Placeholder content
    const articleContent = {
        "building-scalable-apis-with-node-js": {
            title: "Mastering Node.js",
            subtitle: "From Fundamentals to Production-Grade Applications",
            date: "January 2, 2026",
            readTime: "25 min read",
            author: "Santhosh",
            tags: ["Node.js", "JavaScript", "Backend", "Performance"],
            toc: [
                { id: "intro", title: "Introduction" },
                { id: "what-is-node", title: "What is Node.js?" },
                { id: "architecture", title: "Node.js Architecture" },
                { id: "event-loop", title: "The Event Loop" },
                { id: "modules", title: "Module System" },
                { id: "async", title: "Asynchronous Programming" },
                { id: "streams", title: "Streams & Buffers" },
                { id: "express", title: "Building APIs with Express" },
                { id: "database", title: "Database Integration" },
                { id: "performance", title: "Performance Optimization" },
                { id: "deployment", title: "Deployment" }
            ],
            content: (
                <>
                    <section id="intro">
                        <p className="lead-paragraph">
                            Node.js has transformed JavaScript from a browser-only language into a powerful server-side platform.
                            Built on Chrome's V8 JavaScript engine, Node.js enables developers to use JavaScript for full-stack development,
                            creating fast, scalable network applications with a unified language across the entire stack.
                        </p>
                        <p>
                            In this comprehensive guide, we'll explore Node.js from the ground up—understanding its architecture,
                            mastering asynchronous programming, building production-ready applications, and optimizing for performance.
                        </p>
                        <h3>Your First Node.js Server</h3>
                        <p>Let's start with a simple Express server:</p>
                        <TerminalCode
                            code={`const express = require('express')
const app = express()
const port = 3000

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Routes
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api/users', (req, res) => {
  res.json({ users: ['Alice', 'Bob', 'Charlie'] })
})

app.post('/api/users', (req, res) => {
  const { name } = req.body
  res.status(201).json({ message: 'User created', name })
})

// Start server
app.listen(port, () => {
  console.log(\`Server listen on port: \${port}\`)
})


Server listen on port 3000`}
                        />
                    </section>

                    <section id="what-is-node">
                        <h2>1. What is Node.js?</h2>
                        <p>
                            Node.js is an <strong>open-source, cross-platform JavaScript runtime environment</strong> that executes JavaScript code outside a web browser.
                            Created by Ryan Dahl in 2009, it was designed to build scalable network applications.
                        </p>
                        <div className="feature-grid">
                            <div className="feature-item">
                                <h3>V8 Engine</h3>
                                <p>Uses Google's V8 JavaScript engine, the same engine that powers Chrome, compiled to native machine code for blazing-fast execution.</p>
                            </div>
                            <div className="feature-item">
                                <h3>Event-Driven</h3>
                                <p>Built on an event-driven architecture that makes it perfect for I/O-intensive operations like web servers and real-time applications.</p>
                            </div>
                            <div className="feature-item">
                                <h3>NPM Ecosystem</h3>
                                <p>Access to over 2 million packages in the npm registry, the largest software registry in the world.</p>
                            </div>
                        </div>
                        <p><strong>Perfect for:</strong></p>
                        <ul>
                            <li>RESTful APIs and microservices</li>
                            <li>Real-time applications (chat, gaming, collaboration tools)</li>
                            <li>Streaming applications</li>
                            <li>Single-page applications (SPAs)</li>
                            <li>Command-line tools</li>
                        </ul>
                    </section>

                    <section id="architecture">
                        <h2>2. Node.js Architecture</h2>
                        <p>
                            Understanding Node.js architecture is crucial to writing efficient applications.
                        </p>
                        <div className="code-block">
                            <pre>
                                {`┌───────────────────────────────────────────────┐
│           JavaScript Code (Your App)          │
├───────────────────────────────────────────────┤
│              Node.js Bindings (C++)           │
├───────────────────────────────────────────────┤
│   V8 Engine    │        libuv (Event Loop)    │
│  (JavaScript)  │    (Async I/O, Threading)    │
└────────────────┴──────────────────────────────┘`}
                            </pre>
                            <div className="code-label">architecture.txt</div>
                        </div>
                        <p><strong>Key Components:</strong></p>
                        <ul>
                            <li><strong>V8 Engine:</strong> Compiles JavaScript to machine code</li>
                            <li><strong>libuv:</strong> Provides the event loop and async I/O</li>
                            <li><strong>Node.js Bindings:</strong> Bridge between JavaScript and C++ libraries</li>
                        </ul>
                    </section>

                    <section id="event-loop">
                        <h2>3. The Event Loop Explained</h2>
                        <p>
                            The event loop is what makes Node.js non-blocking. It's a single-threaded loop that processes callbacks from the event queue.
                        </p>
                        <div className="code-block">
                            <pre>
                                {`// Synchronous (Blocking)
const fs = require('fs');
const data = fs.readFileSync('/file.txt'); // Blocks here!
console.log(data);
console.log('Done');

// Asynchronous (Non-Blocking)
fs.readFile('/file.txt', (err, data) => {
  if (err) throw err;
  console.log(data);
});
console.log('Done'); // Runs immediately!`}
                            </pre>
                            <div className="code-label">event_loop_example.js</div>
                        </div>
                        <p><strong>Event Loop Phases:</strong></p>
                        <ol>
                            <li><strong>Timers:</strong> Executes setTimeout() and setInterval() callbacks</li>
                            <li><strong>Pending Callbacks:</strong> Executes I/O callbacks deferred to the next loop iteration</li>
                            <li><strong>Poll:</strong> Retrieves new I/O events; executes I/O related callbacks</li>
                            <li><strong>Check:</strong> Executes setImmediate() callbacks</li>
                            <li><strong>Close Callbacks:</strong> Executes close event callbacks</li>
                        </ol>
                    </section>

                    <section id="modules">
                        <h2>4. Module System (CommonJS & ES Modules)</h2>
                        <p>
                            Node.js uses modules to organize code. It supports both CommonJS (traditional) and ES Modules (modern).
                        </p>
                        <div className="code-block">
                            <pre>
                                {`// CommonJS (require/module.exports)
// math.js
function add(a, b) {
  return a + b;
}
module.exports = { add };

// app.js
const { add } = require('./math');
console.log(add(2, 3)); // 5

// ES Modules (import/export)
// math.mjs
export function add(a, b) {
  return a + b;
}

// app.mjs
import { add } from './math.mjs';
console.log(add(2, 3)); // 5`}
                            </pre>
                            <div className="code-label">modules.js</div>
                        </div>
                        <p><strong>Built-in Modules:</strong></p>
                        <ul>
                            <li><code>fs</code> - File system operations</li>
                            <li><code>http/https</code> - HTTP server and client</li>
                            <li><code>path</code> - File path utilities</li>
                            <li><code>os</code> - Operating system utilities</li>
                            <li><code>crypto</code> - Cryptographic functions</li>
                        </ul>
                    </section>

                    <section id="async">
                        <h2>5. Asynchronous Programming</h2>
                        <p>
                            Node.js provides three ways to handle asynchronous operations: Callbacks, Promises, and Async/Await.
                        </p>
                        <div className="code-block">
                            <pre>
                                {`// 1. Callbacks (Old way - "Callback Hell")
fs.readFile('file1.txt', (err, data1) => {
  if (err) throw err;
  fs.readFile('file2.txt', (err, data2) => {
    if (err) throw err;
    console.log(data1 + data2);
  });
});

// 2. Promises (Better)
const readFilePromise = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
};

readFilePromise('file1.txt')
  .then(data1 => readFilePromise('file2.txt'))
  .then(data2 => console.log(data2))
  .catch(err => console.error(err));

// 3. Async/Await (Best - Modern)
const fs = require('fs').promises;

async function readFiles() {
  try {
    const data1 = await fs.readFile('file1.txt');
    const data2 = await fs.readFile('file2.txt');
    console.log(data1 + data2);
  } catch (err) {
    console.error(err);
  }
}
readFiles();`}
                            </pre>
                            <div className="code-label">async_patterns.js</div>
                        </div>
                    </section>

                    <section id="streams">
                        <h2>6. Streams & Buffers</h2>
                        <p>
                            Streams allow you to process data piece by piece, without loading everything into memory. Perfect for large files!
                        </p>
                        <div className="code-block">
                            <pre>
                                {`const fs = require('fs');

// Bad: Loads entire file into memory
fs.readFile('huge-file.txt', (err, data) => {
  console.log(data); // Could crash with large files!
});

// Good: Processes file in chunks
const readStream = fs.createReadStream('huge-file.txt');
readStream.on('data', (chunk) => {
  console.log('Received chunk:', chunk.length);
});
readStream.on('end', () => {
  console.log('Finished reading file');
});

// Practical Example: File Upload
const http = require('http');
http.createServer((req, res) => {
  if (req.method === 'POST') {
    req.pipe(fs.createWriteStream('upload.txt'));
    req.on('end', () => {
      res.end('File uploaded!');
    });
  }
}).listen(3000);`}
                            </pre>
                            <div className="code-label">streams.js</div>
                        </div>
                        <p><strong>Types of Streams:</strong></p>
                        <ul>
                            <li><strong>Readable:</strong> Read data (e.g., fs.createReadStream)</li>
                            <li><strong>Writable:</strong> Write data (e.g., fs.createWriteStream)</li>
                            <li><strong>Duplex:</strong> Both readable and writable (e.g., TCP sockets)</li>
                            <li><strong>Transform:</strong> Modify data as it's read/written (e.g., compression)</li>
                        </ul>
                    </section>

                    <section id="express">
                        <h2>7. Building APIs with Express</h2>
                        <p>
                            Express is the most popular Node.js web framework, providing a robust set of features for web and mobile applications.
                        </p>
                        <div className="code-block">
                            <pre>
                                {`const express = require('express');
const app = express();

// Middleware
app.use(express.json()); // Parse JSON bodies

// Routes
app.get('/api/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/users', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});`}
                            </pre>
                            <div className="code-label">express_api.js</div>
                        </div>
                    </section>

                    <section id="database">
                        <h2>8. Database Integration</h2>
                        <p>
                            Node.js works seamlessly with both SQL and NoSQL databases.
                        </p>
                        <div className="code-block">
                            <pre>
                                {`// MongoDB with Mongoose
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/myapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true },
  createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);

// Create
const user = new User({ name: 'John', email: 'john@example.com' });
await user.save();

// Read
const users = await User.find({ name: 'John' });

// Update
await User.updateOne({ _id: userId }, { name: 'Jane' });

// Delete
await User.deleteOne({ _id: userId });`}
                            </pre>
                            <div className="code-label">mongodb.js</div>
                        </div>
                    </section>

                    <section id="performance">
                        <h2>9. Performance Optimization</h2>
                        <p>
                            Make your Node.js applications blazing fast with these techniques:
                        </p>
                        <ul>
                            <li><strong>Clustering:</strong> Use all CPU cores with the cluster module</li>
                            <li><strong>Caching:</strong> Implement Redis for frequently accessed data</li>
                            <li><strong>Compression:</strong> Use gzip compression for responses</li>
                            <li><strong>Connection Pooling:</strong> Reuse database connections</li>
                            <li><strong>Async Operations:</strong> Never block the event loop</li>
                        </ul>
                        <div className="code-block">
                            <pre>
                                {`// Clustering Example
const cluster = require('cluster');
const os = require('os');

if (cluster.isMaster) {
  const numCPUs = os.cpus().length;
  console.log(\`Master process \${process.pid} is running\`);
  
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
  
  cluster.on('exit', (worker) => {
    console.log(\`Worker \${worker.process.pid} died\`);
    cluster.fork(); // Restart worker
  });
} else {
  require('./app'); // Your Express app
  console.log(\`Worker \${process.pid} started\`);
}`}
                            </pre>
                            <div className="code-label">cluster.js</div>
                        </div>
                    </section>

                    <section id="deployment">
                        <h2>10. Deployment Best Practices</h2>
                        <p>
                            Deploy your Node.js application like a pro:
                        </p>
                        <ul>
                            <li><strong>PM2:</strong> Process manager for production</li>
                            <li><strong>Environment Variables:</strong> Use .env files for configuration</li>
                            <li><strong>Logging:</strong> Implement structured logging with Winston or Pino</li>
                            <li><strong>Monitoring:</strong> Use APM tools like New Relic or Datadog</li>
                            <li><strong>Security:</strong> Keep dependencies updated, use Helmet.js</li>
                        </ul>
                        <div className="code-block">
                            <pre>
                                {`// PM2 Ecosystem File (ecosystem.config.js)
module.exports = {
  apps: [{
    name: 'my-app',
    script: './app.js',
    instances: 'max', // Use all CPU cores
    exec_mode: 'cluster',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    },
    error_file: './logs/err.log',
    out_file: './logs/out.log',
    log_date_format: 'YYYY-MM-DD HH:mm:ss'
  }]
};

// Start with: pm2 start ecosystem.config.js`}
                            </pre>
                            <div className="code-label">pm2_config.js</div>
                        </div>
                        <p>
                            <strong>Conclusion:</strong> Node.js is a powerful platform for building scalable, high-performance applications.
                            Master these fundamentals, and you'll be well-equipped to build production-grade systems!
                        </p>
                    </section>
                </>
            )
        },
        "professional-rest-api-design": {
            title: "The Complete REST API Design Guide",
            subtitle: "From Fundamentals to Production-Ready APIs",
            date: "January 1, 2026",
            readTime: "20 min read",
            author: "Santhosh",
            tags: ["REST", "API Design", "Tutorial", "Backend"],
            toc: [
                { id: "intro", title: "The Philosophy" },
                { id: "scenario", title: "Scenario: TaskMaster" },
                { id: "modeling", title: "Resource Modeling" },
                { id: "methods", title: "HTTP Semantics" },
                { id: "hateoas", title: "HATEOAS" },
                { id: "filtering", title: "Advanced Filtering" },
                { id: "rate-limiting", title: "Rate Limiting" },
                { id: "idempotency", title: "Idempotency" },
                { id: "versioning", title: "Versioning" },
                { id: "errors", title: "Standardized Errors" }
            ],
            content: (
                <>
                    <section id="intro">
                        <p className="lead-paragraph">
                            Welcome to the complete REST API design guide. Whether you're building your first API or refining your tenth,
                            this guide will teach you the principles, patterns, and practices that separate amateur APIs from professional ones.
                        </p>
                        <p>
                            <strong>What you'll learn:</strong> By the end, you'll understand how to design APIs that are
                            intuitive, scalable, maintainable, and loved by developers. We'll use a real-world project to demonstrate every concept.
                        </p>
                        <p>
                            <strong>Prerequisites:</strong> Basic understanding of HTTP and JSON. Familiarity with any backend framework is helpful but not required.
                        </p>
                    </section>

                    <section id="scenario">
                        <h2>1. Understanding the Domain</h2>
                        <h3>Our Case Study: "TaskMaster" Issue Tracker</h3>
                        <p>
                            Throughout this course, we'll design the API for <strong>TaskMaster</strong>, an issue tracking system similar to Jira or Linear.
                            This is intentionally complex to demonstrate real-world challenges you'll face.
                        </p>
                        <p><strong>Why this example?</strong> Issue trackers have:</p>
                        <ul className="scenario-list">
                            <li><strong>Deep hierarchies:</strong> Organizations → Workspaces → Projects → Issues → Comments</li>
                            <li><strong>Complex relationships:</strong> Issues can be assigned to users, tagged, linked to other issues</li>
                            <li><strong>State machines:</strong> Issues move through workflows (Backlog → In Progress → Review → Done)</li>
                            <li><strong>Permissions:</strong> Different users have different access levels</li>
                            <li><strong>Real-time needs:</strong> Multiple users editing simultaneously</li>
                        </ul>
                        <p>
                            If you can design an API for this, you can design one for anything. Let's start with the fundamentals.
                        </p>
                    </section>

                    <section id="modeling">
                        <h2>2. Resource Modeling</h2>
                        <h3>Thinking in Resources, Not Database Tables</h3>
                        <p>
                            The biggest mistake beginners make is directly exposing their database schema as API endpoints.
                            Instead, think in <strong>resources</strong> — logical entities that make sense to API consumers.
                        </p>
                        <p><strong>Example:</strong> In our database, we might have tables like:</p>
                        <ul>
                            <li><code>issue_table</code>, <code>issue_comments</code>, <code>issue_assignees</code></li>
                        </ul>
                        <p>But our API should expose clean resources:</p>
                        <ul>
                            <li><code>/issues</code> — Collection of all issues</li>
                            <li><code>/issues/TM-123</code> — A specific issue</li>
                            <li><code>/issues/TM-123/comments</code> — Comments for that issue</li>
                        </ul>

                        <h3>URI Design Principles</h3>
                        <div className="feature-grid">
                            <div className="feature-item">
                                <h3>1. Use Nouns, Not Verbs</h3>
                                <p><strong>❌ Bad:</strong> <code>/getIssues</code>, <code>/createIssue</code></p>
                                <p><strong>✅ Good:</strong> <code>GET /issues</code>, <code>POST /issues</code></p>
                                <p><em>Why?</em> HTTP methods ARE the verbs. The URL should describe the resource.</p>
                            </div>
                            <div className="feature-item">
                                <h3>2. Collections are Plural</h3>
                                <p><strong>✅ Consistent:</strong> <code>/users/123</code>, <code>/issues/TM-45</code></p>
                                <p><em>Why?</em> It's clearer that <code>/users</code> is a collection and <code>/users/123</code> is one item from that collection.</p>
                            </div>
                            <div className="feature-item">
                                <h3>3. Use Kebab-Case</h3>
                                <p><strong>✅ Readable:</strong> <code>/user-profiles</code>, <code>/api-keys</code></p>
                                <p><strong>❌ Avoid:</strong> <code>/userProfiles</code>, <code>/user_profiles</code></p>
                                <p><em>Why?</em> URLs are case-insensitive in many systems. Kebab-case is the web standard.</p>
                            </div>
                        </div>

                        <h3>Identifier Strategy</h3>
                        <p>
                            <strong>Don't expose auto-increment IDs.</strong> They leak information about your scale and create security issues.
                        </p>
                        <div className="code-block">
                            <pre>
                                {`// ❌ Bad - Exposes that you only have 42 issues
GET /issues/42

// ✅ Better - UUID (hard to guess)
GET /issues/f47ac10b-58cc-4372-a567-0e02b2c3d479

// ✅ Best - Human-readable public ID
GET /issues/TM-102
// Format: [PROJECT_CODE]-[SEQUENTIAL_NUMBER]`}
                            </pre>
                            <div className="code-label">identifier_examples.http</div>
                        </div>
                    </section>

                    <section id="methods">
                        <h2>3. HTTP Methods — The Verbs of REST</h2>
                        <h3>Understanding What Each Method Means</h3>
                        <p>
                            HTTP methods aren't just conventions — they have specific semantics that enable caching, retries, and predictable behavior.
                        </p>

                        <h3>GET — Retrieve Data (Safe & Idempotent)</h3>
                        <p>
                            <strong>Purpose:</strong> Fetch a resource without modifying anything.<br />
                            <strong>Idempotent:</strong> Calling it 100 times has the same effect as calling it once.<br />
                            <strong>Cacheable:</strong> Browsers and CDNs can cache responses.
                        </p>
                        <div className="code-block">
                            <pre>
                                {`// Get all issues in a project
GET /projects/proj_abc/issues

// Get a specific issue
GET /issues/TM-123

// Response: 200 OK
{
  "id": "TM-123",
  "title": "Fix login bug",
  "status": "in_progress",
  "assignee": "user_456"
}`}
                            </pre>
                        </div>

                        <h3>POST — Create New Resources</h3>
                        <p>
                            <strong>Purpose:</strong> Create a new resource. The server decides the ID.<br />
                            <strong>Not Idempotent:</strong> Calling it twice creates two resources (unless you use idempotency keys — we'll cover this later).
                        </p>
                        <div className="code-block">
                            <pre>
                                {`// Create a new issue
POST /issues
Content-Type: application/json

{
  "title": "Add dark mode",
  "description": "Users want dark mode",
  "projectId": "proj_abc"
}

// Response: 201 Created
// Location header tells client where to find the new resource
Location: /issues/TM-124

{
  "id": "TM-124",
  "title": "Add dark mode",
  "status": "backlog",
  "createdAt": "2026-01-01T12:00:00Z"
}`}
                            </pre>
                        </div>

                        <h3>PUT vs PATCH — The Update Dilemma</h3>
                        <p>
                            This confuses everyone. Here's the difference:
                        </p>
                        <p>
                            <strong>PUT:</strong> Replace the <em>entire</em> resource. If you omit a field, it gets deleted/reset.<br />
                            <strong>PATCH:</strong> Update only the fields you send. Other fields remain unchanged.
                        </p>
                        <div className="code-block">
                            <pre>
                                {`// Current state of TM-123:
{
  "title": "Fix login bug",
  "description": "Users can't log in",
  "status": "in_progress"
}

// PUT - Replaces everything
PUT /issues/TM-123
{
  "title": "Fix login bug",
  "status": "done"
}
// Result: description is now null/missing!

// PATCH - Updates only what you send (BETTER)
PATCH /issues/TM-123
{
  "status": "done"
}
// Result: title and description unchanged, only status updated`}
                            </pre>
                            <div className="code-label">put_vs_patch.http</div>
                        </div>
                        <p><strong>Rule of thumb:</strong> Use PATCH for almost all updates in modern APIs.</p>

                        <h3>DELETE — Remove Resources</h3>
                        <p>
                            <strong>Idempotent:</strong> Deleting twice is the same as deleting once (both result in "resource not found").
                        </p>
                        <div className="code-block">
                            <pre>
                                {`DELETE /issues/TM-123

// Response: 204 No Content (success, no body needed)
// OR: 200 OK with a confirmation message`}
                            </pre>
                        </div>
                        <p>
                            <strong>Soft deletes:</strong> In production, you often don't actually delete data. Instead:
                        </p>
                        <div className="code-block">
                            <pre>
                                {`// "Delete" by archiving
PATCH /issues/TM-123
{ "status": "archived" }

// Or use a dedicated endpoint
POST /issues/TM-123/archive`}
                            </pre>
                        </div>
                    </section>

                    <section id="nesting">
                        <h2>4. Handling Hierarchy</h2>
                        <p>
                            In "TaskMaster", issues belong to projects. How do we reflect this?
                        </p>
                        <p><strong>Sub-resources</strong> are great for scoping:</p>
                        <div className="code-block">
                            <pre>
                                {`GET /projects/proj_abc1/issues
// Returns issues specifically for that project`}
                            </pre>
                        </div>
                        <p>
                            However, keep nesting shallow.
                            <strong>Avoid:</strong> <code>/workspaces/ws_1/projects/proj_1/issues/TM-12/comments/cmt_55</code>.
                        </p>
                        <p>
                            Once a resource has a unique ID (like <code>TM-12</code>), access it directly at the root:
                            <code>/issues/TM-12/comments</code>.
                        </p>
                    </section>

                    <section id="hateoas">
                        <h2>4. HATEOAS — Self-Documenting APIs</h2>
                        <h3>What is HATEOAS?</h3>
                        <p>
                            <strong>Hypermedia as the Engine of Application State</strong> (HATEOAS) is a constraint of REST that makes APIs self-discoverable.
                            Instead of hardcoding URLs in your client, the server tells you what actions are available.
                        </p>
                        <p><strong>Real-world analogy:</strong> Think of a website. You don't memorize URLs — you click links. HATEOAS brings this to APIs.</p>

                        <h3>Practical Example</h3>
                        <div className="code-block">
                            <pre>
                                {`// GET /issues/TM-12
{
  "id": "TM-12",
  "status": "in_progress",
  "title": "Fix login bug",
  "assignee": "user_456",
  
  // These links tell the client what they can do
  "_links": {
    "self": { "href": "/issues/TM-12" },
    "comments": { "href": "/issues/TM-12/comments" },
    "assignee": { "href": "/users/user_456" },
    
    // Only present because status is 'in_progress'
    "resolve": { 
      "href": "/issues/TM-12/transitions/resolve",
      "method": "POST"
    },
    "reopen": null  // Not allowed in this state
  }
}`}
                            </pre>
                            <div className="code-label">hateoas_example.json</div>
                        </div>
                        <p>
                            <strong>Benefits:</strong>
                        </p>
                        <ul>
                            <li>Client doesn't need to know URL structure</li>
                            <li>You can change URLs without breaking clients</li>
                            <li>Permissions are built-in (no link = no permission)</li>
                            <li>UI can be driven by available actions</li>
                        </ul>
                    </section>

                    <section id="filtering">
                        <h2>5. Advanced Querying</h2>
                        <h3>The Problem with Simple Filtering</h3>
                        <p>
                            Simple filters like <code>?status=open</code> work for basic cases, but real applications need:
                        </p>
                        <ul>
                            <li>Range queries ("issues created in the last 7 days")</li>
                            <li>Multiple filters ("high priority AND assigned to me")</li>
                            <li>Sorting by multiple fields</li>
                            <li>Pagination for large datasets</li>
                        </ul>

                        <h3>Filter Operators</h3>
                        <p>Use bracket notation to specify operators:</p>
                        <div className="code-block">
                            <pre>
                                {`// Greater than or equal
GET /issues?priority[gte]=high

// Less than (date)
GET /issues?created_at[lt]=2026-01-01

// In a set
GET /issues?status[in]=open,in_progress

// Contains (for text search)
GET /issues?title[contains]=login`}
                            </pre>
                        </div>

                        <h3>Sparse Fieldsets (Solving Over-fetching)</h3>
                        <p>
                            Mobile clients don't need all fields. Let them specify:
                        </p>
                        <div className="code-block">
                            <pre>
                                {`// Only return id, title, and status
GET /issues?fields=id,title,status

// Response is smaller and faster
{
  "data": [
    { "id": "TM-12", "title": "Fix bug", "status": "open" },
    { "id": "TM-13", "title": "Add feature", "status": "done" }
  ]
}`}
                            </pre>
                        </div>

                        <h3>Sorting</h3>
                        <div className="code-block">
                            <pre>
                                {`// Sort by priority (descending), then created date (ascending)
GET /issues?sort=-priority,created_at

// The minus sign (-) means descending`}
                            </pre>
                        </div>

                        <h3>Pagination Strategies</h3>
                        <p><strong>Offset-based (simple but has issues):</strong></p>
                        <div className="code-block">
                            <pre>
                                {`GET /issues?page=2&limit=20

// Problem: If items are added/deleted, you might skip or duplicate results`}
                            </pre>
                        </div>
                        <p><strong>Cursor-based (better for real-time data):</strong></p>
                        <div className="code-block">
                            <pre>
                                {`GET /issues?cursor=eyJpZCI6IlRNLTEyMyJ9&limit=20

// Response includes next cursor
{
  "data": [...],
  "pagination": {
    "next_cursor": "eyJpZCI6IlRNLTE0MyJ9",
    "has_more": true
  }
}`}
                            </pre>
                        </div>
                    </section>

                    <section id="rate-limiting">
                        <h2>6. Rate Limiting</h2>
                        <h3>Why Rate Limit?</h3>
                        <p>
                            Without rate limiting, a single misbehaving client (or attacker) can bring down your entire API.
                            Rate limits protect your infrastructure and ensure fair usage.
                        </p>

                        <h3>Communicating Limits via Headers</h3>
                        <p>Use standard headers to tell clients their usage:</p>
                        <div className="code-block">
                            <pre>
                                {`// Every successful response includes:
HTTP/1.1 200 OK
X-RateLimit-Limit: 1000        // Max requests per hour
X-RateLimit-Remaining: 847     // How many left
X-RateLimit-Reset: 1640995200  // Unix timestamp when limit resets

// When limit exceeded:
HTTP/1.1 429 Too Many Requests
Retry-After: 3600  // Seconds until reset

{
  "error": {
    "code": "rate_limit_exceeded",
    "message": "You've exceeded the rate limit. Try again in 1 hour."
  }
}`}
                            </pre>
                            <div className="code-label">rate_limit_headers.http</div>
                        </div>

                        <h3>Implementation Strategies</h3>
                        <p><strong>Fixed Window:</strong> Simple but has edge case issues</p>
                        <div className="code-block">
                            <pre>
                                {`// 1000 requests per hour
// Window: 12:00-13:00
// User makes 1000 requests at 12:59
// Then 1000 more at 13:01
// = 2000 requests in 2 minutes! ⚠️`}
                            </pre>
                        </div>
                        <p><strong>Sliding Window:</strong> More accurate, uses Redis</p>
                        <div className="code-block">
                            <pre>
                                {`// Pseudo-code
const key = \`ratelimit:\${userId}\`;
const now = Date.now();
const windowStart = now - 3600000; // 1 hour ago

// Remove old requests
await redis.zremrangebyscore(key, 0, windowStart);

// Count requests in window
const count = await redis.zcard(key);

if (count >= 1000) {
  throw new RateLimitError();
}

// Add this request
await redis.zadd(key, now, \`req_\${now}\`);`}
                            </pre>
                            <div className="code-label">sliding_window.js</div>
                        </div>
                    </section>

                    <section id="idempotency">
                        <h2>7. Idempotency — Handling Network Failures</h2>
                        <h3>The Problem</h3>
                        <p>
                            Imagine this scenario:
                        </p>
                        <ol>
                            <li>Client sends <code>POST /issues</code> to create a critical bug report</li>
                            <li>Server processes it and creates issue TM-456</li>
                            <li>Network times out before client receives response</li>
                            <li>Client retries (because it doesn't know if it worked)</li>
                            <li>Server creates <strong>duplicate</strong> issue TM-457</li>
                        </ol>
                        <p>This is catastrophic for payments, orders, or any non-repeatable action.</p>

                        <h3>The Solution: Idempotency Keys</h3>
                        <p>
                            The client generates a unique key (UUID) and sends it with the request.
                            The server caches the response for that key.
                        </p>
                        <div className="code-block">
                            <pre>
                                {`// Client generates UUID once
const idempotencyKey = "a7f3c8e9-1234-5678-9abc-def012345678";

// First attempt
POST /issues
Idempotency-Key: a7f3c8e9-1234-5678-9abc-def012345678

{
  "title": "Critical bug",
  "priority": "high"
}

// Response: 201 Created
// Server stores: key -> response mapping for 24 hours

// Network fails, client retries with SAME key
POST /issues
Idempotency-Key: a7f3c8e9-1234-5678-9abc-def012345678

// Server recognizes key, returns CACHED response
// Response: 201 Created (same as before)
// NO duplicate created! ✅`}
                            </pre>
                            <div className="code-label">idempotency_example.http</div>
                        </div>

                        <h3>Implementation Notes</h3>
                        <ul>
                            <li>Store idempotency keys in Redis with 24-hour TTL</li>
                            <li>Only apply to non-idempotent methods (POST, PATCH in some cases)</li>
                            <li>GET and DELETE are naturally idempotent</li>
                            <li>Return <code>409 Conflict</code> if key is used with different request body</li>
                        </ul>
                    </section>

                    <section id="versioning">
                        <h2>8. API Versioning</h2>
                        <h3>Why Version?</h3>
                        <p>
                            Your API will evolve. You'll want to:
                        </p>
                        <ul>
                            <li>Add new fields (usually safe)</li>
                            <li>Remove fields (BREAKING)</li>
                            <li>Change field types (BREAKING)</li>
                            <li>Change behavior (potentially BREAKING)</li>
                        </ul>
                        <p>Without versioning, you break existing clients. With versioning, old clients keep working.</p>

                        <h3>Strategy 1: URL Versioning (Recommended for Simplicity)</h3>
                        <div className="code-block">
                            <pre>
                                {`// Version in URL path
GET /v1/issues
GET /v2/issues

// Pros:
// - Extremely visible
// - Easy to test (just change URL)
// - Works with all HTTP clients

// Cons:
// - URL changes (but that's the point)`}
                            </pre>
                        </div>

                        <h3>Strategy 2: Header Versioning (Recommended for Complex APIs)</h3>
                        <div className="code-block">
                            <pre>
                                {`// Version in Accept header
GET /issues
Accept: application/vnd.taskmaster.v2+json

// Pros:
// - URLs stay clean
// - More "RESTful" (debatable)
// - Can version individual resources differently

// Cons:
// - Less visible
// - Harder to test manually`}
                            </pre>
                        </div>

                        <h3>Best Practices</h3>
                        <ul>
                            <li><strong>Start with v1</strong> from day one (even if you think you won't need it)</li>
                            <li><strong>Support old versions</strong> for at least 6-12 months</li>
                            <li><strong>Announce deprecation</strong> early via headers: <code>Deprecation: true</code></li>
                            <li><strong>Document changes</strong> in a changelog</li>
                        </ul>
                    </section>

                    <section id="errors">
                        <h2>9. Error Handling</h2>
                        <h3>The Problem with Generic Errors</h3>
                        <p>
                            Don't do this:
                        </p>
                        <div className="code-block">
                            <pre>
                                {`// ❌ Bad error response
HTTP/1.1 500 Internal Server Error
{
  "error": "Something went wrong"
}`}
                            </pre>
                        </div>
                        <p>This tells the client nothing useful. They can't fix it, can't retry intelligently, can't show users a helpful message.</p>

                        <h3>RFC 7807: Problem Details</h3>
                        <p>Use the standard format:</p>
                        <div className="code-block">
                            <pre>
                                {`// ✅ Good error response
HTTP/1.1 422 Unprocessable Entity
Content-Type: application/problem+json

{
  "type": "https://docs.taskmaster.com/errors/validation-error",
  "title": "Validation Failed",
  "status": 422,
  "detail": "The issue cannot be created because required fields are missing.",
  "instance": "/issues",
  "errors": [
    {
      "field": "title",
      "code": "required",
      "message": "Title is required"
    },
    {
      "field": "dueDate",
      "code": "invalid_date",
      "message": "Due date must be in the future"
    }
  ]
}`}
                            </pre>
                            <div className="code-label">error_response.json</div>
                        </div>

                        <h3>Common Status Codes</h3>
                        <ul>
                            <li><strong>400 Bad Request:</strong> Malformed JSON, invalid syntax</li>
                            <li><strong>401 Unauthorized:</strong> Missing or invalid authentication</li>
                            <li><strong>403 Forbidden:</strong> Authenticated but lacks permission</li>
                            <li><strong>404 Not Found:</strong> Resource doesn't exist</li>
                            <li><strong>422 Unprocessable Entity:</strong> Valid format but business logic error</li>
                            <li><strong>429 Too Many Requests:</strong> Rate limit exceeded</li>
                            <li><strong>500 Internal Server Error:</strong> Unexpected server error (log it!)</li>
                            <li><strong>503 Service Unavailable:</strong> Temporary outage, include Retry-After header</li>
                        </ul>

                        <h3>Error Codes for Programmatic Handling</h3>
                        <p>Include machine-readable codes so clients can handle specific errors:</p>
                        <div className="code-block">
                            <pre>
                                {`// Client can check error.code
if (error.code === 'duplicate_email') {
  showMessage('This email is already registered');
} else if (error.code === 'weak_password') {
  showPasswordStrengthMeter();
}`}
                            </pre>
                        </div>
                    </section>
                </>
            )
        },
    };

    const article = articleContent[id];

    useEffect(() => {
        const contentElement = contentRef.current;
        if (!contentElement) return;

        const handleScroll = () => {
            // Active section detection
            const sections = document.querySelectorAll('section[id]');
            let current = '';
            sections.forEach(section => {
                // Since .docs-content is relative, offsetTop is relative to it
                const sectionTop = section.offsetTop;
                // Add a small buffer for better UX
                if (contentElement.scrollTop >= sectionTop - 150) {
                    current = section.getAttribute('id');
                }
            });
            if (current) {
                setActiveSection(current);
            }
        };

        contentElement.addEventListener('scroll', handleScroll);
        // Trigger once to set initial state
        handleScroll();

        return () => contentElement.removeEventListener('scroll', handleScroll);
    }, [id]); // Re-run if ID changes

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        const contentElement = contentRef.current;
        if (element && contentElement) {
            // Calculate position relative to the scroll container
            const topPos = element.offsetTop - 40; // 40px padding/buffer
            contentElement.scrollTo({
                top: topPos,
                behavior: 'smooth'
            });
        }
    };

    const handleBack = (e) => {
        e.preventDefault();
        if (window.history.length > 2) {
            navigate(-1);
        } else {
            navigate('/');
        }
    };

    // List of known article IDs (from sidebar and Hero carousel)
    const knownArticles = [
        'building-scalable-apis-with-node-js',
        'microservices-with-docker',
        'microservices-docker-k8s', // From Hero carousel
        'professional-rest-api-design',
        'advanced-react-patterns',
        'cloud-native-architecture' // From Hero carousel
    ];

    // If article ID is not in the known list, show 404
    if (!knownArticles.includes(id)) {
        return <NotFound />;
    }

    // If article is known but content not ready, show Coming Soon
    if (knownArticles.includes(id) && !article) {
        return (
            <ComingSoon
                title="Coming Soon"
                subtitle="This article is currently being written. Check back soon for insightful content!"
            />
        );
    }

    return (
        <div className="article-page-wrapper">
            {/* Animated Back Button */}
            <a href="/" onClick={handleBack} className="floating-back-btn" aria-label="Go Back">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
            </a>

            <div className="docs-layout">
                {/* Left Sidebar - Navigation */}
                <aside className="docs-sidebar-left">
                    <div className="sidebar-content">
                        <h3>Articles</h3>
                        <ul className="sidebar-nav">
                            {[
                                { id: 'building-scalable-apis-with-node-js', title: 'Building Scalable APIs' },
                                { id: 'microservices-with-docker', title: 'Microservices with Docker' },
                                { id: 'professional-rest-api-design', title: 'Professional REST Design' },
                                { id: 'advanced-react-patterns', title: 'Advanced React Patterns' }
                            ].map((item) => (
                                <li key={item.id} className={id === item.id ? 'active' : ''}>
                                    <Link to={`/article/${item.id}`} className="sidebar-link">
                                        <span className="nav-icon">📄</span>
                                        {item.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <div className="sidebar-divider"></div>

                        <h3>Resources</h3>
                        <ul className="sidebar-nav">
                            {id === 'professional-rest-api-design' ? (
                                <>
                                    <li><a href="https://restfulapi.net/" target="_blank" rel="noreferrer">REST API Tutorial ↗</a></li>
                                    <li><a href="https://tools.ietf.org/html/rfc7807" target="_blank" rel="noreferrer">RFC 7807 (Problem Details) ↗</a></li>
                                    <li><a href="https://swagger.io/specification/" target="_blank" rel="noreferrer">OpenAPI Specification ↗</a></li>
                                </>
                            ) : (
                                <>
                                    <li><a href="https://nodejs.org" target="_blank" rel="noreferrer">Node.js Docs ↗</a></li>
                                    <li><a href="https://redis.io" target="_blank" rel="noreferrer">Redis Docs ↗</a></li>
                                </>
                            )}
                        </ul>
                    </div>
                </aside>

                {/* Center - Main Content */}
                <main className="docs-content" ref={contentRef}>
                    <header className="content-header">
                        <div className="article-tags">
                            {article.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                        </div>
                        <h1 className="article-title">{article.title}</h1>
                        <p className="article-subtitle">{article.subtitle}</p>

                        <div className="article-meta">
                            <div className="author-info">
                                <div className="author-avatar">{article.author[0]}</div>
                                <div>
                                    <span className="author-name">{article.author}</span>
                                    <span className="publish-date">{article.date}</span>
                                </div>
                            </div>
                            <span className="read-time">{article.readTime}</span>
                        </div>
                    </header>

                    <div className="article-body">
                        {article.content}
                    </div>

                    <footer className="article-footer">
                        <div className="interaction-bar">
                            <button
                                className={`like-button ${liked ? 'liked' : ''}`}
                                onClick={() => setLiked(!liked)}
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill={liked ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
                                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                                </svg>
                                <span>{liked ? 'Helpful' : 'Mark as Helpful'}</span>
                            </button>
                        </div>
                    </footer>
                </main>

                {/* Right Sidebar - Table of Contents */}
                <aside className="docs-sidebar-right">
                    <div className="toc-container">
                        <h3>On this page</h3>
                        <ul className="toc-list">
                            {article.toc.map(item => (
                                <li key={item.id} className={activeSection === item.id ? 'active' : ''}>
                                    <a
                                        href={`#${item.id}`}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            scrollToSection(item.id);
                                        }}
                                    >
                                        {item.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </aside>
            </div>
        </div >
    );
};

export default ArticlePage;
