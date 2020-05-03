import { useEffect, useCallback, useState, FormEvent, ChangeEvent } from 'react';


export type ValueType = {
    value: any,
    error: string
};

export type StateType = {
    [id: string]: ValueType
}

export type FormControlType = {
    state: ValueType,
    validations: {
        required: boolean;
        validation?: {
            regex?: RegExp,
            error?: string | undefined
        }
    }
}

export type FormGroupType = {
    [name: string]: FormControlType
}

export const INIT_FIELD_VALUE: ValueType = { value: '', error: '' };

const useForm = (formGroup: FormGroupType, callback: Function) => {

    const initFormState: StateType = {};
    Object.keys(formGroup).forEach((key: string) => {
        initFormState[key] = formGroup[key].state;
    });

    const [formState, setFormState] = useState(initFormState);
    const [invalid, setInvalid] = useState(true);
    const [isDirty, setIsDirty] = useState(false);

    useEffect(() => {
        setInvalid(true);
    }, []);

    useEffect(() => {
        if (isDirty) {
            setInvalid(validateForm());
        }
    }, [formState, isDirty]);

    const handleOnChange = useCallback(
        (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
            const { name, value } = event.currentTarget;
            updateState(name, value);
        }, [formGroup])

    const handleOnClick = useCallback((event: FormEvent<HTMLInputElement>) => {
        updateState(event.currentTarget.name, event.currentTarget.checked);
    }, [formGroup]);

    const handleOnSubmit = useCallback((event: FormEvent) => {
        event.preventDefault();
        if (!invalid) {
            callback();
            resetForm();
        }
    }, [formGroup]);

    const updateState = (name: string, value: any) => {
        let error: string | undefined = '';
        const validations = formGroup[name].validations;

        if (validations.required && !value) {
            error = 'Required field';
        }

        if (validations.validation && validations.validation?.regex) {
            if (validations.validation?.regex?.test(value)) {
                error = validations.validation?.error;
            }
        }

        setIsDirty(true);

        setFormState((prevState: StateType) => {
            return Object.assign({}, { ...prevState }, { [name]: { value, error } })
        });
    }

    const validateForm = useCallback(
        () => {
            const isInvalidState = Object.keys(formState).some((key: string) => {
                const isRequiredField = formGroup[key].validations.required;
                const fieldState: ValueType = formState[key];
                return (isRequiredField && !fieldState.value) || (fieldState.error !== '');
            });
            return isInvalidState
        }, [formState, formGroup]);

    const resetForm = () => {
        setFormState(initFormState);
        setInvalid(true);
        setIsDirty(false);
    }

    return { formState, invalid, handleOnChange, handleOnClick, handleOnSubmit }
}

export default useForm;