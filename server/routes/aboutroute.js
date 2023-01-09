import express from 'express';

import controller from "../controllers/controller.js";
const aboutroutes = express.Router()

aboutroutes.get("/",controller.GET_ABOUT_CONTROLLER)



export default aboutroutes;