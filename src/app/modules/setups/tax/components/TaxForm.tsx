

import * as Yup from "yup";
import {forwardRef} from "react";
import {useFormik} from "formik";
import {ITax} from "../code/_models.ts";

const taxSchema = Yup.object().shape({
    vehicleRegNo: Yup.string().required('Vehicle Registration Number is required'),
})

type TaxFormProps = {
    onSubmit: (values: ITax) => void;
    formData: ITax;
}

type TaxFormHandle = {
    submit: () => void;
    isSubmitting?: boolean;
}

export const TaxForm = forwardRef<TaxFormHandle,
    TaxFormProps>(({onSubmit, formData}, ref) => {

    const taxFormik = useFormik({
        initialValues: formData,
        enableReinitialize: true,
        validationSchema: taxSchema,
        onSubmit: ((values, {resetForm}) => {
            onSubmit(values);
            resetForm();
        })
    });



    return (
        <>
            <form onSubmit={taxFormik.handleSubmit} className={'form'}>
                <div className="row mb-5">
                    <div className="col-md-6 mb-5">
                        <label className="form-label">Vehicle</label>
                        <select
                            className="form-select"
                            {...taxFormik.getFieldProps('vehicle_id')}
                        >
                            <option value="">Select Vehicle</option>
                        </select>
                    </div>
                    <div className="col-md-6 mb-5">
                        <label className="form-label">Tax Amount</label>
                        <input
                            type="number"
                            className="form-control"
                            {...taxFormik.getFieldProps('tax_amount')}
                        />
                    </div>
                    <div className="col-md-6 mb-5">
                        <label className="form-label">Payment Status</label>
                        <input
                            type="text"
                            className="form-control"
                            {...taxFormik.getFieldProps('payment_status')}
                        />
                    </div>
                    <div className="col-md-6 mb-5">
                        <label className="form-label">Due Date</label>
                        <input
                            type="date"
                            className="form-control"
                            {...taxFormik.getFieldProps('due_date')}
                        />
                    </div>

                </div>
            </form>
        </>
    );
})


