import Link from "next/link"

const Navbar = () => {
	return (
		<header>
			<nav>
				<ul>
					<li>
						<Link href="/">
							Home
						</Link>
					</li>
					<li>
						<Link href="/about">
							About
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default Navbar