import { Pages } from "../../entities/pages.entity";
import { CreatePageI } from "../../types/pages.types";

/**
 * This function creates a new page in a database using the provided data.
 * @param {CreatePageI} data - CreatePageI is likely an interface or type that defines the shape of the
 * data object being passed into the function. Without seeing the definition of CreatePageI, it's
 * difficult to say exactly what properties it contains. However, based on the function name and the
 * fact that it's creating a page,
 * @returns The function `create_page` is returning the result of creating a new page in the database
 * using the `Pages` model and the data provided in the `data` parameter. The exact content of the
 * `result` object depends on the implementation of the `Pages` model and the database being used.
 */
export const create_page = async (data: CreatePageI) => {
    const result = await Pages.create({ ...data })
    return result;
}

/**
 * This function retrieves all pages from a database asynchronously using Sequelize ORM in TypeScript.
 * @returns The function `get_all_pages` is returning a promise that resolves to the result of calling
 * the `findAll` method on the `Pages` object. The result of this method call is likely an array of
 * objects representing all the pages in a database or some other data source.
 */
export const get_all_pages = async () => {
    return await Pages.findAll()
}