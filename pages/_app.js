import Layout from "../containers/Layout"
import "../style.css"

const App = ({ Component, pageProps }) => {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	)
}

export default App