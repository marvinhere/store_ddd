import express from 'express';
import router from './interfaces/router';
import connectMongo from './infraestructure/persitence/mongodb';


connectMongo();
const app = express();
app.use(express.json())

app.use(router)

const port = 3000; 
app.listen(port, () => {
  console.log(`El servidor está en ejecución en http://localhost:${port}`);
});
