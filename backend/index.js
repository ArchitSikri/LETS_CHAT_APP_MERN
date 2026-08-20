const express = require('express');
const dotenv =  require('dotenv');
dotenv.config();
const connectToDb = require('./database/config');
const app = express();
const userRoutes = require('./routes/user.route');
const cookieparser = require('cookie-parser');

app.use(express.json());
app.use(cookieparser());


app.use("/api/users" , userRoutes);


const port = process.env.PORT ;

app.listen(port , ()=>{
    connectToDb();
    console.log(`server is running on port ${port}`);
})