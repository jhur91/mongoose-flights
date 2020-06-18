const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
    new: newTicket,
    create
};

  
  function create(req, res) {
    const newTicket = {seat: req.body.seat, price: req.body.price, flight: req.params.id};
    Ticket.create(newTicket);
    res.redirect(`/flights/${req.params.id}`)
  };
  
  function newTicket(req, res) { 
        res.render('tickets/new', {flightId: req.params.id});
  };

