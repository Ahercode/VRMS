import {useState} from "react";
import {message} from "antd";
import {ButtonConfig} from "../../../../_metronic/helpers/components/ButtonsToRight.tsx";
import {InsuranceColumns} from "../../setups/insurance/components/InsuranceColumn.tsx";
import {InstructorColumns} from "./components/InstructorColumns.tsx";
import {InsuranceForm} from "../../setups/insurance/components/InsuranceForm.tsx";
import {CommonLayout} from "../../../../_metronic/helpers/components/CommonLayout.tsx";
import {InstructorForm} from "./components/InstructorForm.tsx";
import {defaultInstructorData, instructorData} from "./core/_models.tsx";


const Instructor: React.FC = () => {

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
            label: 'Add Instructor',
            onClick: ()  => showSidebar('add'),
            className: 'btn btn-primary me-3'
        }
    ]

    const instructorColumns = InstructorColumns({
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
            columns={instructorColumns}
            sidebarViewType={sidebarViewType}
            showSidebar={showSidebar}
            handleSaveClick={handleSaveClick}
            elemenName={'Instructor'}
            tableData={instructorData}
            formComponent={
                <InstructorForm onSubmit={() => {}} formData={defaultInstructorData} />
            }
        />
    )
}

export default Instructor;