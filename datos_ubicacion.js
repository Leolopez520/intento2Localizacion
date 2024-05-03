const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser'); // En tu código usas express.json(), que es preferido ahora
const app = express();
const PORT = 3000;

// Middleware para parsear JSON
app.use(express.json());

// Configuración de CORS para permitir todos los orígenes
app.use(cors());

app.post('/datos_ubicacion', (req, res) => {
    const { latitud, longitud } = req.body;
    console.log(`Latitud: ${latitud}, Longitud: ${longitud}`);
    
    // Aquí podrías agregar código para guardar los datos en una base de datos, o procesarlos como necesites
    res.send({status: 'Datos recibidos'});
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
