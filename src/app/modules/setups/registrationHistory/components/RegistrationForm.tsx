

import * as Yup from "yup";
import {IRegistrationHistory} from "../core/_models.ts";
import {forwardRef} from "react";
import {useFormik} from "formik";

const registrationHistorySchema = Yup.object().shape({
    vehicleRegNo: Yup.string().required('Vehicle Registration Number is required'),
})

type RegistrationHistoryFormProps = {
    onSubmit: (values: IRegistrationHistory) => void;
    formData: IRegistrationHistory;
}

type RegistrationHistoryFormHandle = {
    submit: () => void;
    isSubmitting?: boolean;
}

export const RegistrationHistoryForm = forwardRef<RegistrationHistoryFormHandle,
    RegistrationHistoryFormProps>(({onSubmit, formData}, ref) => {

    const registrationHistoryFormik = useFormik({
        initialValues: formData,
        enableReinitialize: true,
        validationSchema: registrationHistorySchema,
        onSubmit: ((values, {resetForm}) => {
            onSubmit(values);
            resetForm();
        })
    });



    return (
        <>
            <form onSubmit={registrationHistoryFormik.handleSubmit} className={'form'}>
                <div className="row mb-5">
                    <div className="col-md-6 mb-5">
                        <label className="form-label">Vehicle</label>
                        <select
                            className="form-select"
                            {...registrationHistoryFormik.getFieldProps('vehicle')}
                        >
                            <option value={0}>Select Vehicle</option>
                        </select>
                    </div>
                    <div className="col-md-6 mb-5">
                        <label className="form-label">Registration Date</label>
                        <input
                            type="text"
                            className="form-control"
                            {...registrationHistoryFormik.getFieldProps('registration_date')}
                        />
                    </div>
                    <div className="col-md-6 mb-5">
                        <label className="form-label">Expiry Date</label>
                        <input
                            type="date"
                            className="form-control"
                            {...registrationHistoryFormik.getFieldProps('expiry_date')}
                        />
                    </div>
                    <div className="col-md-6 mb-5">
                        <label className="form-label">Status</label>
                        <input
                            type="text"
                            className="form-control"
                            {...registrationHistoryFormik.getFieldProps('status')}
                        />
                    </div>

                </div>
            </form>
        </>
    );
})


