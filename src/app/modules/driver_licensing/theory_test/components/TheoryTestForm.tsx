

import * as Yup from "yup";
import {forwardRef} from "react";
import {useFormik} from "formik";
import {ITheoryTestModel} from "../core/_models.tsx";

const theoryTestSchema = Yup.object().shape({
    vehicleRegNo: Yup.string().required('Vehicle Registration Number is required'),
})

type TheoryTestProps = {
    onSubmit: (values: ITheoryTestModel) => void;
    formData: ITheoryTestModel;
}

type TheoryTestHandle = {
    submit: () => void;
    isSubmitting?: boolean;
}

export const TheoryTestForm = forwardRef<TheoryTestHandle,
    TheoryTestProps>(({onSubmit, formData}, ref) => {

    const theoryTestFormik = useFormik({
        initialValues: formData,
        enableReinitialize: true,
        validationSchema: theoryTestSchema,
        onSubmit: ((values, {resetForm}) => {
            onSubmit(values);
            resetForm();
        })
    });



    return (
        <>
            <form onSubmit={theoryTestFormik.handleSubmit} className={'form'}>
                <div className="row mb-5">
                    <div className="col-md-6 mb-5">
                        <label className="form-label">Driver</label>
                        <select
                            className="form-select"
                            {...theoryTestFormik.getFieldProps('driver_id')}
                        >
                            <option value={0}>Select Driver</option>
                        </select>
                    </div>
                    <div className="col-md-6 mb-5">
                        <label className="form-label">Score</label>
                        <input
                            type="number"
                            className="form-control"
                            {...theoryTestFormik.getFieldProps('score')}
                        />
                    </div>
                    <div className="col-md-6 mb-5">
                        <label className="form-label">Pass Status</label>
                        <input
                            type="text"
                            className="form-control"
                            {...theoryTestFormik.getFieldProps('pass_status')}
                        />
                    </div>
                    <div className="col-md-6 mb-5">
                        <label className="form-label">Test Date</label>
                        <input
                            type="date"
                            className="form-control"
                            {...theoryTestFormik.getFieldProps('expiry_date')}
                        />
                    </div>


                </div>
            </form>
        </>
    );
})


