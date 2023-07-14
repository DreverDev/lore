import { useState } from 'react';

export const useForm = (initialObj) => {
    const [form, setForm] = useState(initialObj);

    const changed = ({ target }) => {
        const { name, value } = target;

        let realValue = value;
        if(target.type == "checkbox"){
            target.checked ? realValue = true : realValue = false;
        }
        
        setForm({
            ...form,
            [name]: realValue,
        })
    }

    return {
        form,
        changed,
    }
}