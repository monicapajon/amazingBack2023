const eventDAL = require('../repositories/eventDAL');

const eventService = {
  getEvents: async () => {
    const eventsFound = await eventDAL.getAllEvents();
    return eventsFound;
  },

  getOneEvent: async (payload) => {
    const event = await eventDAL.getOneEvent(payload);
    return event;
  },

  createEvent: async (payload) => {
    if (!payload) {
      throw new Error('Se necesitan datos para crear el evento');
    }
    const event = await eventDAL.createEvent(payload);
    if (event) {
      return event;
    }
  },

  createEvents: async (payload) => {
    const eventsCreated = await eventDAL.createEvents(payload);
    if (eventsCreated && eventsCreated.length > 0) {
      return eventsCreated;
    } else {
      throw new Error('There are no events');
    }
  },

  updateEvent: async (id, payload) => {
    if (!payload) {
      throw new Error('Data is needed to edit the event');
    }
    const event = await eventDAL.updateEvent(id, payload);
    if (event) {
      return event;
    }
  },

  deleteEvent: async (payload) => {
    const event = await eventDAL.deleteEvent(payload);
    return event;
  },

  deleteEvents: async () => {
    const deletedEvents = await eventDAL.deleteEvents();
    return deletedEvents;
  },
};

module.exports = eventService;
