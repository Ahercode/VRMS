import {IVehicle} from "../core/_models.ts";
import {ButtonPair} from "../../../../../_metronic/helpers/components/ButtonPair.tsx";
import {ColumnsType} from "antd/es/table";


type columnProps = {
    onEdit: (data: IVehicle) => void
    onDelete: (data: IVehicle) => void
}

export const VehicleColumns = (props: columnProps) => {

    const column: ColumnsType<IVehicle> = [
        {
            title: 'Vehicle ID',
            dataIndex: 'vehicle_id',

        },
        {
            title: 'VIN',
            dataIndex: 'vin',

        },
        {
            title: 'Make',
            dataIndex: 'make',

        },
        {
            title: 'Model ',
            dataIndex: 'model',

        },
        {
            title: 'Year',
            dataIndex: 'year',

        },
        {
            title: 'Owner ',
            dataIndex: 'owner_id',

        },
        {
            title: 'Owner ',
            dataIndex: 'owner_id',

        },
        {
            title: 'Registration Status',
            dataIndex: 'registration_status',

        },
        {
            title: 'Registration Expiry Date',
            dataIndex: 'registration_expiry_date',
        },
        {
            title: 'Actions',
            dataIndex: 'actions',
            width: 100,
            key: 'action',
            render: (record: IVehicle) => (
                <div className={'d-flex flex-row gap-2'}>

                    <ButtonPair
                        positiveText={''}
                        positiveAction={() => props.onEdit(record)}
                        negativeText={''}
                        negativeAction={() => props.onDelete(record)}
                        positiveIcon='pencil'
                        negativeIcon='trash'
                        positiveClassName='btn-light-primary btn-icon'
                        negativeClassName='btn-light-danger btn-icon'
                        showNegative={true}
                        className={'d-flex flex-row align-items-center gap-2'}
                    />
                </div>
            ),
        }
    ]

    return column
}