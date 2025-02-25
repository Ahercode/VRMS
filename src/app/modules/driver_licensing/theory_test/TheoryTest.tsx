import {useState} from "react";
import {message} from "antd";
import {ButtonConfig} from "../../../../_metronic/helpers/components/ButtonsToRight.tsx";
import {TheoryTestColumns} from "./components/TheoryTestColumns.tsx";
import {CommonLayout} from "../../../../_metronic/helpers/components/CommonLayout.tsx";
import {TheoryTestForm} from "./components/TheoryTestForm.tsx";
import {defaultTheoryTestData} from "./core/_models.tsx";


const TheoryTest: React.FC = () => {

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
            label: 'Add Theory Test',
            onClick: ()  => showSidebar('add'),
            className: 'btn btn-primary me-3'
        }
    ]

    const theoryTestColumns = TheoryTestColumns({
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
            columns={theoryTestColumns}
            sidebarViewType={sidebarViewType}
            showSidebar={showSidebar}
            handleSaveClick={handleSaveClick}
            elemenName={'Theory Test'}
            formComponent={
                <TheoryTestForm onSubmit={() => {}} formData={defaultTheoryTestData} />
            }
        />
    )
}

export default TheoryTest;