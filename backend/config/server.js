import  app  from '../app.js';
import dotenv from 'dotenv';
import  connectDatabase  from './database.js';




// Handling UncUGHT Exception: 

process.on("uncaughtException", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to uncaughtException`);
    process.exit(1);
})
// Configuration:
dotenv.config({ path: "config/config.env" });

// Connect database:
connectDatabase();
//Creating a server: 


const PORT = process.env.PORT

const server = app.listen(PORT, () => {
    console.log(`Server is working on http://localhost:${PORT}`)
})

// Unhandled Promises Rejection:

process.on("Unhandled Rejection", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to unhandled Promises Rejection:`);

    server.close(() => {
        process.exit(1);
    });
});