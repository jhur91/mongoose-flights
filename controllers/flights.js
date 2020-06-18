const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
  new: newFlight,
  create,
  index,
  show
};

function show(req, res) {
  Flight.findById(req.params.id, function(err, flight) {
    Ticket.find({flight: flight}, function(err, foundTickets){
      res.render('flights/show', {flight, foundTickets});
    })
  })
};


function index(req, res) {
  Flight.find({}, function(err, flights) {
    res.render('flights/index', {flights});
  });
}

function create(req, res) {
  Flight.create(req.body);
    res.redirect('/flights');
  };

function newFlight(req, res) {
  res.render('flights/new');
}