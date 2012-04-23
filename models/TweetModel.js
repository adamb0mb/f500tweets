var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TweetModel = new Schema({
    user:           { type: String },
    text:           { type: String },
    tweetId:        { type: Number, unique: true },
    dateCreated:    { type: Date, default: Date.now() },
    tags:           {   hashtags:  [String],
                        companies:  [String],
                        primaryLanguage:    { type: String},
                        sentiment:  { type: String, enum: {"Positive","Negative","Neutral"}},
                        products:   [String] },
});

mongoose.model('TweetModel',TweetModel);

