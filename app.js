import express from "express"
import cors from "cors"
import mongoose, { mongo } from "mongoose"
import helloRoutes from "./routes/hello.js"
import UserRoutes from "./users/routes.js"
import session from "express-session"
import dotenv from "dotenv"

dotenv.config()

const connectionOption = {
  authSource: "admin",
  user: process.env.MONGO_USERNAME,
  pass: process.env.MONGO_PASSWORD,
}
const mongo_url = process.env.MONGO_URL || "mongodb://127.0.0.1:27017/Kanbas"
mongoose.connect(mongo_url,connectionOption).then(()=> {
  console.log("Connect to database success!");
}).catch((err) => {
  console.log("Failed to connect to database:", err)
})

const app = express()
console.log(process.env)
app.use(cors({
  credentials: true,
  origin: process.env.FRONTEND_URL
  // origin: "http://localhost:3000"
}))

const sessionOption = {
  secret: "Helen Hu",
  resave: true,
  saveUninitialized: true,
  cookie: {
    // secure: true,
    maxAge: 1000 * 60 * 60 *24 * 7
  }
}
// Uncomment while use mongodb atlas cloud
// if (process.env.NODE_ENV !== 'development') {
//   sessionOption.proxy = true,
//   sessionOption.cookie = {
//     sameSite: "none",
//     secure: true,
//   }
// }

app.use(session(sessionOption))
app.use(express.json())

helloRoutes(app)
UserRoutes(app)

app.listen(4000, () => {
  console.log("Server running on: http://localhost:4000")
})

export default app