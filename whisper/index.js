import { app } from "./server.js";

const PORT = 5000

app.listen(PORT, () => {
    console.log(`Running in http://localhost:${PORT}`)
})