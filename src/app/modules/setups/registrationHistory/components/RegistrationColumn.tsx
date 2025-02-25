import {IRegistrationHistory} from "../core/_models.ts";
import {ColumnsType} from "antd/es/table";
import {ButtonPair} from "../../../../../_metronic/helpers/components/ButtonPair.tsx";

type columnProps = {
    onEdit: (data: IRegistrationHistory) => void
    onDelete: (data: IRegistrationHistory) => void
}

export const RegistrationHistoryColumns = (props: columnProps) => {

    const column: ColumnsType<IRegistrationHistory> = [
        {
            title: 'Registration ID',
            dataIndex: 'registration_id',

        },
        {
            title: 'Vehicle',
            dataIndex: 'vehicle_id',

        },
        {
            title: 'Registration Dates',
            dataIndex: 'registration_date',

        },
        {
            title: 'Expiring Date',
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
            render: (record: IRegistrationHistory) => (
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
