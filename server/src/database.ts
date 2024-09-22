import { connect } from 'mongoose'
const password = process.env.DB_PASSWORD
const dbName = process.env.DB_NAME
const dbUser = process.env.DB_USER

const url = `mongodb+srv://${dbUser}:${password}@cluster0.2an7hii.mongodb.net/${dbName}?retryWrites=true&w=majority`
export const startConnection = async () => {
    try {
        await connect(url)
        console.log('db connected OK')
    } catch (error) {
        console.log('DB error', error)
    }
}
