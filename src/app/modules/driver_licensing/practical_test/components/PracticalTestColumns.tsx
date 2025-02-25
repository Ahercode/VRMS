import {IPracticalTestModel} from "../core/_models.tsx";
import {ButtonPair} from "../../../../../_metronic/helpers/components/ButtonPair.tsx";
import {ColumnsType} from "antd/es/table";


type columnProps = {
    onEdit: (data: IPracticalTestModel) => void
    onDelete: (data: IPracticalTestModel) => void
}

export const PracticalTestColumns = (props: columnProps) => {

    const column:ColumnsType<IPracticalTestModel> = [
        {
            title: 'Practical Test ID',
            dataIndex: 'practical_test_id',
        },
        {
            title: 'Driver',
            dataIndex: 'national_id',
        },
        {
            title: 'Instructor',
            dataIndex: 'instructor_id',
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
            render: (record: IPracticalTestModel) => (
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