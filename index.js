import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";

const app = express();
app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

const url=`mongodb+srv://kanonchakma1:kanon121chakma@cluster0.u7xm9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const port=process.env.PORT ||5000;

//connect Database
mongoose.connect(url, {
   useNewUrlParser: true,
   useUnifiedTopology: true,
})
.then(() => app.listen(port, ()=>console.log(`Server is running on port ${port}`)))
.catch(err => console.log(err));

// mongoose.set('useFindAndModify', false);