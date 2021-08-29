const Course = require('../models/Course')

const getAllCourses = async (req, res) => {
  const courses = await Course.find({})
  res.status(200).json({ courses, count: courses.length })
}

const getCourse = async (req, res) => {
  try {
    const course = await Course.findOne({ _id: req.params.id })
    res.status(200).json({ course })
  } catch {
    res.status(404)
    res.json({ error: "Course doesn't exist!" })
  }
}

const createCourse = async (req, res) => {
  const course = await Course.create(req.body)
  res.status(201).json({ course })
}

const updateCourse = async (req, res) => {
  const {
    title,
    thumb,
    school,
    description,
    year,
    testimonial,
    url,
    technologies,
  } = req.body

  try {
    const course = await Course.findOne({ _id: req.params.id })

    Object.assign(course, {
      title,
      thumb,
      school,
      description,
      year,
      testimonial,
      url,
      technologies,
    })

    await course.save()
    req.json({ course })
  } catch {
    res.status(404)
    res.json({ error: "Course doesn't exist!" })
  }
}

const deleteCourse = async (req, res) => {
  try {
    await Course.deleteOne({ _id: req.params.id })
    res.status(204).send()
  } catch {
    res.status(404)
    res.send({ error: "Course doesn't exist!" })
  }
}

module.exports = {
  getAllCourses,
  getCourse,
  createCourse,
  updateCourse,
  deleteCourse,
}
