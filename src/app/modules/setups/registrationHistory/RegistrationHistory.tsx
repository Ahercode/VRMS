import React, {useState} from "react";
import {ButtonConfig} from "../../../../_metronic/helpers/components/ButtonsToRight.tsx";
import {RegistrationHistoryColumns} from "./components/RegistrationColumn.tsx";
import {CommonLayout} from "../../../../_metronic/helpers/components/CommonLayout.tsx";
import {RegistrationHistoryForm} from "./components/RegistrationForm.tsx";
import {message} from "antd";

const RegistrationHistory: React.FC = () => {

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
            label: 'Add Registration History',
            onClick: ()  => showSidebar('add'),
            className: 'btn btn-primary me-3'
        }
    ]

    const registrationHistoryColumns = RegistrationHistoryColumns({
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
            columns={registrationHistoryColumns}
            sidebarViewType={sidebarViewType}
            showSidebar={showSidebar}
            elemenName={'Registration History'}
            handleSaveClick={handleSaveClick}
            formComponent={
                <RegistrationHistoryForm onSubmit={() => {}} formData={{registration_id:0,
                    registration_date: '', expiry_date: '', vehicle_id: 0, status: ''
                }} />
            }
        />
    );
}

export default RegistrationHistory;