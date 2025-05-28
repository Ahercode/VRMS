import {IDrivingSchoolModel} from "../core/_models.ts";
import {ColumnsType} from "antd/es/table";
import {ButtonPair} from "../../../../../_metronic/helpers/components/ButtonPair.tsx";


type columnProps = {
    onEdit: (data: IDrivingSchoolModel) => void
    onDelete: (data: IDrivingSchoolModel) => void
}

export const DrivingSchoolColumns = (props: columnProps) => {

    const column: ColumnsType<IDrivingSchoolModel> = [
        {
            title: 'School ID',
            dataIndex: 'school_id',
        },
        {
            title: 'School Name',
            dataIndex: 'school_name',
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
        // {
        //     title: 'Contact Person',
        //     dataIndex: 'contact_person',
        // },
        {
            title: 'Accreditation Status',
            dataIndex: 'email',
        },
        {
            title: 'Actions',
            dataIndex: 'actions',
            width: 100,
            key: 'action',
            render: (record: IDrivingSchoolModel) => (
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
    ];

    return column;
}