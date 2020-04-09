const monk = require('monk')
module.exports = {
    secret: 'worldisfullofdevelopers', 
    db_production : monk('mongodb://heroku_jbn2nzgx:9bqdhhn84o2mn2t5bu6r720pd8@ds247569.mlab.com:47569/heroku_jbn2nzgx') ,
    db_localhost: monk("mongodb://localhost:27017/db_Manager")

};