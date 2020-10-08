module.exports = app => {
  const moogoose = require('mongoose')
  moogoose.connect('mongodb://localhost:27017/node-vue-moba', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
}