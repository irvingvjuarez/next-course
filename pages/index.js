import Link from "next/link"

export const getServerSideProps = async () => {
	const res = await fetch("http://localhost:3000/api/avo")
	const avos = await res.json()

	return {
		props: { avos }
	}
}

const App = ({ avos }) => {

	return (
		<div>
			<h2>Avocados Home</h2>
			<ul className="name-list">
				{avos.map(avo => (
					<li key={avo.id}>
						<Link href={`/product/${avo.id}`} className="name-link">
							{avo.name}
						</Link>
					</li>
				))}
			</ul>

			<style jsx>{`
				.name-list {
					list-style: none;
					padding: 1rem;
				}
				.name-list > li {
					padding-block: 0.25rem;
				}
				a {
					text-decoration: none;
				}
			`}</style>
		</div>
	)
}

export default App