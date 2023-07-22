import 'dotenv/config'
import express from 'express';
import rutasAuth from './routes/auth.routes.js'

const app = express();
app.use(express.json());    //esto es para capturar datos con req.body que hay en autcontroller


app.use("/api", rutasAuth) // rutas o urls de autenticacion

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`servidor iniciado en: http://127.0.0.1:${PORT}`);
})