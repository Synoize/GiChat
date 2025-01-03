require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

const connectDB = require('./db/db');
const PORT = process.env.PORT || 5000;
const errorMiddleware = require('./middlewares/error-middlewares');
const authRoute = require('./router/auth-router');
const chatRoute = require('./router/chat-router');
const adminRoute = require('./router/admin-router');

// const clorsOption = {
//     origin: "http://localhost:5173",
//     methods: "GET, POST, PUT, DELETE, PATCH, HEAD", 
//     credential: true,
// };
 
app.use(cors()); 
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/form", chatRoute);

app.use("/api/admin", adminRoute); // let's define admin route

app.use(errorMiddleware); 

const start = async () => {
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log(`server is listen on PORT : ${PORT}`);
        });
    } catch (error) {
        console.log(error);
    }
};
start();