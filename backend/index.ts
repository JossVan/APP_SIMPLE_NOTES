import { App } from './app';
import dotenv from 'dotenv';

async function main(){
    dotenv.config();
    const port = process.env.PORT || 4000;
    const app = new App(port);
    await app.listen();
}

main();