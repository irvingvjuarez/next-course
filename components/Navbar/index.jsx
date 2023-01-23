import Link from "next/link"
import style from "../../style.module.css"

const Navbar = () => {
	return (
		<header className={style.navbar}>
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