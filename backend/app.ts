import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors'
import bodyParser from "body-parser";
import { Request } from "express"
// Routes
import IndexRoutes from './src/routes/index.routes';

export class App{

    private app: Application;

    constructor(private port: number | string){
        this.port = port
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
    }

    settings(){
        this.app.set('port', this.port || process.env.PORT || 4000);       
    }

    middlewares(){
        this.app.use(function(req, res, next) {
            res.header("Access-Control-Allow-Origin", '*');
            res.header("Access-Control-Allow-Credentials", '*');
            res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
            res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
            next();
        });

        this.app.use(morgan('dev'));
        this.app.use(bodyParser.json({ limit: '50mb' }));
        this.app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
    }
    
    routes(){
        this.app.use(IndexRoutes);
        this.app.use('/', IndexRoutes);
    }

    async listen(){
        await this.app.listen(this.app.get('port'));
        console.log(`Server on port ${this.port} :D`);
    }

}