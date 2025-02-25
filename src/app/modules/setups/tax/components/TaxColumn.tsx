import {ITax} from "../code/_models.ts";
import {ButtonPair} from "../../../../../_metronic/helpers/components/ButtonPair.tsx";
import {ColumnsType} from "antd/es/table";


type columnProps = {
    onEdit: (data: ITax) => void
    onDelete: (data: ITax) => void
}


export const TaxColumns = (props: columnProps) => {

    const column: ColumnsType<ITax> = [
        {
            title: 'Tax ID',
            dataIndex: 'tax_id',

        },
        {
            title: 'Vehicle',
            dataIndex: 'vehicle_id',

        },
        {
            title: 'Tax Amount',
            dataIndex: 'tax_amount',

        },
        {
            title: 'Payment Status',
            dataIndex: 'payment_status',

        },
        {
            title: 'Due Date',
            dataIndex: 'due_date',

        },
        {
            title: 'Actions',
            dataIndex: 'actions',
            width: 100,
            key: 'action',
            render: (record: ITax) => (
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