import { connect } from 'mongoose'

export const startConnection = async () => {
    try {
        await connect(
            'mongodb+srv://admin:LatYr27C9zFbErUEmsc5@cluster0.n2silvs.mongodb.net/?retryWrites=true&w=majority',
        )
        console.log('db connected OK')
    } catch (error) {
        console.log(error)
    }
}
