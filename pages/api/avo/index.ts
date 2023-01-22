import Database from "../../../database/db"

const database = new Database()

export default async function(_req, res) {
	const allItems = await database.getAll()

	res.status = 200
	res.send(JSON.stringify(allItems))
}