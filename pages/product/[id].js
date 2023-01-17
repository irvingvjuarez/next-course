import { useRouter } from "next/router"

const Product = () => {
	const { query: { id } } = useRouter()

	return (
		<div>
			<h2>
				This product ID is: <span>{id}</span>
			</h2>
		</div>
	)
}

export default Product