
import * as Yup from "yup";
import {forwardRef} from "react";
import {useFormik} from "formik";
import {IInsurance} from "../core/_models.ts";

const insuranceSchema = Yup.object().shape({
    vehicleRegNo: Yup.string().required('Vehicle Registration Number is required'),
})

type InsuranceProps = {
    onSubmit: (values: IInsurance) => void;
    formData: IInsurance;
}

type InsuranceHandle = {
    submit: () => void;
    isSubmitting?: boolean;
}

export const InsuranceForm = forwardRef<InsuranceHandle,
    InsuranceProps>(({onSubmit, formData}, ref) => {

    const insuranceFormik = useFormik({
        initialValues: formData,
        enableReinitialize: true,
        validationSchema: insuranceSchema,
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
                        <label className="form-label">Vehicle</label>
                        <select
                            className="form-select"
                            {...insuranceFormik.getFieldProps('vehicle')}
                        >
                            <option value={0}>Select Vehicle</option>
                        </select>
                    </div>
                    <div className="col-md-6 mb-5">
                        <label className="form-label">Policy Number</label>
                        <input
                            type="text"
                            className="form-control"
                            {...insuranceFormik.getFieldProps('policy_number')}
                        />
                    </div>
                    <div className="col-md-6 mb-5">
                        <label className="form-label">Provider</label>
                        <input
                            type="text"
                            className="form-control"
                            {...insuranceFormik.getFieldProps('provider')}
                        />
                    </div>
                    <div className="col-md-6 mb-5">
                        <label className="form-label">Expiry Date</label>
                        <input
                            type="date"
                            className="form-control"
                            {...insuranceFormik.getFieldProps('expiry_date')}
                        />
                    </div>


                </div>
            </form>
        </>
    );
})


