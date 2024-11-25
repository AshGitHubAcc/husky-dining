export default function endpoint_index(app) {



    app.get("/",(req,res)=> {

        res.send("Hello")

    })

}

