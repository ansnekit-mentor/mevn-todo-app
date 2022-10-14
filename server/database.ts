import { connect } from 'mongoose'

export const startConnection = async () => {
    try {
        // const db = await connect('mongodb://localhost/mevn-database')
        const db = await connect(
            'mongodb+srv://admin:LatYr27C9zFbErUEmsc5@cluster0.n2silvs.mongodb.net/?retryWrites=true&w=majority',
        )
        console.log('db connected ', db.connection.name)
    } catch (error) {
        console.log(error)
    }
}
