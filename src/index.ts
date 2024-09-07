import express from 'express';
import router from './interfaces/http/router';


const app = express();
app.use(express.json());
const port = 3000; 

app.use(router)

app.listen(port, () => {
  console.log(`El servidor está en ejecución en http://localhost:${port}`);
});
