import {ILicenseModel} from "../core/_models.tsx";
import {ButtonPair} from "../../../../../_metronic/helpers/components/ButtonPair.tsx";
import {ColumnsType} from "antd/es/table";


type columnProps = {
    onEdit: (data: ILicenseModel) => void
    onDelete: (data: ILicenseModel) => void
}

export const LicenseColumns = (props: columnProps) => {

    const column:ColumnsType<ILicenseModel> = [
        {
            title: 'License ID',
            dataIndex: 'license_id',
        },
        {
            title: 'Driver',
            dataIndex: 'driver_id',
        },
        {
            title: 'License Number',
            dataIndex: 'license_type',
        },
        {
            title: 'Issue Date',
            dataIndex: 'issue_date',
        },
        {
            title: 'Expiry Date',
            dataIndex: 'expiry_date',
        },
        {
            title: 'Status',
            dataIndex: 'status',
        },

        {
            title: 'Actions',
            dataIndex: 'actions',
            width: 100,
            key: 'action',
            render: (record: ILicenseModel) => (
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
            )
        }
    ]

    return column
}

