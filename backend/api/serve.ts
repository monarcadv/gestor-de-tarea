const express = require('express')
const cors = require('cors')
const app = express()
// 
const Router = require('./router/tareas')
app.use(express.json())
app.use(cors())
app.use('/api/data',Router)
// 

const datas = require('./database/data')
// 
app.get('/', (_rep:any, res:any) => {
    res.json('wolcame to my apis')
});
app.get('/api/data', (_rep:any, res:any) => {
    res.json(datas.data)
});

const port = process.env.PORT || 4040

app.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}`)
});