import express from 'express';
import Hello from "./hello.js"
import Lab5 from "./lab5.js";
import createRoutes from './courses/routes.js';
import cors from "cors"
import bodyParser from "body-parser"
import moduleRoutes from './modules/routes.js';
import assignmentRoutes from './assignments/routes.js';
const app = express();
app.use(cors())
app.use(bodyParser.json())
Hello(app);
Lab5(app); 
createRoutes(app)
moduleRoutes(app)
assignmentRoutes(app)
app.use(express.json());
app.listen(4000);