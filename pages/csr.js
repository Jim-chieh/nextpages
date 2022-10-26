import { useEffect, useState } from 'react';

export default function Csr() {
	const [data, setData] = useState();

	useEffect(() => {
		fetch('http://localhost:3000/api/hello')
			.then(res => res.json())
			.then(data => setData(data));
	}, []);

	console.log(data);
	return (
		<div>
			{data?.map(data => (
				<div key={data.id}>
					<img src={data.photo}></img>
					<h1>{data.name}</h1>
				</div>
			))}
		</div>
	);
}
