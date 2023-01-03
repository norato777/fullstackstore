const UsersSchema = new Schema({
    email:String,
    password:String,
    username:String
})

const UsersModels = mongoose.model("users", UsersSchema)

module.export = UsersModels