const mongoose = require('mongoose')
const port = 3000;
const connection = mongoose.connect("mongodb+srv://a_seraiche:HG4nxhGNszeqV0dn@cluster0.e2no4ft.mongodb.net/priject_1?retryWrites=true&w=majority")
.then(() => {
    console.log(`exemple at ${port} `)
})
.catch((error) => {
   console.log(error);
})

module.exports = connection