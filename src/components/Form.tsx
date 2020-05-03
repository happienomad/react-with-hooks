import React, { useCallback, FormEvent, useEffect, useState } from 'react';
import useForm, { FormGroupType, INIT_FIELD_VALUE } from '../hooks/useForm';

const Form: React.FC = () => {

    const cuisines: string[] = ['Canadian', 'Indian', 'Italian', 'French'];

    const formGroup: FormGroupType = {
        'name': { state: INIT_FIELD_VALUE, validations: { required: true } },
        'cuisine': { state: INIT_FIELD_VALUE, validations: { required: true } },
        'allergies': { state: INIT_FIELD_VALUE, validations: { required: true } },
        'preferences': { state: INIT_FIELD_VALUE, validations: { required: true } }
    }

    const { formState, invalid, handleOnChange, handleOnClick } = useForm(formGroup);

    const handleOnSubmit = (evt: FormEvent) => {
        evt.preventDefault();
        if (!invalid) {
            alert('Success! All good');
        }
        console.log(formState);
    }


    const hasError = useCallback((name: string) => {
        return formState[name] ? formState[name]?.error != '' : false;
    }, [formState]);

    return (
        <>
            <h2>Validation form</h2>
            <form className="validation-form" onSubmit={evt => handleOnSubmit(evt)}>
                <div>
                    <label htmlFor="textInput">Name:</label>
                    <input className="form-control" type="text" name="name" id="name" onChange={evt => handleOnChange(evt)} placeholder="Enter here" />
                    <p className={`error-message ${!hasError('name') ? 'hidden' : ''}`}>{formState['name']?.error}</p>
                </div>
                <div>
                    <label htmlFor="cuisine">
                        Select cuisine:
                    </label>
                    <select name="cuisine" className="form-control" onChange={evt => handleOnChange(evt)}>
                        <option value="">Select</option>
                        {cuisines.map(cuisine => <option value={cuisine}>{cuisine}</option>)}
                    </select>
                    <p className={`error-message ${!hasError('cuisine') ? 'hidden' : ''}`}>{formState['cuisine']?.error}</p>
                </div>
                <div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" onChange={evt => handleOnChange(evt)} id="yesAllergies" name="allergies" value="yes" />
                        <label className="form-check-label" htmlFor="yesAllergies">Yes</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" onChange={evt => handleOnChange(evt)} id="noAllergies" name="allergies" value="no" />
                        <label className="form-check-label" htmlFor="noAllergies">No</label>
                    </div>
                    <p className={`error-message ${!hasError('allergies') ? 'hidden' : ''}`}>{formState['allergies']?.error}</p>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" onClick={evt => handleOnClick(evt)} id="preference" name="preferences" value="true" />
                    <label className="form-check-label" htmlFor="preference">Save preferences</label>
                    <p className={`error-message ${!hasError('preferences') ? 'hidden' : ''}`}>{formState['preferences']?.error}</p>
                </div>
                <div>
                    <button disabled={invalid} className="btn btn-success" type="submit">Save</button>
                </div>
            </form>
        </>
    )
}

export default Form;