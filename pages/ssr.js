// This gets called on every request
export async function getServerSideProps() {
	// Fetch data from external API
	const res = await fetch(`http://localhost:3000/api/5`);
	const data = await res.json();

	// Pass data to the page via props
	return { props: { data } };
}

export default function Ssr({ data }) {
	console.log(data);
	return <div></div>;
}
