
import {KTIcon, toAbsoluteUrl} from '../../../helpers'

const SidebarFooter = () => {
  return (
      <div className='app-sidebar-footer flex-column-auto pt-2 pb-6 px-6' id='kt_app_sidebar_footer'>
          {/*<a*/}
          {/*  href={import.meta.env.VITE_APP_PREVIEW_DOCS_URL}*/}
          {/*  target='_blank'*/}
          {/*  className='btn btn-flex flex-center btn-custom btn-primary overflow-hidden text-nowrap px-0 h-40px w-100'*/}
          {/*  data-bs-toggle='tooltip'*/}
          {/*  data-bs-trigger='hover'*/}
          {/*  data-bs-dismiss-='click'*/}
          {/*  title='Metronic Docs & Components'*/}
          {/*>*/}
          {/*  <span className='btn-label'>Docs & Components</span>*/}
          {/*  <KTIcon iconName='document' className='btn-icon fs-2 m-0' />*/}
          {/*</a>*/}
          {/*<img*/}
          {/*  alt='Logo'*/}
          {/*  src={toAbsoluteUrl('media/logos/companyLogo.png')}*/}
          {/*  className='h-34px app-sidebar-logo-default'*/}
          {/*/>*/}
      </div>
  )
}

export {SidebarFooter}
