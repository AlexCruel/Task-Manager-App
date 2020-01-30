require('../src/db/mongoose')
const User = require('../src/models/user')

User.findByIdAndUpdate('5e303c5f12b4ac2b78029e14', { age: 1 }).then((user) => {
    console.log(user)
    return User.countDocuments({ age: 1 })
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})