import { ZodError, ZodIssue } from "zod";
import { TerrorSource } from "../../interface/errors";

const handleZodError = (err: ZodError) => {
    const errorSources: TerrorSource = err.issues.map((issue: ZodIssue) => {
      return {
        path: issue?.path[issue.path.length - 1],
        message: issue.message,
      };
    });
    const statusCode = 400;
    return {
      statusCode,
      message: ' Validation Error',
      errorSources,
    };
  };

  export default handleZodError;