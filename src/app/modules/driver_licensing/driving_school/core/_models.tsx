
export interface IDrivingSchoolModel {
    school_id: number;
    name: string;
    address: string;
    contact_person: string;
    phone: string;
    email: string;
    accreditation_status: string;
}


export const defaultDrivingSchoolData: IDrivingSchoolModel = {
    school_id: 0,
    name: '',
    address: '',
    contact_person: '',
    phone: '',
    email: '',
    accreditation_status: ''
}