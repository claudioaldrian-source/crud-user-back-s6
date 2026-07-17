import express from 'express'
import './config/env.js'
/* import connectDB from './config/db.js' */
import  connectDB  from './config/db.js'
import userRoutes from './routes/user.routes.js'
import authRoutes from './routes/user.routes.js';

const app = express()
app.set("trust proxy", 1);
app.use

app.use(express.json())

connectDB()

app.use(userRoutes)
app.use("/auth", authRoutes);

app.listen(process.env.PORT, () => {

  console.log(`🚀 Servidor corriendo en puerto ${process.env.PORT}`)

})