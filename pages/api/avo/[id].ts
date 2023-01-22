import Database from "../../../database/db"

const database = new Database()

export default async function(req, res) {
	try {
		const item = await database.getById(req.query.id)
		res.status = 200
		res.send(item)
	} catch(err) {
		res.status = 404
		res.send(err.message)
	}
}