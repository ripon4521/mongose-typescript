import catchAsync from '../../app/utils/catchAsync';
import sendRespone from '../../app/utils/sendResponse';
import { CourseService } from './course.services';

const createCourse = catchAsync(async (req, res) => {
  const result = await CourseService.createCourseIntoDB(req.body);
  sendRespone(res, {
    statusCode: 200,
    success: true,
    message: 'Course created successfully',
    data: result,
  });
});

const getAllCourses = catchAsync(async (req, res) => {
  const result = await CourseService.getCoursesFromDB(req.query);
  sendRespone(res, {
    statusCode: 200,
    success: true,
    message: 'All courses retrieved successfully',
    data: result,
  });
});

const getSingleCourse = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await CourseService.getSingleCourseFromDB(id);
  sendRespone(res, {
    statusCode: 200,
    success: true,
    message: 'Single course retrieved successfully',
    data: result,
  });
});

const deleteCourse = catchAsync(async (req, res) => {
    const { id } = req.params;
  const result = await CourseService.deleteCourseFromDB(id);
  sendRespone(res, {
    statusCode: 200,
    success: true,
    message: 'Course deleted successfully',
    data: result,
  });
});

export const CourseController = {
  createCourse,
  getAllCourses,
  getSingleCourse,
  deleteCourse,
};
