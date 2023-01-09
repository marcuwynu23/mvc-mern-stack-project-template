/*
 *   Copyright (c) 2023 
 *   All rights reserved.
 */
import { useState, useEffect } from "react";
import fetchAPI from '../api/fetchData';


export default function Main() {
	let [status, setStatus] = useState("");
	let [data, setData] = useState([])

	useEffect(() => {
		fetchAPI.fetchHomepageData()
			.then(res => res.json())
			.then(json => {
				setStatus(json.status)
				setData(json.data)
			})
			.catch(err => console.log(err))
	}, [])
	return <div>
		<h1>Home</h1>
		<p>{status}</p>
	</div>
}