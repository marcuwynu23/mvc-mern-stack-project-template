/*
 *   Copyright (c) 2022 
 *   All rights reserved.
 */

import models from "../models/models.js";


function createAccount() {
	return new Promise((resolve, reject) => {
		let account = models.Account({
			name: "Mark Wayne B. Menorca",
			age: 23
		})

		account.save((err) => {
			if (!err) {
				resolve("done. saved.")
			} else {
				reject("error.", err)
			}
		})
	})
}


function getAllAccounts() {
	return new Promise((resolve, reject) => {
		let accounts = models.Account.find();
		resolve(accounts)
	})
}


export default {
	createAccount,
	getAllAccounts
}