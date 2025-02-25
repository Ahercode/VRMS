import {useIntl} from 'react-intl'
import {SidebarMenuItemWithSub} from './SidebarMenuItemWithSub'
import {SidebarMenuItem} from './SidebarMenuItem'

const SidebarMenuMain = () => {
  const intl = useIntl()

  return (
    <>
      <SidebarMenuItem
        to='/dashboard'
        icon='element-11'
        title={intl.formatMessage({id: 'MENU.DASHBOARD'})}
        fontIcon='bi-app-indicator'
      />
    <SidebarMenuItemWithSub
        to='/entries'
        title='Entries'
        icon='profile-circle'
        fontIcon='bi-person'
    >
        <SidebarMenuItem to='/crafted/account/overview' title='Overview' hasBullet={true} />
        <SidebarMenuItem to='/crafted/account/settings' title='Settings' hasBullet={true} />
    </SidebarMenuItemWithSub>

      <SidebarMenuItemWithSub
        to='/setups'
        title='Vehicle Registration'
        icon='gear'
        fontIcon='bi-gear'
      >
        <SidebarMenuItem to='/setups/owners' title='Owners' hasBullet={true} />
        <SidebarMenuItem to='/setups/vehicles' title='Vehicles' hasBullet={true} />
        <SidebarMenuItem to='/setups/registrationHistories' title='Registration Histories' hasBullet={true} />
        <SidebarMenuItem to='/setups/insurances' title='Insurances' hasBullet={true} />
        <SidebarMenuItem to='/setups/taxes' title='Taxes' hasBullet={true} />
      </SidebarMenuItemWithSub>

        <SidebarMenuItemWithSub
            to='/setups'
            title='Driver Licensing'
            icon='scan-barcode'
            fontIcon='scan-barcode'
        >
            <SidebarMenuItem to='/license/drivers' title='Drivers' hasBullet={true} />
            <SidebarMenuItem to='/license/driving_schools' title='Driving Schools' hasBullet={true} />
            <SidebarMenuItem to='/license/licenses' title='License' hasBullet={true} />
            <SidebarMenuItem to='/license/instructors' title='Instructors' hasBullet={true} />
            <SidebarMenuItem to='/license/practical_tests' title='Practical Test' hasBullet={true} />
            <SidebarMenuItem to='/license/theory_tests' title='Theory Tests' hasBullet={true} />
        </SidebarMenuItemWithSub>

    </>
  )
}

export {SidebarMenuMain}
