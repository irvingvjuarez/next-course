import Link from "next/link"

const Products = () => {
	const productsArr = new Array(10).fill(0).map(_item => Math.random().toString(6))

	return (
		<div>
			<ul>
				{productsArr.map(item => (
					<li key={item}>
						<Link href={`/product/${item}`}>
							{item}
						</Link>
					</li>
				))}
			</ul>
		</div>
	)
}

export default Products