

export interface IInsurance {
    insurance_id: number
    vehicle_id: number
    policy_number: string
    provider: string
    expiry_date: string
}

export const defaultInsuranceData: IInsurance = {
    insurance_id: 0,
    vehicle_id: 0,
    policy_number: '',
    provider: '',
    expiry_date: ''
}



