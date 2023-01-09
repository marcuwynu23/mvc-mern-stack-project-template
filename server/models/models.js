/*
 *   Copyright (c) 2022 
 *   All rights reserved.
 */

import mongoose from "mongoose";
let Account = mongoose.model("Account", mongoose.Schema({
	name: String,
	age: Number
}))


let models = {
	Account
}

export default models;
