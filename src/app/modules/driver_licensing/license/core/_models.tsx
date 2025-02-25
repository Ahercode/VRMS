
export interface ILicenseModel {
    license_id: number;
    driver_id: number;
    license_number: string;
    issue_date: string;
    expiry_date: string;
    status: string;
}

export const defaultLicenseData: ILicenseModel = {
    license_id: 0,
    driver_id: 0,
    license_number: '',
    issue_date: '',
    expiry_date: '',
    status: ''
}