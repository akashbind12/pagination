const express = require("express");
const router = express.Router();
const Data = require("../models/data.model")

router.get("/", async (req, res) => {
    try {
        
        const { page = 1 , per_page = 5} = req.query 

        const data = await Data.find().limit(per_page * 1).skip((page -1) * per_page);
        
        const alldocuments = await Data.find()
        const totaldocuments = alldocuments.length
        const totalPages = totaldocuments/per_page;
        // console.log(totaldocuments,totalPages)

        return res.status(200).send({
            "success" : true,
            "data" : {
                    "totalItems": totaldocuments,
                    "data" : data
                },
            "totalPages": totalPages,
            "currentPage":page
        })

    } catch (err) {
        console.log(err)
        return res.status(200).send({ err: err })
    }
});


module.exports = router;