import { useRouter } from "next/router"
import { useEffect, useState } from "react"

const Product = () => {
	const { query: { id } } = useRouter()
	const [avo, setAvo] = useState(null)

	useEffect(() => {
		const controller = new AbortController()

		fetch(`/api/avo/${id}`, { signal: controller.signal })
			.then(res => {
				if (res.ok) return res.json()
				throw new Error()
			})
			.then(data => {
				setAvo(data)
			})
			.catch(err => {
				// TODO: Handle error
				console.log(err)
				setAvo(false)
			})

		return () => controller.abort()
	}, [])

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