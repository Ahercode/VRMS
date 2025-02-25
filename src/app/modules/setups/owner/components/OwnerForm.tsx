
import * as Yup from "yup";
import {forwardRef} from "react";
import {useFormik} from "formik";
import {IOwner} from "../core/_models.ts";

const ownerSchema = Yup.object().shape({
    vehicleRegNo: Yup.string().required('Vehicle Registration Number is required'),
})

type OwnerProps = {
    onSubmit: (values: IOwner) => void;
    formData: IOwner;
}

type OwnerHandle = {
    submit: () => void;
    isSubmitting?: boolean;
}

export const OwnerForm = forwardRef<OwnerHandle,
    OwnerProps>(({onSubmit, formData}, ref) => {

    const ownerFormik = useFormik({
        initialValues: formData,
        enableReinitialize: true,
        validationSchema: ownerSchema,
        onSubmit: ((values, {resetForm}) => {
            onSubmit(values);
            resetForm();
        })
    });


    return (
        <>
            <form onSubmit={ownerFormik.handleSubmit} className={'form'}>
                <div className="row mb-5">
                    <div className="col-md-6 mb-5">
                        <label className="form-label">National ID </label>
                        <input
                            type="text"
                            className="form-control"
                            {...ownerFormik.getFieldProps('national_id')}
                        />
                    </div>
                    <div className="col-md-6 mb-5">
                        <label className="form-label">First Name</label>
                        <input
                            type="text"
                            className="form-control"
                            {...ownerFormik.getFieldProps('first_name')}
                        />
                    </div>
                    <div className="col-md-6 mb-5">
                        <label className="form-label"> Last Name</label>
                        <input
                            type="text"
                            className="form-control"
                            {...ownerFormik.getFieldProps('last_name')}
                        />
                    </div>
                    <div className="col-md-6 mb-5">
                        <label className="form-label">Address</label>
                        <input
                            type="text"
                            className="form-control"
                            {...ownerFormik.getFieldProps('address')}
                        />
                    </div> <div className="col-md-6 mb-5">
                        <label className="form-label">Phone</label>
                        <input
                            type="text"
                            className="form-control"
                            {...ownerFormik.getFieldProps('phone')}
                        />
                    </div> <div className="col-md-6 mb-5">
                        <label className="form-label">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            {...ownerFormik.getFieldProps('email')}
                        />
                    </div>

                </div>
            </form>
        </>
    );
})


