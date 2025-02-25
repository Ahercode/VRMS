import {IDriverModel} from "../core/_models.tsx";
import {ButtonPair} from "../../../../../_metronic/helpers/components/ButtonPair.tsx";
import {ColumnsType} from "antd/es/table";

type columnProps = {
    onEdit: (data: IDriverModel) => void
    onDelete: (data: IDriverModel) => void
}

export const DriverColumns = (props: columnProps) => {

    const column:ColumnsType<IDriverModel> = [
        {
            title: 'Driver ID',
            dataIndex: 'driver_id',
        },
        {
            title: 'National ID',
            dataIndex: 'national_id',
        },
        {
            title: 'First Name',
            dataIndex: 'first_name',
        },
        {
            title: 'Lastname',
            dataIndex: 'last_name',
        },
        {
            title: 'Address',
            dataIndex: 'address',
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
        },
        {
            title: 'Email',
            dataIndex: 'email',
        },
        {
            title: 'License Type',
            dataIndex: 'license_type',
        },
        {
            title: 'License Expiry Date',
            dataIndex: 'license_expiry_date',
        },
        {
            title: 'Actions',
            dataIndex: 'actions',
            width: 100,
            key: 'action',
            render: (record: IDriverModel) => (
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
        },
    ]

    return column
}

