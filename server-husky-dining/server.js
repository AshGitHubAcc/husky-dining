import express from 'express'

// endpoints, snakecases for endpoints
import endpoint_index from './endpoints/index.js'
import endpoint_places from './endpoints/places.js'

const app = express()
const PORT = 4000

endpoint_index(app)
endpoint_places(app)




app.listen(PORT, ()=> {
    console.log(`Server Running: http://localhost:${PORT}`)
})