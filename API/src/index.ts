import serverSocket from "./app"
const PORT = process.env.PORT || 3002

serverSocket.listen(PORT, () => {
     console.log(`Server running on port ${PORT}`)
})