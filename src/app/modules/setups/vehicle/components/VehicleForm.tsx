
import * as Yup from "yup";
import {forwardRef} from "react";
import {useFormik} from "formik";
import {IVehicle} from "../core/_models.ts";


const vehicleSchema = Yup.object().shape({
    vehicleRegNo: Yup.string().required('Vehicle Registration Number is required'),
})

type VehicleProps = {
    onSubmit: (values: IVehicle) => void;
    formData: IVehicle;
}

type VehicleHandle = {
    submit: () => void;
    isSubmitting?: boolean;
}

export const VehicleForm = forwardRef<VehicleHandle,
    VehicleProps>(({onSubmit, formData}, ref) => {

    const vehicleFormik = useFormik({
        initialValues: formData,
        enableReinitialize: true,
        validationSchema: vehicleSchema,
        onSubmit: ((values, {resetForm}) => {
            onSubmit(values);
            resetForm();
        })
    });


    return (
        <>
            <form onSubmit={vehicleFormik.handleSubmit} className={'form'}>
                <div className="row mb-5">
                    <div className="col-md-6 mb-5">
                        <label className="form-label">Vin</label>
                        <input
                            type="text"
                            className="form-control"
                            {...vehicleFormik.getFieldProps('vin')}
                        />
                    </div>
                    <div className="col-md-6 mb-5">
                        <label className="form-label">Make</label>
                        <input
                            type="text"
                            className="form-control"
                            {...vehicleFormik.getFieldProps('make')}
                        />
                    </div>
                    <div className="col-md-6 mb-5">
                        <label className="form-label">Model </label>
                        <input
                            type="text"
                            className="form-control"
                            {...vehicleFormik.getFieldProps('model')}
                        />
                    </div>
                    <div className="col-md-6 mb-5">
                        <label className="form-label">Year</label>
                        <input
                            type="text"
                            className="form-control"
                            {...vehicleFormik.getFieldProps('year')}
                        />
                    </div>
                    <div className="col-md-6 mb-5">
                        <label className="form-label">Type</label>
                        <select
                            className="form-select"
                            {...vehicleFormik.getFieldProps('vehicleType')}
                        >
                            <option value="">Select</option>

                        </select>
                    </div>
                    <div className="col-md-6 mb-5">
                        <label className="form-label">Owner</label>
                        <select
                            className="form-select"
                            {...vehicleFormik.getFieldProps('ownerId')}
                        >
                            <option value="">Select</option>


                        </select>
                    </div>

                </div>
            </form>
        </>
    );
})


