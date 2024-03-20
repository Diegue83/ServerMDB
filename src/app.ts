import express, {Application} from 'express'
import cors from 'cors';
import bodyParser from 'body-parser';
import morgan from 'morgan'
import db from './config/mongo';
import eventoRoutes from './routes/evento-routes';
import personaRoutes from './routes/persona-routes';
import areaInteresRoutes from './routes/area-interes-routes';
import ciudadRoutes from './routes/ciudad-routes';
import cargoRoutes from './routes/cargo-routes';

class Server{
  private app:Application

  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }


  config(): void{
      db().then(()=>{
          console.log("conexion exitosa")
      })
      // configuración del puerto para el servidor
      this.app.set("port", 3000);
      // muestra las peticiones en consola
      this.app.use(morgan('dev'));
      // puertos de conexión de la API
      this.app.use(cors());
      // solo se permiten peticiones en formato JSON
      this.app.use(bodyParser.json());
      this.app.use(bodyParser.urlencoded({extended: false,}))
  }

  routes(){
    this.app.use("/",eventoRoutes);
    this.app.use("/persona",personaRoutes);
    this.app.use("/area",areaInteresRoutes);
    this.app.use("/ciudad",ciudadRoutes);
    this.app.use("/cargo",cargoRoutes);
    // this.app.use("/usuario",usuarioRoutes);
  }

  start():void{
    this.app.listen(this.app.get('port'),()=>{
        console.log('Server on port',this.app.get('port'));
    });
}

}

const server=new Server();
server.start();
