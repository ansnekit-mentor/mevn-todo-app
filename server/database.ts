import { connect } from 'mongoose'

const url =
    'mongodb+srv://admin:LatYr27C9zFbErUEmsc5@cluster0.n2silvs.mongodb.net/todo?retryWrites=true&w=majority'
export const startConnection = async () => {
    try {
        await connect(url)
        console.log('db connected OK')
    } catch (error) {
        console.log(error)
    }
}
