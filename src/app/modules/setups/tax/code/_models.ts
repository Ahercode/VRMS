

export interface ITax {
    tax_id?: number
    vehicle_id: number
    tax_amount: number
    payment_status: string
    due_date: string
}

export const defaultTaxData: ITax = {
    vehicle_id: 0,
    tax_amount: 0,
    payment_status: '',
    due_date: ''
}