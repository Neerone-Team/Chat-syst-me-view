// on initialise un router sous router pour le système de connexion
const router = require("express").Router();


router.get("/", async (req, res)=>{

    res.render("connexion.html", {
        title: "Connectez vous et commencer avec tcha-tcha",
        description: ""
    });
    
});


module.exports = router;


