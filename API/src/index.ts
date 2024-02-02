import server from "./app"
const PORT = 3002



server.listen(PORT, () =>{
     console.log (`Server running on port ${PORT}`)
})