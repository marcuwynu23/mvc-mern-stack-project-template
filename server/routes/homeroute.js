/*
 *   Copyright (c) 2022 
 *   All rights reserved.
 */

import express from 'express';
import controller from "../controllers/controller.js";


const homeroutes = express.Router()
homeroutes.get('/', controller.GET_HOME_CONTROLLER)
homeroutes.post("/",controller.POST_HOME_CONTROLLER)
	
export default homeroutes;