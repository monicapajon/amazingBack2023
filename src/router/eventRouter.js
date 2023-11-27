const express = require('express');
const eventController = require('../controllers/eventController.js');
const { verifyData, verifyId } = require('../middlewares/verifications')
const eventRouter = express.Router();
//const eventRouter = require('express').Router();
//const Event = require('../../models/Event.js');
//const{getEvents, getOneEvent, createEvent, updateEvent, deleteEvent} = require('../controllers/eventController.js');


eventRouter.get('/', eventController.getEvents);

eventRouter.get('/:id',verifyId, eventController.getOneEvent);

eventRouter.post('/',verifyData, eventController.createEvent);

eventRouter.post('/all', eventController.createEvents);

eventRouter.put('/:id',verifyId, eventController.updateEvent);

eventRouter.delete('/:id',verifyId, eventController.deleteEvent);

eventRouter.delete('/', eventController.deleteEvents);

module.exports = eventRouter;

//eventRouter.post("/all", eventController.createEvents); //el endpoint puede repetirse solo si el tipo de solicitud cambia

//eventRouter.put( "/:id", eventController.updateEvent )
