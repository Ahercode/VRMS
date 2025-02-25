import {IOwner} from "../core/_models.ts";
import {ButtonPair} from "../../../../../_metronic/helpers/components/ButtonPair.tsx";
import {ColumnsType} from "antd/es/table";


type columnProps = {
    onEdit: (data: IOwner) => void
    onDelete: (data: IOwner) => void
}

export const OwnerColumns = (props: columnProps) => {

    const column: ColumnsType<IOwner> = [
        {
            title: 'Owner ID',
            dataIndex: 'owner_id',

        },
        {
            title: 'National ID',
            dataIndex: 'national_id',

        },
        {
            title: 'First Name',
            dataIndex: 'first_name',

        },{
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
            title: 'Actions',
            dataIndex: 'actions',
            width: 100,
            key: 'action',
            render: (record: IOwner) => (
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