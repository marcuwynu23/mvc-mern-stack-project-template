/*
 *   Copyright (c) 2022 
 *   All rights reserved.
 */

import dotenv from "dotenv";
import express from 'express';
import morgan from "morgan";
import cors from 'cors';
import mongooseDBConnect from "./db/database.js";
import { homeroutes, aboutroutes } from './routes/index.js';


dotenv.config()
const app = express()

// middleware configuration
//cors
app.use(cors())

// json and body
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// logger
app.use(morgan("dev", {}))
//mongoose db connect
mongooseDBConnect()

//Routes
app.use("/", homeroutes)
app.use("/about", aboutroutes)


// Server listen
app.listen(process.env.PORT, process.env.ADDR, (err) => {
	if (!err) {
		// log running address and port of the server
		console.log(`Running on Port: ${process.env.ADDR}:${process.env.PORT}`)
	}
})

