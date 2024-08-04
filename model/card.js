const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
    cardType: {
        type: String,
        required: true,
        trim: true
    },
    cardNumber: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    cardHolderName: {
        type: String,
        required: true,
        trim: true
    },
    expiryDate: {
        type: Date,
        required: true
    },
    CVV: {
        type: String,
        required: true,
        trim: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date
    },
    billingAddress:{
        type: String
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
});

cardSchema.pre('save', function(next) {
    this.updatedAt = Date.now();
    next();
});

const Card = mongoose.model('Card', cardSchema);

module.exports = Card;
