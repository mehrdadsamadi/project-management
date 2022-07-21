const { all_routes } = require('./router/router')
module.exports = class Application {
    #express = require('express') //create private express with #
    #app = this.#express() //create private app with #
    
    constructor(PORT, DB_URL) {
        this.config_database(DB_URL)
        this.config_appllication()
        this.create_server(PORT)
        this.create_routes()
        this.error_handler()
    }
    
    config_database(DB_URL) {
        const mongoose = require('mongoose');

        mongoose.connect(DB_URL, error => {
            if(error) throw error
            return console.log("connected to database.");
        })
    }

    config_appllication() {
        const path = require('path');

        this.#app.use(this.#express.json())
        this.#app.use(this.#express.urlencoded({extended: true}))
        this.#app.use(this.#express.static(path.join(__dirname, "..", "public")))
    }

    create_server(PORT) {
        const http = require('http');

        const server = http.createServer(this.#app)
        server.listen(PORT, () => {
            console.log(`server run on http://localhost:${PORT}`);
        })
    }

    create_routes() {
        // this.#app.get("/", (req, res, next) => {
        //     return res.json({
        //         message: "سلام به همگی"
        //     })
        // })

        // TODO: create try catch block

        this.#app.use(all_routes)
    }

    error_handler() {
        this.#app.use((req, res, next) => {
            return res.status(404).json({
                status: 404,
                success: false,
                message: "صفحه مورد نظر شما یافت نشد"
            })
        })

        this.#app.use((error, req, res, next) => {
            const status = error?.status || 500
            const message = error?.message || "خطای داخلی سرور"

            return res.status(status).json({
                success: false,
                status,
                message
            })
        })
    }
}