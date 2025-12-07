const subjectService = require("../service/subjectService");


const subjectController = {
    async getAllSubject(req,res){
        try{
            const {page, limit, sortBy, order} = req.query;
            console.log(req.query);
            const subjects = await subjectService.getAllSubject({
                page: parseInt(page) || 1,
                limit: parseInt(limit) || 10,
                sortBy: sortBy || 'id',
                order: order || 'asc'
            })
            res.json({success : true , data : subjects})
        }
        catch(e){
            res.status(400).json({success: false , message : e.message})
        }
    }
}

module.exports = subjectController