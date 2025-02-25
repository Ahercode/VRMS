import {useState} from "react";
import {message} from "antd";
import {ButtonConfig} from "../../../../_metronic/helpers/components/ButtonsToRight.tsx";
import {DrivingSchoolColumns} from "./components/DrvingSchoolColumns.tsx";
import {CommonLayout} from "../../../../_metronic/helpers/components/CommonLayout.tsx";
import {DrivingSchoolForm} from "./components/DrivingSchoolForm.tsx";
import {defaultDrivingSchoolData, drivingSchoolData} from "./core/_models.tsx";


const DrivingSchool: React.FC = () => {

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
            label: 'Add Driving School',
            onClick: ()  => showSidebar('add'),
            className: 'btn btn-primary me-3'
        }
    ]

    const handleSaveClick = () => {
        console.log('save clicked')
        message.warning('Not implemented yet')
        setSidebarViewType('none')
    }

    const drivingSchoolColumns = DrivingSchoolColumns({
        onEdit: (data) => {
            showSidebar('edit')
        },
        onDelete: (data) => {
            // setShowModal('delete')
            // setPurchaseOrderData(data)
        },
    })


    return (
        <CommonLayout
            buttons={buttons}
            columns={drivingSchoolColumns}
            sidebarViewType={sidebarViewType}
            showSidebar={showSidebar}
            handleSaveClick={handleSaveClick}
            elemenName={'Driving School'}
            tableData={drivingSchoolData}
            formComponent={
                <DrivingSchoolForm onSubmit={() => {}} formData={defaultDrivingSchoolData} />
            }
        />
    )
}

export default DrivingSchool;