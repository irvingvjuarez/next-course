import { NextApiRequest, NextApiResponse } from "next"
import Database from "../../../database/db"

const database = new Database()

export default async function(_req: NextApiRequest, res: NextApiResponse) {
	const allItems = await database.getAll()

	res.statusCode = 200
	res.send(JSON.stringify(allItems))
}