

export interface IVehicle {
    vehicle_id: number
    vin: string
    make: string
    model: string
    year: string
    vehicle_type: string
    owner_id: number
    registration_status: string
    registration_expiry_date: string
}

export const defaultVehicleData: IVehicle = {
    vehicle_id: 0,
    vin: "",
    make: "",
    model: "",
    year: "",
    vehicle_type: "",
    owner_id: 0,
    registration_status: "",
    registration_expiry_date: ""
}