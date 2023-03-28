import dotenv from 'dotenv'

dotenv.config()

export const MONGOOD_URI = process.env.MONGOOD_URI_LOCAL || process.env.MONGOOD_URI
export const PORT = process.env.PORT
