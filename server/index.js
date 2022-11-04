import express from "express";
import cors from 'cors'
import bodyParser from "body-parser";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoutes from "./routes/userRoutes.js";
import appointmentRoutes from "./routes/appointmentRoutes.js";


// Routes

const app = express();
app.use(cors())



// Middleware
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

dotenv.config();

mongoose.connect(process.env.MONGO_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
.then(() =>
    app.listen(process.env.PORT, () =>
      console.log(`Listening at ${process.env.PORT}`)
    )
)
.catch((error) => console.log(error));



// usage of routes
app.use('/api/users', userRoutes);
app.use('/api/appointments', appointmentRoutes);