import Link from "next/link"

const App = () => {
	return (
		<div>
			<h2>Hi, I am the page root of this Next.js App</h2>
			<ul>
				<li>
					<Link href="/about">
						About
					</Link>
				</li>
			</ul>
		</div>
	)
}

export default App