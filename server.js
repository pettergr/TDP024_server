const express = require("express")
const persons = require("./db/persons")
const banks = require("./db/banks")
const persons_app = express()
const banks_app = express()

/* List route for persons app */
persons_app.get("/person/list", (req, res) => { res.json(persons) })

/* List route for banks app */
banks_app.get("/bank/list", (req, res) => { res.json(banks) })

/* Find by name for persons app */
persons_app.get("/person/find.name", (req, res) => {
    name = req.query.name
    for (let person of persons) {
        if (person.name == name) {
            res.json(person)
            return
        }
    }
    res.status(404).json("No person found")
})

/* Find by name for banks app */
banks_app.get("/bank/find.name", (req, res) => {
    name = req.query.name
    for (let bank of banks) {
        if (bank.name == name) {
            res.json(bank)
            return
        }
    }
    res.status(404).json("No bank found")
})

/* Find by key for persons app */
persons_app.get("/person/find.key", (req, res) => {
    key = req.query.key
    for (let person of persons) {
        if (person.key == key) {
            res.json(person)
            return
        }
    }
    res.status(404).json("No person found")
})

/* Find by key for banks app */
banks_app.get("/bank/find.key", (req, res) => {
    key = req.query.key
    for (let bank of banks) {
        if (bank.key == key) {
            res.json(bank)
            return
        }
    }
    res.status(404).json("No bank found")
})

/* Start the two servers */
persons_app.listen(8060, () => console.log("Persons app - port 8060"))
banks_app.listen(8070, () => console.log("Banks app - port 8070"))
