const express = require('express')

const Course = require('./models/Course')

const router = express.Router()

// Get all courses
router.get('/courses', async (request, response) => {
  const courses = await Course.find()
  response.send(courses)
})

// Create course
router.post('/courses', async (request, response) => {
  const {
    title,
    thumb,
    school,
    description,
    year,
    testimonial,
    url,
    technologies,
  } = request.body

  const course = new Course({
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
  response.send(course)
})

// Get individual course
router.get('/courses/:id', async (request, response) => {
  try {
    const course = await Course.findOne({ _id: request.params.id })
    response.send(course)
  } catch {
    response.status(404)
    response.send({ error: "Course doesn't exist!" })
  }
})

// Update course
router.patch('/courses/:id', async (request, response) => {
  try {
    const course = await Course.findOne({ _id: request.params.id })

    if (request.body.title) {
      course.title = request.body.title
    }

    if (request.body.content) {
      course.description = request.body.description
    }

    await course.save()
    response.send(course)
  } catch {
    response.status(404)
    response.send({ error: "Course doesn't exist!" })
  }
})

// Delete course
router.delete('/courses/:id', async (request, response) => {
  try {
    await Course.deleteOne({ _id: request.params.id })
    response.status(204).send()
  } catch {
    response.status(404)
    response.send({ error: "Course doesn't exist!" })
  }
})

module.exports = router
