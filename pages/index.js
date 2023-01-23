import Link from "next/link"
import { useEffect, useState } from "react"

const App = () => {
	const [avos, setAvos] = useState([])

	useEffect(() => {
		const controller = new AbortController()

		fetch("/api/avo", { signal: controller.signal })
			.then(res => {
				if (res.ok) return res.json()
				throw new Error()
			})
			.then(data => {
				setAvos(data)
			})
			.catch(err => {
				// TODO: Handle error
				console.log(err)
			})

		return () => controller.abort()
	}, [])

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