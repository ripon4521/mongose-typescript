import { Router } from 'express';
import { StudentRoutes } from '../../modules/students/student.route';
import { UserRoutes } from '../../modules/user/user.route';
import { AcademicSemesterRoutes } from '../../modules/academicSemester/academicSemester.route';
import { AcademicFacultyRoutes } from '../../modules/academicFaculty/academicFaculty.route';
import { AcademicDepartmentRoutes } from '../../modules/academicDepartment/academicDepartment.route';
import { FacultyRoutes } from '../../modules/Faculty/faculty.routes';
import { AdminRoutes } from '../../modules/Admin/admin.route';
import { CourseRouter } from '../../modules/course/course.route';

const router = Router();

const moduleRotes = [
  {
    path: '/students',
    route: StudentRoutes,
  },
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/faculties',
    route: FacultyRoutes,
  },
  {
    path: '/courses',
    route: CourseRouter,
  },
  {
    path: '/admins',
    route: AdminRoutes,
  },
  {
    path: '/academic-semesters',
    route: AcademicSemesterRoutes,
  },
  {
    path: '/academic-faculties',
    route: AcademicFacultyRoutes,
  },
  {
    path: '/academic-departments',
    route: AcademicDepartmentRoutes,
  },
];

moduleRotes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
