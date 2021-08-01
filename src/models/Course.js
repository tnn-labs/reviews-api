const mongoose = require('mongoose')

const schema = mongoose.Schema({
  title: String,
  thumb: String,
  school: String,
  description: String,
  year: String,
  testimonial: String,
  link: String,
  technologies: Array,
})

module.exports = mongoose.model('Course', schema)
