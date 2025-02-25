import {useState} from "react";
import {message} from "antd";
import {ButtonConfig} from "../../../../_metronic/helpers/components/ButtonsToRight.tsx";
import {InsuranceColumns} from "../../setups/insurance/components/InsuranceColumn.tsx";
import {PracticalTestColumns} from "./components/PracticalTestColumns.tsx";
import {InsuranceForm} from "../../setups/insurance/components/InsuranceForm.tsx";
import {CommonLayout} from "../../../../_metronic/helpers/components/CommonLayout.tsx";
import {PracticalTestForm} from "./components/PracticalTestForm.tsx";
import {defaultPracticalTestData} from "./core/_models.tsx";


const PracticalTest: React.FC = () => {


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
            label: 'Add Practical Test',
            onClick: ()  => showSidebar('add'),
            className: 'btn btn-primary me-3'
        }
    ]

    const practicalTestColumns = PracticalTestColumns({
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
            columns={practicalTestColumns}
            sidebarViewType={sidebarViewType}
            showSidebar={showSidebar}
            handleSaveClick={handleSaveClick}
            elemenName={'Practical Test'}
            formComponent={
                <PracticalTestForm onSubmit={() => {}} formData={defaultPracticalTestData} />
            }
        />
    )
}

export default PracticalTest;