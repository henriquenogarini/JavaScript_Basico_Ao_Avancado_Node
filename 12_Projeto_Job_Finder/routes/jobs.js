const express = require("express")
const router = express.Router()
const Job = require("../models/Job")
const { where } = require("sequelize")

//Rota de teste
router.get("/test", (req, res) => {
    res.send("Deu Certo!")
})

//Rota de Adicionar form
router.get("/add", (req,res) => {
    res.render("add")
})

//Rota de Detalhes da Vaga -> View
router.get('/view/:id', (req, res) => Job.findOne({
    where: {id: req.params.id}
  }).then(job => {
  
    res.render('view', {
      job
    });
  
  }).catch(err => console.log(err)));


// Rota para adicionar um job via POST
router.post("/add", (req, res) => {

    let { title, salary, company, description, email, new_job } = req.body

    // Cria um novo Job e salva no banco de dados
    Job.create({
        title,
        description,
        salary,
        company,
        email,
        new_job
    })
    .then(() => res.redirect("/"))
    .catch(err => console.log(err))

})

module.exports = router