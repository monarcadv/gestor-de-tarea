const Express = require('express')
// 
const { data } = require('../database/data');
const routers = Express.Router()
const apps = Express()
// 
// get data with the id

routers.get('/:id', (req: any, res: any) => {
    const id = req.params.id
    const app = data.filter((app: any) => app.id === parseInt(id))
    if (!app) {
        return res.status(404).send('Not Found')
    }
    res.json(app)
})
// post data in the database

routers.post('/', (req: any, res: any) => {
    const app = {
        id: data.length + 1,
        ...req.body
    }
    data.push(app)
    res.status(201).send(app)
})
// put data in the database

routers.put('/:id', (req: any, res: any) => {
    const id = parseInt(req.params.id)
    const index = data.findIndex((datas: any) => datas.id == id)
    if (index === -1) {
        return res.status(404).send('Not Found')
    }
    const datput = {
        id: id,
       ...req.body
    }
    data[index] = datput
    res.json(data)
})



// delete data in the database

routers.delete('/:id', (req: any, res: any) => {
    const id = parseInt(req.params.id)
    const index = data.findIndex((datas: any) => datas.id == id)
    if (index === -1) {

        res.status(201).json('Invalid')
    }
    data.splice(index, 1)
})



// exports data
module.exports = routers