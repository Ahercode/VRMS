

export interface IRegistrationHistory {

    registration_id: number
    vehicle_id: number
    registration_date: string
    expiry_date: string
    status: string
}

export const defaultRegistrationHistoryData: IRegistrationHistory = {

    registration_id: 0,
    vehicle_id: 0,
    registration_date: "",
    expiry_date: "",
    status: ""
}