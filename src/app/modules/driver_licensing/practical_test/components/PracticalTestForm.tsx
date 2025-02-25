

import * as Yup from "yup";
import {forwardRef} from "react";
import {useFormik} from "formik";
import {IPracticalTestModel} from "../core/_models.tsx";

const practicalTestSchema = Yup.object().shape({
    vehicleRegNo: Yup.string().required('Vehicle Registration Number is required'),
})

type PracticalTestProps = {
    onSubmit: (values: IPracticalTestModel) => void;
    formData: IPracticalTestModel;
}

type PracticalTestHandle = {
    submit: () => void;
    isSubmitting?: boolean;
}

export const PracticalTestForm = forwardRef<PracticalTestHandle,
    PracticalTestProps>(({onSubmit, formData}, ref) => {

    const practicalTestFormik = useFormik({
        initialValues: formData,
        enableReinitialize: true,
        validationSchema: practicalTestSchema,
        onSubmit: ((values, {resetForm}) => {
            onSubmit(values);
            resetForm();
        })
    });



    return (
        <>
            <form onSubmit={practicalTestFormik.handleSubmit} className={'form'}>
                <div className="row mb-5">
                    <div className="col-md-6 mb-5">
                        <label className="form-label">Driver</label>
                        <select
                            className="form-select"
                            {...practicalTestFormik.getFieldProps('driver_id')}
                        >
                            <option value={0}>Select Driver</option>
                        </select>
                    </div>
                    <div className="col-md-6 mb-5">
                        <label className="form-label">Instructor</label>
                        <select
                            className="form-select"
                            {...practicalTestFormik.getFieldProps('instructor_id')}
                        >
                            <option value={0}>Select Instructor</option>
                        </select>
                    </div>
                    <div className="col-md-6 mb-5">
                        <label className="form-label">Score</label>
                        <input
                            type="number"
                            className="form-control"
                            {...practicalTestFormik.getFieldProps('score')}
                        />
                    </div>
                    <div className="col-md-6 mb-5">
                        <label className="form-label">Pass Status</label>
                        <input
                            type="text"
                            className="form-control"
                            {...practicalTestFormik.getFieldProps('pass_status')}
                        />
                    </div>
                    <div className="col-md-6 mb-5">
                        <label className="form-label">Test Date</label>
                        <input
                            type="date"
                            className="form-control"
                            {...practicalTestFormik.getFieldProps('expiry_date')}
                        />
                    </div>


                </div>
            </form>
        </>
    );
})


