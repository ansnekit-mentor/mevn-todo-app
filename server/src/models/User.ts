import { model, Schema } from 'mongoose'

const userSchema = new Schema(
    {
        email: {
            type: String,
            required: true,
            trim: true,
        },
        password: {
            type: String,
            required: true,
        },
        nickname: {
            type: String,
            required: true,
        },
    },
    { versionKey: false },
)

export default model('User', userSchema)
