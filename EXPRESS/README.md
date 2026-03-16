Node.js & MongoDB Backend
A robust, production-ready backend architecture built with Node.js, Express, and MongoDB. This project demonstrates a clear separation of concerns, secure configuration management, and optimized serverless deployment.

🏗️ Architecture Overview
The application is structured to decouple core server logic from routing and data manipulation. This modular approach ensures the codebase remains maintainable as it scales.

Core Components
server.js: The central entry point. It initializes the Express application, configures middleware (JSON parsing, static file serving), and manages the lifecycle of the MongoDB connection.
databaseRouter.js: A dedicated router module that handles all data-related endpoints, keeping the main server logic clean.
vercel.json: A deployment configuration file that maps API routes and static assets for serverless environments.


----------------COOKIE ROUTER-------------------

```
const express = require('express')
const router = express.Router();

router.post('/saveCookie', async (req, res) => {
    console.log('reaching COOOKIE ROUTEr')
    let data;
    try {
        console.log('cookie router : ', JSON.parse(req.body))
        data = JSON.parse(req.body);
    } catch(e) {
        console.log('cookie router : ', ((req.body)))
        data = (req.body);
    }
    
    // Security-focused cookie implementation
    res.cookie('userEmail', JSON.stringify({userEmail : data['userEmail']}), {
        maxAge : 900000,
        httpOnly : true, // Protects against XSS attacks
        secure : true,   // Requires HTTPS for transmission
        sameSite : 'lax' // Mitigates CSRF risks
    })
    res.status(200).send(JSON.stringify({message :'PREFERENCE SAVED IN COOKIE'}))
})

module.exports = router;
```

----------------DATABASE UPSERTING------------------------------
```
async function saveToDbs(dataJson) {
    try {
        console.log('UPSERTING DATA for:', dataJson.userEmail);

        const updateData = {
            meetings: new Map(Object.entries(dataJson.meetings)),
            work: new Map(Object.entries(dataJson.work)),
            home: new Map(Object.entries(dataJson.home)),
            personal: new Map(Object.entries(dataJson.personal)),
            dump: new Map(Object.entries(dataJson.dump)),
            updatedAt: new Date()
        };

        // This replaces your entire "save, catch 11000, delete, retry" logic
        // It updates if it exists, or creates if it doesn't.
        await UserDataModel.findOneAndUpdate(
            { userEmail: dataJson.userEmail }, 
            { $set: updateData, $setOnInsert: { createdAt: new Date() } },
            { upsert: true, new: true, runValidators: true }
        );

        console.log('UPSERT SUCCESSFUL');
    } catch (e) {
        console.error('DATABASE ERROR:', e);
        throw e; // Throw so your Express route knows it failed
    }
}
```

🛠️ Technical Features
🔐 Security & State Management
HTTP-Only Cookies: Implemented to ensure session data is inaccessible to client-side scripts, providing a strong defense against XSS.

Secure Flags: Uses secure: true and sameSite: 'lax' to ensure cookies are only sent over encrypted connections and protected against cross-site request forgery.

Environment Protection: Used dotenv to manage sensitive configurations like PORT and database connection strings, keeping them out of source control.

🗄️ Database Integration (MongoDB)
Mongoose Integration: Centralized connection logic in the main app to ensure database availability before handling requests.

Modular Data Flow: Isolated database logic into a specific router mounted under the /db namespace to keep the core server clean and specialized.

☁️ Cloud & Deployment
Serverless Bridge: Custom vercel.json maps the Express API to @vercel/node while serving static assets from the /public directory.

Dynamic Routing: Configured regex-based routing (/(.*)) to ensure all requests are correctly routed to the serverless entry point


📊 Key Learnings
Connection Handling: Understanding how to initialize Mongoose connections efficiently within the Express lifecycle.

Deployment Configuration: Learning the nuances of serverless routing via Vercel's build architecture.
