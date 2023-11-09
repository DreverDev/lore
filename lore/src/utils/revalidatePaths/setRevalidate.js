import { revalidatePath } from "next/cache";

const revalidatePaths =  ['/api/books/getAll'];

const setRevalidate = async () => {
    for(path in revalidatePaths){
        revalidatePath(path)
    }
}

export default setRevalidate;