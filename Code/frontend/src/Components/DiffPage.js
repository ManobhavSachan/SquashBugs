import React, { useEffect, useState } from 'react'
import axios from "axios"

function DiffPage() {
	const [diff, setdiff] = useState([]);

	const fetchdiff = async () => {
		const data = await axios.get("/api/diff");
		console.log(data.data);
		setdiff(data.data);
	};

	useEffect(() => {
		fetchdiff();
	}, []);

	return (
		<div>
			<ul>
				{" "}
				{diff.map((item) => {
					return <li key={item._id}>{item.chatName}</li>;
				})}
			</ul>
		</div>
	);
}

export default DiffPage
