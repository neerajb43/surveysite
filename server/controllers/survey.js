let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//create a reference to the model
let Survey = require('../models/survey');

module.exports.displaySurveyList = (req, res, next) => {
    Survey.find((err, surveyList) => {
        if(err)
        {
            return console.error(err);
        }
        else
        {
            //console.log(survey);
            res.render('survey/list', {title: 'Questions', SurveyList: surveyList})
        }
    });
}


module.exports.displayAddPage = (req, res, next) => {
    res.render('survey/add', {title: 'Survey Question'});
}

module.exports.processAddPage = (req, res, next) => {
    let newSurvey = Survey({
        "name": req.body.name,
        "email": req.body.email,
        "age": req.body.age,
    });

    Survey.create(newSurvey, (err, Survey) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/survey-app');
        }
    });
} 

module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;

    Survey.findById(id, (err, surveyToEdit)=> {
        if(err)
        {
            console.log(err)
            res.end(err);
        }
        else
        {
            res.render('survey/edit', {title: 'Edit Survey Information', survey: surveyToEdit})
        }
    });
}

module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id;

    let updatedSurvey = Survey({
        "_id": id,
        "name": req.body.name,
        "email": req.body.email,
        "age": req.body.age
    });

    Survey.updateOne({_id: id}, updatedSurvey, (err) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/survey-app');
        }
    });
}


module.exports.performDelete =  (req, res, next) => {
    let id = req.params.id;
    Survey.remove({_id: id}, (err) => {
       if(err)
       {
        console.log(err);
        res.end(err);
       } 
       else
       {
        res.redirect('/survey-app')
       }
    });
}

