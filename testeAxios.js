const axios = require("axios");


axios.post("http://localhost:8000/api/login", { login: "gabriel", senha: "123" }).then(response=>{
    console.log(response.data)
})