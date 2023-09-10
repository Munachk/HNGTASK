const express = require('express')
const moment = require('moment')
require('dotenv').config()
const PORT = process.env.PORT
const app = express()





app.get('/api?', (req, res) => {
  

    const JSON = {
        slack_name: "Nwolisa Munachi Patrick",
        current_day: moment().format('dddd'),
        utc_time: `${moment().format().slice(0, -6)}Z`,
        track: "backend",
        github_file_url: "https://github.com/Munachk/HNGTASK/blob/main/draft.js",
        github_repo_url: "https://github.com/Munachk/HNGTASK.git",
        status: 200
    }
    const param = req.query
    if (param.slack_name === JSON.slack_name && param.track === JSON.track) {
        res.setHeader('Content-Type', 'application/json').status(200).json(JSON)
        res.end
    }
    else {
        res.status(404).json({ message: 'Bad request! page not found' })
    }

})
app.listen(3030, () => {
    console.log(`Server is listening on port : ${3030}`)
})
