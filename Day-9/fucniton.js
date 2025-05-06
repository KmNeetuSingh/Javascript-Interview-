const express = require ('express')
const app = express()

app.get("/",(req, res) => {
    console.log("App sis runng")
})
app.post("/",(req,res) => {
    const userData = req.body
    res.json({
        message :'Data Recieved',
        data : userData
    })
})
app.listen(3000, () => {
    console.log("Server is runing")
})