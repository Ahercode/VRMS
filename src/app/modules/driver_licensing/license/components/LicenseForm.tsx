

import * as Yup from "yup";
import {forwardRef} from "react";
import {useFormik} from "formik";
import {ILicenseModel} from "../core/_models.tsx";

const licenseSchema = Yup.object().shape({
    vehicleRegNo: Yup.string().required('Vehicle Registration Number is required'),
})

type LicenseProps = {
    onSubmit: (values: ILicenseModel) => void;
    formData: ILicenseModel;
}

type LicenseHandle = {
    submit: () => void;
    isSubmitting?: boolean;
}

export const LicenseForm = forwardRef<LicenseHandle,
    LicenseProps>(({onSubmit, formData}, ref) => {

    const licenseFormik = useFormik({
        initialValues: formData,
        enableReinitialize: true,
        validationSchema: licenseSchema,
        onSubmit: ((values, {resetForm}) => {
            onSubmit(values);
            resetForm();
        })
    });


    return (
        <>
            <form onSubmit={licenseFormik.handleSubmit} className={'form'}>
                <div className="row mb-5">
                    <div className="col-md-6 mb-5">
                        <label className="form-label">Driver</label>
                        <select
                            className="form-select"
                            {...licenseFormik.getFieldProps('driver_id')}
                        >
                            <option value={0}>Select Driver</option>
                        </select>
                    </div>
                    <div className="col-md-6 mb-5">
                        <label className="form-label">License Number</label>
                        <input
                            type="text"
                            className="form-control"
                            {...licenseFormik.getFieldProps('license_number')}
                        />
                    </div>
                    <div className="col-md-6 mb-5">
                        <label className="form-label">Issue Date</label>
                        <input
                            type="date"
                            className="form-control"
                            {...licenseFormik.getFieldProps('issue_date')}
                        />
                    </div>
                    <div className="col-md-6 mb-5">
                        <label className="form-label">Expiry Date</label>
                        <input
                            type="date"
                            className="form-control"
                            {...licenseFormik.getFieldProps('expiry_date')}
                        />
                    </div>
                    <div className="col-md-6 mb-5">
                        <label className="form-label">Status</label>
                        <select
                            className="form-select"
                            {...licenseFormik.getFieldProps('status')}
                        >
                            <option value={0}>Select Status</option>
                            <option value={1}>Active</option>
                            <option value={2}>Pending</option>
                            <option value={3}>InActive</option>
                        </select>
                    </div>

                </div>
            </form>
        </>
    );
})


