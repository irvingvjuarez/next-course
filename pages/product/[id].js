import data from "@/database/data"

export const getStaticPaths = async () => {
	const paths = Object.values(data).map(item => ({
		params: {id: item.id}
	}))

	return {
		paths,
		fallback: false
	}
}

export const getStaticProps = async ({ params }) => {
	const res = await fetch(`http://localhost:3000/api/avo/${params.id}`)
	const avo = await res.json()

	return {
		props: { avo }
	}
}

const Product = ({ avo }) => {
	if (avo === null) {
		return <span>Loading...</span>
	}

	return (
		<div>
			{avo === false ? (
				<span>Item not found. Error 404</span>
			) : (
				<div>
					<h2>{avo.name}</h2>
					<img src={avo.image} alt={avo.name} />
				</div>
			)}
		</div>
	)
}

export default Product