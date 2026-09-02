const express = require('express');
const dotenv =  require('dotenv');
dotenv.config();
const connectToDb = require('./database/config');
const app = express();
const userRoutes = require('./routes/user.route');
const cookieparser = require('cookie-parser');
const msgRoutes = require("./routes/message.route");
const cors = require('cors');


app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieparser());


const corsOption = {
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
    credentials: true
};
app.use(cors(corsOption)); 

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Chat app API is running' });
});

app.use("/api/users" , userRoutes);
app.use("/api/msg" , msgRoutes);


const port = process.env.PORT ;

app.listen(port , ()=>{
    connectToDb();
    console.log(`server is running on port ${port}`);
})