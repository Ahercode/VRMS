import {IInstructorModel} from "../core/_models.tsx";
import {ButtonPair} from "../../../../../_metronic/helpers/components/ButtonPair.tsx";
import {ColumnsType} from "antd/es/table";


type columnProps = {
    onEdit: (data: IInstructorModel) => void
    onDelete: (data: IInstructorModel) => void
}


export const InstructorColumns = (props: columnProps) => {

    const column: ColumnsType<IInstructorModel> = [
        {
            title: 'Instructor ID',
            dataIndex: 'instructor_id',
        },
        {
            title:'First Name',
            dataIndex: 'first_name',
        },
        {
            title:'Lastname',
            dataIndex: 'last_name',
        },
        {
            title: 'School',
            dataIndex: 'school_id',
        },
        {
            title: 'Qualifications',
            dataIndex: 'license_type',
        },
        {
            title: 'License Number',
            dataIndex: 'license_number',
        },
        {
            title: 'Actions',
            dataIndex: 'actions',
            width: 100,
            key: 'action',
            render: (record: IInstructorModel) => (
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