import { z } from "zod";
import { academicSemerName, academicSemesterCode, Months } from "./academicSemester.constant";


const createAcademicSemesterValidionsSechema = z.object({
        body: z.object({
            name:z.enum([ ...academicSemerName] as [string, ...string[]]),
            code : z.enum([ ...academicSemesterCode] as [string, ...string[]]),
            year : z.string(),
            startMonth : z.enum([...Months] as [string, ...string[]]),
            endMonth : z.enum([...Months] as [string, ...string[]]),
          
        })
})
const upadateAcademicSemesterValidionsSechema = z.object({
        body: z.object({
            name:z.enum([ ...academicSemerName] as [string, ...string[]]).optional(),
            code : z.enum([ ...academicSemesterCode] as [string, ...string[]]).optional(),
            year : z.string().optional(),
            startMonth : z.enum([...Months] as [string, ...string[]]).optional(),
            endMonth : z.enum([...Months] as [string, ...string[]]).optional(),
          
        })
})


export const AcademiocSemesterValidations = {
    createAcademicSemesterValidionsSechema,
    upadateAcademicSemesterValidionsSechema
};

