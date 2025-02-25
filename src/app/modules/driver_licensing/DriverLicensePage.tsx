import {PageLink, PageTitle} from "../../../_metronic/layout/core";
import {Navigate, Outlet, Route, Routes} from "react-router-dom";
import Driver from "./driver/Driver.tsx";
import DrivingSchool from "./driving_school/DrivingSchool.tsx";
import Vehicle from "../setups/vehicle/Vehicle.tsx";
import Instructor from "./instructor/Instructor.tsx";
import License from "./license/License.tsx";
import PracticalTest from "./practical_test/PracticalTest.tsx";
import TheoryTest from "./theory_test/TheoryTest.tsx";


const setupBreadCrumbs: Array<PageLink> = [
    {
        title: 'Driver Licensing',
        path: 'license',
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

const DriverLicensePage = () => (
    <Routes>
        <Route
            element={
                <>
                    <Outlet />
                </>
            }
        >
            <Route
                path='drivers'
                element={
                    <>
                        <PageTitle breadcrumbs={setupBreadCrumbs}>Drivers</PageTitle>
                        <Driver />
                    </>
                }
            />
            <Route
                path='instructors'
                element={
                    <>
                        <PageTitle breadcrumbs={setupBreadCrumbs}>Instructors</PageTitle>
                        <Instructor />
                    </>
                }
            />
            <Route
                path='licenses'
                element={
                    <>
                        <PageTitle breadcrumbs={setupBreadCrumbs}>Licenses</PageTitle>
                        <License />
                    </>
                }
            />
            <Route
                path='practical_tests'
                element={
                    <>
                        <PageTitle breadcrumbs={setupBreadCrumbs}>Practical Tests</PageTitle>
                        <PracticalTest />
                    </>
                }
            />
            <Route
                path='theory_tests'
                element={
                    <>
                        <PageTitle breadcrumbs={setupBreadCrumbs}>Theory Tests</PageTitle>
                        <TheoryTest />
                    </>
                }
            />
            <Route
                path='driving_schools'
                element={
                    <>
                        <PageTitle breadcrumbs={setupBreadCrumbs}>Driving Schools</PageTitle>
                        <DrivingSchool />
                    </>
                }
            />
            <Route index element={<Navigate to='/drivers' />} />
        </Route>
    </Routes>
)

export default DriverLicensePage