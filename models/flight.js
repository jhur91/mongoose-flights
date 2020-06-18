const mongoose = require('mongoose');
// optional shortcut ot the mongoose.Schema class
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
        default: "n/a"
    },
    arrival: Date
});

const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United'],
        default: "N/A"
    },
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
        default: 'DEN'
    },
    flightNo: {
        type: Number,
        require: Number,
        default: Number,
        min: 10,
        max: 9999
    },
    departs: {
        type: Date,
        default: function() {
            let oneYear = new Date();
            return oneYear.setFullYear(oneYear.getFullYear() + 1);
        },
        min: 2020
    },
    destinations: {
        type: [destinationSchema]
    }
    });

module.exports = mongoose.model('Flight', flightSchema);