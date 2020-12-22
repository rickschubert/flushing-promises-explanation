const express = require("express")
const cors = require("cors")
const app = express()
const port = 3001

app.use(cors())

app.get("/what-day-is-it", (req, res) => {
    setTimeout(() => {
        res.set("Content-Type", "application/json")
            .set("Accept", "application/json")
            .send(JSON.stringify({"It is": "a beautiful day"}))
    }, 1000)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
