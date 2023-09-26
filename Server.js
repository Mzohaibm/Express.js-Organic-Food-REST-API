const express = require("express")
const { default: mongoose } = require("mongoose")
const connectwithDbs = require("./Utilities/Db")
const productRouter = require("./Routers/OrganicProduct")

let server = express()
server.use(express.json())
server.use(express.urlencoded({ extended: true }));


mongoose.connect(connectwithDbs, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // using these options (useNewUrlParser and useUnifiedTopology) ensures that our MongoDB connection is using up-to-date and efficient mechanisms for parsing the connection URL
})

const database = mongoose.connection
// it will run if error occur in dbs 
database.on("error", (error) => {
    console.error('MongoDB connection error:', error);
})

database.once("open", () => {
    console.log("Connected to mongo db")
})


server.use("/product", productRouter)

const port = process.env.PORT || 3000
server.listen(port, () => {
    console.log(`server is running on ${port}`)
})