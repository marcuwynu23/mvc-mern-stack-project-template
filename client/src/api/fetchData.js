/*
 *   Copyright (c) 2023 
 *   All rights reserved.
 */



async function fetchHomepageData() {
	return await fetch("http://localhost:9000")
}



export default {
	fetchHomepageData
};