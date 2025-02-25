
import {CommonLayout} from "../../../../_metronic/helpers/components/CommonLayout.tsx";
import {ButtonConfig} from "../../../../_metronic/helpers/components/ButtonsToRight.tsx";
import {useState} from "react";
import {TaxColumns} from "./components/TaxColumn.tsx";
import {message} from "antd";
import {TaxForm} from "./components/TaxForm.tsx";


const Tax: React.FC = () => {

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
            label: 'Add Tax',
            onClick: ()  => showSidebar('add'),
            className: 'btn btn-primary me-3'
        }
    ]

    const taxColumns = TaxColumns({
        onEdit: (data) => {
            // showSidebar('edit', data)
        },
        onDelete: (data) => {
            // setShowModal('delete')
            // setPurchaseOrderData(data)
        },}
    )

    const handleSaveClick = () => {
        console.log('save clicked')
        message.warning('Not implemented yet')
        setSidebarViewType('none')
    }

    return (
        <CommonLayout
            buttons={buttons}
            columns={taxColumns}
            sidebarViewType={sidebarViewType}
            showSidebar={showSidebar}
            handleSaveClick={handleSaveClick}
            formComponent={
                <TaxForm onSubmit={() => {}} formData={{
                    tax_id:0, vehicle_id: 0, tax_amount: 0, payment_status: '', due_date: ''
                }} />
            }
            elemenName={'Tax'}
        />
    )
}

export default Tax