import { Router } from "express";
import { StudentRoutes } from "../../modules/students/student.route";
import { UserRoutes } from "../../modules/user/user.route";
import { AcademicSemesterRoutes } from "../../modules/academicSemester/academicSemester.route";

const router = Router();

const moduleRotes = [{
    path: "/students",
    route: StudentRoutes,

},
{
    path: "/users",
    route: UserRoutes,
},
{
    path: "/academic-semesters",
    route: AcademicSemesterRoutes,
}
]

moduleRotes.forEach((route) => {
    router.use(route.path, route.route);
});


export default router;