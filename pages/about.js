import { useRouter } from "next/navigation"

const About = () => {
	const router = useRouter()
	const goBack = () => router.back()

	return (
		<div>
			<h2>I am the About page</h2>
			<ul>
				<li>
					<button onClick={goBack}>
						Return to home
					</button>
				</li>
			</ul>
		</div>
	)
}

export default About