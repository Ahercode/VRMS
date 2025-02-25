

export interface IOwner {
    owner_id: number
    national_id: string
    first_name: string
    last_name: string
    address: string
    phone: string
    email: string
}

export const defaultOwnerData : IOwner = {
    owner_id: 0,
    national_id: "",
    first_name: "",
    last_name: "",
    address: "",
    phone: "",
    email: ""
}