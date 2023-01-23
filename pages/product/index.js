import Link from "next/link"

const Products = () => {
	const productsArr = new Array(10).fill(0).map(_item => Math.random().toString(6))

	return (
		<div>
			<ul className="item-list">
				{productsArr.map(item => (
					<li key={item}>
						<Link href={`/product/${item}`}>
							{item}
						</Link>
					</li>
				))}
			</ul>

			<style jsx>{`
				.item-list {
					list-style: none;
					padding: 1rem;
				}
			`}</style>
		</div>
	)
}

export default Products