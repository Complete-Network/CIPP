import React from 'react'
import { CButton, CCol, CContainer, CRow } from '@coreui/react'
import { Helmet } from 'react-helmet'

const Page401 = () => {
  var redirectUri = ''

  if (window.location.href && window.location.href !== undefined) {
    redirectUri = window.location.href
  } else {
    redirectUri = '/home'
  }
  return (
    <div className="min-vh-100 d-flex flex-row align-items-center">
      <Helmet>
        <title>CIPP - 401</title>
      </Helmet>
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={6}>
            <div className="clearfix">
              <h1 className="float-start display-3 me-4">401</h1>
              <h4 className="pt-3">Unauthorized</h4>
              <p className="float-start">
                Access to this resource is denied.
                <br /> <br />
                {/* trigger full page reload using href */}
                <CButton href={`/.auth/login/aad?post_login_redirect_uri=${redirectUri}`}>
                  Back to login
                </CButton>
              </p>
            </div>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Page401
