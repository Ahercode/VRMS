import {useState} from "react";
import {message} from "antd";
import {LicenseColumns} from "./components/LicenseColumns.tsx";
import {InsuranceForm} from "../../setups/insurance/components/InsuranceForm.tsx";
import {CommonLayout} from "../../../../_metronic/helpers/components/CommonLayout.tsx";
import {ButtonConfig} from "../../../../_metronic/helpers/components/ButtonsToRight.tsx";
import {LicenseForm} from "./components/LicenseForm.tsx";
import {defaultLicenseData} from "./core/_models.tsx";

const License: React.FC = () => {


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
            label: 'Add License',
            onClick: ()  => showSidebar('add'),
            className: 'btn btn-primary me-3'
        }
    ]

    const licenseColumns = LicenseColumns({
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
            columns={licenseColumns}
            sidebarViewType={sidebarViewType}
            showSidebar={showSidebar}
            handleSaveClick={handleSaveClick}
            elemenName={'License'}
            formComponent={
                <LicenseForm onSubmit={() => {}} formData={defaultLicenseData} />
            }
        />
    )
}


export default License;