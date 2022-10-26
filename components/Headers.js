import Link from 'next/link';

export default function Header() {
	return (
		<section className="flex">
			<Link href="/">
				<span className="text-xl">Home</span>
			</Link>
			<Link href="/about">
				<span className="text-xl">About</span>
			</Link>
		</section>
	);
}
