import {ITheoryTestModel} from "../core/_models.tsx";
import {ButtonPair} from "../../../../../_metronic/helpers/components/ButtonPair.tsx";
import {ColumnsType} from "antd/es/table";


type columnProps = {
    onEdit: (data: ITheoryTestModel) => void
    onDelete: (data: ITheoryTestModel) => void
}

export const TheoryTestColumns = (props: columnProps) => {

    const column:ColumnsType<ITheoryTestModel> = [
        {
            title: 'Theory Test ID',
            dataIndex: 'theory_test_id',
        },
        {
            title: 'Driver',
            dataIndex: 'driver_id',
        },
        {
            title: 'Score',
            dataIndex: 'score',
        },
        {
            title: 'Pass Status',
            dataIndex: 'pass_status',
        },
        {
            title: 'Test Date',
            dataIndex: 'test_date',
        },
        {
            title: 'Actions',
            dataIndex: 'actions',
            width: 100,
            key: 'action',
            render: (record: ITheoryTestModel) => (
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

    return column;
}