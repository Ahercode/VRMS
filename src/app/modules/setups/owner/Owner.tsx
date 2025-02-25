
import {useState} from "react";
import {OwnerColumns} from "./components/OwnerColumn.tsx";


import {CommonLayout} from "../../../../_metronic/helpers/components/CommonLayout.tsx";
import {ButtonConfig} from "../../../../_metronic/helpers/components/ButtonsToRight.tsx";
import {message} from "antd";
import {OwnerForm} from "./components/OwnerForm.tsx";

const Owner: React.FC = () => {

    const [sidebarViewType, setSidebarViewType] = useState<'add' | 'edit' | 'none'>('none')


    const showSidebar = (
        sideBarType: 'add' | 'edit' | 'none' = 'add',
        // data: IPurchaseOrderModel = defaultPurchaseOrderData
    ) => {
        setSidebarViewType(sideBarType)
        // setPurchaseOrderData(data)
    }

    const buttons: ButtonConfig[] = [
        {
            label: 'Add Owner',
            onClick: ()  => showSidebar('add'),
            className: 'btn btn-primary me-3'
        }
    ]

    const ownerColumns = OwnerColumns({
        onEdit: (data) => {
            // showSidebar('edit', data)
        },
        onDelete: (data) => {
            // setShowModal('delete')
            // setPurchaseOrderData(data)
        },
    })

    const handleSaveClick = () => {
        console.log('save clicked')
        message.warning('Not implemented yet')
        setSidebarViewType('none')
    }


    return (
        <CommonLayout
            buttons={buttons}
            columns={ownerColumns}
            sidebarViewType={sidebarViewType}
            showSidebar={showSidebar}
            elemenName={'Owner'}
            handleSaveClick={handleSaveClick}
            formComponent={
                <OwnerForm onSubmit={() => {}} formData={{
                    owner_id:0, first_name: '', last_name: '', email: '', phone: '', address: '',
                    national_id: ''
                }} />
            }
        />
    )
}

export default Owner