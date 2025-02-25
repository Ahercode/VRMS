import {Content} from "../../../../_metronic/layout/components/content";
import {ButtonPair} from "../../../../_metronic/helpers/components/ButtonPair.tsx";
import { Toolbar } from "../../../../_metronic/layout/components/toolbar/Toolbar.tsx";
import {LayoutGroup} from "framer-motion";
import {message, Table} from "antd";
import {useState} from "react";
import {ButtonConfig} from "../../../../_metronic/helpers/components/ButtonsToRight.tsx";
import {VehicleColumns} from "./components/VehicleColumns.tsx";
import {CommonLayout} from "../../../../_metronic/helpers/components/CommonLayout.tsx";
import {VehicleForm} from "./components/VehicleForm.tsx";


const Vehicle: React.FC = () => {

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
            label: 'Add Vehicle',
            onClick: ()  => showSidebar('add'),
            className: 'btn btn-primary me-3'
        }
    ]

    const vehicleColumns = VehicleColumns({
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
            columns={vehicleColumns}
            sidebarViewType={sidebarViewType}
            showSidebar={showSidebar}
            elemenName={'Vehicle'}
            handleSaveClick={handleSaveClick}
            formComponent={
                <VehicleForm onSubmit={() => {}} formData={{
                    vehicle_id:0, vin:'', make:'', model:'', year:'', owner_id:0,
                    vehicle_type:'', registration_status:'', registration_expiry_date:''
                }} />
            }
        />
    )
}

export default Vehicle