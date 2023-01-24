import Layout from "../containers/Layout"
import "../style.css"

export function reportWebVitals(metric) {
	// console.log(metric)
	// TODO: Doing something with these metrics
}

const App = ({ Component, pageProps }) => {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	)
}

export default App