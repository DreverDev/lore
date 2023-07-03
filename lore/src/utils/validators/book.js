import validator from "validator";

const validateBook = (params) => {
    let validateTitle = !validator.isEmpty(params.title);

    if (!validateTitle) {
        throw new Error("Error validating book data");
    }
};

export default validateBook;