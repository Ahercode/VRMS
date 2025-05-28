import {message} from "antd";
import {useState} from "react";
import {ButtonConfig} from "../../../../_metronic/helpers/components/ButtonsToRight.tsx";
import {DriverColumns} from "./components/DriverColumns.tsx";
import {CommonLayout} from "../../../../_metronic/helpers/components/CommonLayout.tsx";
import {DriverForm} from "./components/DriverForm.tsx";
import {defaultDriverData, driverData} from "./core/_models.ts";


const Driver: React.FC = () => {
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
            label: 'Add Driver',
            onClick: ()  => showSidebar('add'),
            className: 'btn btn-primary me-3'
        }
    ]

    const handleSaveClick = () => {
        console.log('save clicked')
        message.warning('Not implemented yet')
        setSidebarViewType('none')
    }

    const driverColumns = DriverColumns({
        onEdit: (data) => {
            // showSidebar('edit', data)
        },
        onDelete: (data) => {
            // setShowModal('delete')
            // setPurchaseOrderData(data)
        },
    })

    return (
        <CommonLayout
            buttons={buttons}
            columns={driverColumns}
            sidebarViewType={sidebarViewType}
            showSidebar={showSidebar}
            handleSaveClick={handleSaveClick}
            elemenName={'Driver'}
            tableData={driverData}
            formComponent={
                <DriverForm onSubmit={() => {}} formData={defaultDriverData} />
            }
        />
    )
}

export default Driver;