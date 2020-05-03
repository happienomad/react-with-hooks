import React, { useCallback } from 'react';

const useInput = (initialValue: any = undefined) => {
    const [value, setValue] = React.useState(initialValue);
    const [isValid, setIsValid] = React.useState(false);
    return {
        value,
        isValid,
        setValue,
        checkIsValid: () => {
            return (value !== '' && value !== undefined);
        },
        reset: () => setValue(initialValue),
    }
}

export default useInput;