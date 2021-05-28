
const Company = require('../models/Company');
const express = require('express');
const router = express.Router();
router.post(
    "/addcompany",
    (req, res, next) => {
        console.log(req.body);
        const company = new Company({
            name: req.body.name,
             code: req.body.code,
             location: req.body.location
        });

        company.save().then(createdPost => {
            res.status(200).json({
                success: true,
                res: createdPost,
                message: "Post added successfully"
            });
        }).catch(err => {
            res.status(200).json({
                success: false,
                e: err,
                message: "Exception"
            });
        });
    });

router.post(
    "/updatecompany",
    (req, res, next) => {
        const company = new Company({
            _id: req.body._id,
            name: req.body.name,
             code: req.body.code,
             location: req.body.location
        });

        Company.updateOne({ _id: req.body._id }, company).then(createdPost => {
            res.status(200).json({
                success: true,
                res: createdPost,
                message: "Post updated successfully"
            });
            
        }).catch(err => {
            res.status(200).json({
                e: err,
                success: false,
                message: "Exception api:!"
            });
        });;
    });



        router.get(
            "/",
            (req, res, next) => {
                Company.find().then(post => {
                    if (post) {
                        res.status(200).json({
                            post: post,
                            success: true,
                            message: ' found'
                        });
                    } else {
                        res.status(404).json({
                            message: ' Not found'
                        });
                    }
                }).catch(err => {
                    res.status(200).json({
                        e: err,
                        success: false,
                        message: "Exception:  not fetched!"
                    });
                });
            });
           
        router.delete('/:id',
            (req, res, next) => {
                Company.deleteOne({ _id: req.params.id }).then(result => {
                    if (result.n > 0) {
                        res.status(200).json({
                            success: true
                        });
                       
                    } else {
                        res.status(401).json({success: true, message: "  unsucessfull!" });
                    }

                }).catch(err => {
                    res.status(200).json({
                        e: err,
                        success: false,
                        message: "Exception:  not fetched!"
                    });
                });
            });

           
        module.exports = router;
