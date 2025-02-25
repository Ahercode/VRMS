
import {useState} from "react";
import {ButtonConfig} from "../../../../_metronic/helpers/components/ButtonsToRight.tsx";
import {InsuranceColumns} from "./components/InsuranceColumn.tsx";
import {CommonLayout} from "../../../../_metronic/helpers/components/CommonLayout.tsx";
import {InsuranceForm} from "./components/InsuranceForm.tsx";
import {message} from "antd";

const Insurance: React.FC = () => {

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
            label: 'Add Insurance',
            onClick: ()  => showSidebar('add'),
            className: 'btn btn-primary me-3'
        }
    ]

    const insuranceColumns = InsuranceColumns({
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
            columns={insuranceColumns}
            sidebarViewType={sidebarViewType}
            showSidebar={showSidebar}
            handleSaveClick={handleSaveClick}
            elemenName={'Insurance'}
            formComponent={
                <InsuranceForm onSubmit={() => {}} formData={{vehicle_id:0,
                    provider: '', policy_number: '', expiry_date: '', insurance_id: 0

                }} />
            }
        />
    )
}

export default Insurance