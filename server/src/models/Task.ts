import mongoose, { model, Schema } from 'mongoose'

const taskSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },
        description: {
            type: String,
            required: true,
            trim: true,
        },
        done: {
            type: Boolean,
            default: false,
            required: true,
        },
        archived: {
            type: Boolean,
            default: false,
            required: true,
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
    },
    { versionKey: false },
)

export default model('Task', taskSchema)
