

import * as Yup from "yup";
import {forwardRef} from "react";
import {useFormik} from "formik";
import {IInstructorModel} from "../core/_models.tsx";

const instructorSchema = Yup.object().shape({
    vehicleRegNo: Yup.string().required('Vehicle Registration Number is required'),
})

type InstructorProps = {
    onSubmit: (values: IInstructorModel) => void;
    formData: IInstructorModel;
}

type InstructorHandle = {
    submit: () => void;
    isSubmitting?: boolean;
}

export const InstructorForm = forwardRef<InstructorHandle,
    InstructorProps>(({onSubmit, formData}, ref) => {

    const instructorFormik = useFormik({
        initialValues: formData,
        enableReinitialize: true,
        validationSchema: instructorSchema,
        onSubmit: ((values, {resetForm}) => {
            onSubmit(values);
            resetForm();
        })
    });



    return (
        <>
            <form onSubmit={instructorFormik.handleSubmit} className={'form'}>
                <div className="row mb-5">
                    <div className="col-md-6 mb-5">
                        <label className="form-label">First Name</label>
                        <input
                            type="text"
                            className="form-control"
                            {...instructorFormik.getFieldProps('first_name')}
                        />
                    </div>
                    <div className="col-md-6 mb-5">
                        <label className="form-label">Last Name</label>
                        <input
                            type="text"
                            className="form-control"
                            {...instructorFormik.getFieldProps('last_name')}
                        />
                    </div>
                    <div className="col-md-6 mb-5">
                        <label className="form-label">School</label>
                        <input
                            type="text"
                            className="form-control"
                            {...instructorFormik.getFieldProps('school')}
                        />
                    </div>
                    <div className="col-md-6 mb-5">
                        <label className="form-label">Qualifications</label>
                        <input
                            type="text"
                            className="form-control"
                            {...instructorFormik.getFieldProps('qualifications')}
                        />
                    </div>
                    <div className="col-md-6 mb-5">
                        <label className="form-label">License Number</label>
                        <input
                            type="text"
                            className="form-control"
                            {...instructorFormik.getFieldProps('license_number')}
                        />
                    </div>

                </div>
            </form>
        </>
    );
})


