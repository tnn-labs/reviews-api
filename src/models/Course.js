const mongoose = require('mongoose')

const CourseSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please provide title'],
    },
    thumb: {
      type: String,
    },
    school: {
      type: String,
      required: [true, 'Please provide school'],
    },
    description: {
      type: String,
      required: [true, 'Please provide description'],
    },
    year: {
      type: String,
      required: [true, 'Please provide year'],
    },
    testimonial: {
      type: String,
      required: [true, 'Please provide testimonial'],
    },
    url: {
      type: String,
      required: [true, 'Please provide link'],
    },
    technologies: {
      type: Array,
    },
  },
  { timestamps: true },
)

module.exports = mongoose.model('Course', CourseSchema)
