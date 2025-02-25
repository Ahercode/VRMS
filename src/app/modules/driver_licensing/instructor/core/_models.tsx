// instructor_id (PK), school_id (FK), name, qualifications,license_number

export interface IInstructorModel {
    instructor_id: number;
    school_id: number;
    first_name: string;
    last_name: string;
    qualifications: string;
    license_number: string;
}


export const defaultInstructorData: IInstructorModel = {
    instructor_id: 0,
    school_id: 0,
    first_name: '',
    last_name: '',
    qualifications: '',
    license_number: ''
}