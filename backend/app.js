import express from 'express'
import bodyParser from 'body-parser'
const app = express();
import cors from 'cors'
import {mongoconnection} from './db';
mongoconnection();
app.use(cors({origin:"*"}));
import router from "./router/Account"

app.use(bodyParser.urlencoded(
    {
        extended:true
    }));
app.use(bodyParser.json());

app.use("/user",router)


export default app;