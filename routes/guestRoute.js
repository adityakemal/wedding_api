const router = require('express').Router()
const Guest = require('../models/Guest')

//get
router.get('/', async (req ,res)=>{
    try {
        const data = await Guest.find()
        res.status(200).json({status : 'success', data : data})
    } catch (error) {
        res.status(400).send(error)
    }
})

//post
router.post('/', async(req ,res)=>{
    let guest = new Guest({
        name : req.body.name,
        status : req.body.status,
        note : req.body.note,
    })
    try {
        const savedData = await guest.save()
        res.status(200).json({status : 'success', data : savedData})
    } catch (error) {
        res.status(400).send(error)
    }

})

// edit
router.patch('/:guestId',(req ,res)=>{
    Guest.updateOne(
        {_id : req.params.guestId}, 
        {
            $set : {
                status : req.body.status,
                note : req.body.note,
            }
        }
    ).then(data=>{
        res.status(200).json({status : 'success'})
    }).catch(err =>{
        res.status(400).json({message : err})
    })
})

// delete datas
router.delete('/:guestId', async (req,res)=>{
    try {
        const data = await Guest.deleteOne({_id : req.params.guestId})
        res.status(200).json({status : 'success'})
    } catch (error) {
        res.status(400).json({status : 'error',message : error})
    }
   
})


module.exports = router