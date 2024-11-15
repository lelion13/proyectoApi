import express from 'express'
import bodyParser from 'body-parser'
import { PORT } from './config.js'
import { connectDB } from './db.js'
import userRoute from './routes/userRoute.js'

const app = express()
//middleware

//parsea a json las solicitudes
app.use(bodyParser.json())

//parsea cuerpo de la solicitud para que pueda ser leida
app.use(bodyParser.urlencoded({extended: true}))

//Coneccion a la base
connectDB();

//Rutas
app.use("/api/user",userRoute);

app.listen(PORT, () => {
    console.log(`El proyecto esta corriendo en el puerto ${PORT}`)
})