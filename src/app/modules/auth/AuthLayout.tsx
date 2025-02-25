
import {useEffect} from 'react'
import {Outlet, Link} from 'react-router-dom'
import {toAbsoluteUrl} from '../../../_metronic/helpers'

const AuthLayout = () => {
  useEffect(() => {
    const root = document.getElementById('root')
    if (root) {
      root.style.height = '100%'
    }
    return () => {
      if (root) {
        root.style.height = 'auto'
      }
    }
  }, [])

  return (
    <div className='d-flex flex-column flex-lg-row flex-column-fluid h-100'>
      {/* begin::Body */}
      <div className='d-flex flex-column flex-lg-row-fluid w-lg-50 p-10 order-2 order-lg-1'>
        {/* begin::Form */}
        <div className='d-flex flex-center flex-column flex-lg-row-fluid'>
          {/* begin::Wrapper */}
          <div className='w-lg-500px p-10'>
            <Outlet />
            <div className='text-center text-muted fw-bold pt-7 fs-6'>
              <span className='text-muted fw-bold fs-6'>Powered by</span>
              <a
                  style={{marginLeft: '3px'}}
                  href='https://sipconsult.net'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-primary fw-bolder'
              >
                SIP Consult
              </a>
              <br/>
              <br/>
              <img
                  style={{marginLeft: '15px'}}
                  alt='ENP Production Logo'
                  height="30px"
                  src={toAbsoluteUrl('/media/logos/companyLogo.png')}
              />
            </div>
          </div>
          {/* end::Wrapper */}
        </div>
        {/* end::Form */}
      </div>
      {/* end::Body */}

      {/* begin::Aside */}
      <div
        className='d-flex flex-lg-row-fluid w-lg-50 bgi-size-cover bgi-position-center order-1 order-lg-2'
        style={{backgroundImage: `url(${toAbsoluteUrl('media/misc/auth-bg.png')})`}}
      >
        {/* begin::Content */}
        <div className='d-flex flex-column flex-center py-15 px-5 px-md-15 w-100'>
          {/* begin::Logo */}
          {/*<Link to='/' className='mb-12'>*/}
          {/*  <img alt='Logo' src={toAbsoluteUrl('media/logos/custom-1.png')} className='h-75px' />*/}
          {/*</Link>*/}
          <h1 className="text-white fw-bold">VRMS</h1>
          {/* end::Logo */}

          {/* begin::Image */}
          <img
            className='mx-auto w-275px w-md-50 w-xl-500px mb-10 mb-lg-20'
            src={toAbsoluteUrl('media/misc/auth-screens.png')}
            alt=''
          />
          {/* end::Image */}

          {/* begin::Title */}
          <h1 className='text-white fs-2qx fw-bolder text-center mb-7'>
            Fast, Efficient and Productive
          </h1>
          {/* end::Title */}

          {/* end::Text */}
        </div>
        {/* end::Content */}
      </div>
      {/* end::Aside */}
    </div>
  )
}

export {AuthLayout}
