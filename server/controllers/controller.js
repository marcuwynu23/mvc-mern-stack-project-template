/*
 *   Copyright (c) 2022 
 *   All rights reserved.
 */

import dbqueries from "../db/dbqueries.js";

const GET_HOME_CONTROLLER = (req, res) => {
	dbqueries.getAllAccounts()
		.then(result => {
			console.log(result)
			res.json({
				status: "goods",
				data: result
			})
		})
		.catch(result => {
			res.json({
				status: "error"
			})
		})
}
const POST_HOME_CONTROLLER = (req, res) => {
	let body = req.body;
	console.log(body)
	res.json(body)
}



const GET_ABOUT_CONTROLLER = (req, res) => {
	res.json({
		content: "Hello About Page."
	})
}


export default {
	GET_HOME_CONTROLLER,
	POST_HOME_CONTROLLER,
	GET_ABOUT_CONTROLLER
}