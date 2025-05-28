

import * as Yup from "yup";
import {forwardRef} from "react";
import {useFormik} from "formik";
import {IDriverModel} from "../core/_models.ts";

const driverSchema = Yup.object().shape({
    vehicleRegNo: Yup.string().required('Vehicle Registration Number is required'),
})

type DriverProps = {
    onSubmit: (values: IDriverModel) => void;
    formData: IDriverModel;
}

type DriverHandle = {
    submit: () => void;
    isSubmitting?: boolean;
}

export const DriverForm = forwardRef<DriverHandle,
    DriverProps>(({onSubmit, formData}, ref) => {

    const driverFormik = useFormik({
        initialValues: formData,
        enableReinitialize: true,
        validationSchema: driverSchema,
        onSubmit: ((values, {resetForm}) => {
            onSubmit(values);
            resetForm();
        })
    });



    return (
        <>
            <form onSubmit={driverFormik.handleSubmit} className={'form'}>
                <div className="row mb-5">
                    <div className="col-md-6 mb-5">
                        <label className="form-label">National ID</label>
                        <input
                            type="text"
                            className="form-control"
                            {...driverFormik.getFieldProps('national_id')}
                        />
                    </div>
                    <div className="col-md-6 mb-5">
                        <label className="form-label">First Name</label>
                        <input
                            type="text"
                            className="form-control"
                            {...driverFormik.getFieldProps('first_name')}
                        />
                    </div>
                    <div className="col-md-6 mb-5">
                        <label className="form-label">Lastname</label>
                        <input
                            type="text"
                            className="form-control"
                            {...driverFormik.getFieldProps('last_name')}
                        />
                    </div>
                    <div className="col-md-6 mb-5">
                        <label className="form-label">Address</label>
                        <input
                            type="text"
                            className="form-control"
                            {...driverFormik.getFieldProps('address')}
                        />
                    </div>
                    <div className="col-md-6 mb-5">
                        <label className="form-label">Phone</label>
                        <input
                            type="text"
                            className="form-control"
                            {...driverFormik.getFieldProps('phone')}
                        />
                    </div>
                    <div className="col-md-6 mb-5">
                        <label className="form-label">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            {...driverFormik.getFieldProps('email')}
                        />
                    </div>
                    <div className="col-md-6 mb-5">
                        <label className="form-label">License Type</label>
                        <select
                            className="form-select"
                            {...driverFormik.getFieldProps('license_type')}
                        >
                            <option value={0}>Select License Type</option>
                            <option value={'1'}>Provisional License</option>
                            <option value={'2'}>Permanent License</option>
                            <option value={'3'}>Commercial License</option>
                        </select>
                    </div>
                    <div className="col-md-6 mb-5">
                        <label className="form-label">License Expiry Date</label>
                        <input
                            type="date"
                            className="form-control"
                            {...driverFormik.getFieldProps('license_expiry_date')}
                        />
                    </div>
                </div>
            </form>
        </>
    );
})


