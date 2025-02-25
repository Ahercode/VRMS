import {PageLink, PageTitle} from "../../../_metronic/layout/core";
import {Navigate, Outlet, Route, Routes} from "react-router-dom";
import RegistrationHistory from "./registrationHistory/RegistrationHistory.tsx";
import Owner from "./owner/Owner.tsx";
import Insurance from "./insurance/Insurance.tsx";
import Tax from "./tax/Tax.tsx";
import Vehicle from "./vehicle/Vehicle.tsx";


const setupBreadCrumbs: Array<PageLink> = [
    {
        title: 'Setups',
        path: 'setups',
        isSeparator: false,
        isActive: false,
    },
    {
        title: '',
        path: '',
        isSeparator: true,
        isActive: false,
    },
]

const SetupPage = () => (
    <Routes>
        <Route
            element={
                <>
                    <Outlet />
                </>
            }
        >
            <Route
                path='registrationHistories'
                element={
                    <>
                        <PageTitle breadcrumbs={setupBreadCrumbs}>Registration Histories</PageTitle>
                        <RegistrationHistory />
                    </>
                }
            />

            <Route
                path='owners'
                element={
                    <>
                        <PageTitle breadcrumbs={setupBreadCrumbs}>Owners</PageTitle>
                        <Owner />
                    </>
                }
            />

            <Route
                path='insurances'
                element={
                    <>
                        <PageTitle breadcrumbs={setupBreadCrumbs}>Insurances</PageTitle>
                        <Insurance />
                    </>
                }
            />

            <Route
                path='taxes'
                element={
                    <>
                        <PageTitle breadcrumbs={setupBreadCrumbs}>Taxes</PageTitle>
                        <Tax />
                    </>
                }
            />

            <Route
                path='vehicles'
                element={
                    <>
                        <PageTitle breadcrumbs={setupBreadCrumbs}>Vehicles</PageTitle>
                        <Vehicle />
                    </>
                }
            />

            <Route index element={<Navigate to='/owners' />} />
        </Route>
    </Routes>
)

export default SetupPage