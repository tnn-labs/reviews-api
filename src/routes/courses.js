const express = require('express')

const router = express.Router()

const {
  getAllCourses,
  getCourse,
  createCourse,
  updateCourse,
  deleteCourse,
} = require('../controllers/courses')

router.post('/', createCourse)
router.get('/', getAllCourses)
router.get('/:id', getCourse)
router.delete('/:id', deleteCourse)
router.patch('/:id', updateCourse)

module.exports = router
