import {IInsurance} from "../core/_models.ts";
import {ButtonPair} from "../../../../../_metronic/helpers/components/ButtonPair.tsx";
import {ColumnsType} from "antd/es/table";


type columnProps = {
    onEdit: (data: IInsurance) => void
    onDelete: (data: IInsurance) => void
}

export const InsuranceColumns = (props: columnProps) => {

    const column: ColumnsType<IInsurance> = [
        {
            title: 'Insurance ID',
            dataIndex: 'insurance_id',

        },
        {
            title: 'Vehicle',
            dataIndex: 'vehicle_id',

        },
        {
            title: 'Policy Number',
            dataIndex: 'policy_number',

        },
        {
            title: 'Provider',
            dataIndex: 'provider',

        },
        {
            title: 'Expiry Date',
            dataIndex: 'expiry_date',

        },
        {
            title: 'Actions',
            dataIndex: 'actions',
            width: 100,
            key: 'action',
            render: (record: IInsurance) => (
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