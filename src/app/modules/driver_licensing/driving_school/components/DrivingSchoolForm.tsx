

import * as Yup from "yup";
import {forwardRef} from "react";
import {useFormik} from "formik";
import {IDrivingSchoolModel} from "../core/_models.tsx";

const drivingSchoolSchema = Yup.object().shape({
    vehicleRegNo: Yup.string().required('Vehicle Registration Number is required'),
})

type DrivingSchoolProps = {
    onSubmit: (values: IDrivingSchoolModel) => void;
    formData: IDrivingSchoolModel;
}

type DrivingSchoolHandle = {
    submit: () => void;
    isSubmitting?: boolean;
}

export const DrivingSchoolForm = forwardRef<DrivingSchoolHandle,
    DrivingSchoolProps>(({onSubmit, formData}, ref) => {

    const insuranceFormik = useFormik({
        initialValues: formData,
        enableReinitialize: true,
        validationSchema: drivingSchoolSchema,
        onSubmit: ((values, {resetForm}) => {
            onSubmit(values);
            resetForm();
        })
    });



    return (
        <>
            <form onSubmit={insuranceFormik.handleSubmit} className={'form'}>
                <div className="row mb-5">
                    <div className="col-md-6 mb-5">
                        <label className="form-label">School Name</label>
                        <input
                            type="text"
                            className="form-control"
                            {...insuranceFormik.getFieldProps('school_name')}
                        />
                    </div>
                    <div className="col-md-6 mb-5">
                        <label className="form-label">Address</label>
                        <input
                            type="text"
                            className="form-control"
                            {...insuranceFormik.getFieldProps('address')}
                        />
                    </div>
                    <div className="col-md-6 mb-5">
                        <label className="form-label">Phone</label>
                        <input
                            type="text"
                            className="form-control"
                            {...insuranceFormik.getFieldProps('phone')}
                        />
                    </div>
                    <div className="col-md-6 mb-5">
                        <label className="form-label">Email</label>
                        <input
                            type="text"
                            className="form-control"
                            {...insuranceFormik.getFieldProps('email')}
                        />
                    </div>
                    {/*<div className="col-md-6 mb-5">*/}
                    {/*    <label className="form-label">Contact Person</label>*/}
                    {/*    <input*/}
                    {/*        type="text"*/}
                    {/*        className="form-control"*/}
                    {/*        {...insuranceFormik.getFieldProps('email')}*/}
                    {/*    />*/}
                    {/*</div>*/}
                    <div className="col-md-6 mb-5">
                        <label className="form-label">Accreditation Status</label>
                        <input
                            type="text"
                            className="form-control"
                            {...insuranceFormik.getFieldProps('accreditation_status')}
                        />
                    </div>


                </div>
            </form>
        </>
    );
})


