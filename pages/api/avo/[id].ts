import { NextApiRequest, NextApiResponse } from "next"
import Database from "../../../database/db"

const database = new Database()

export default async function(req: NextApiRequest, res: NextApiResponse) {
	try {
		const item = await database.getById(req.query.id as string)
		res.statusCode = 200
		res.send(item)
	} catch(err) {
		res.statusCode = 404
		res.send(err.message)
	}
}