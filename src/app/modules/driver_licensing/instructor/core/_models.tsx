// instructor_id (PK), school_id (FK), name, qualifications,license_number

export interface IInstructorModel {
    instructor_id: number;
    school_id: number;
    school?: string;
    first_name: string;
    last_name: string;
    qualifications: string;
    license_number: string;
}


export const defaultInstructorData: IInstructorModel = {
    instructor_id: 0,
    school_id: 0,
    school: '',
    first_name: '',
    last_name: '',
    qualifications: '',
    license_number: ''
}

export const instructorData = [
    {
        instructor_id: 1,
        school_id: 1,
        school: 'ABC Driving School',
        first_name: 'John',
        last_name: 'Doe',
        qualifications: 'Certified Driving Instructor',
        license_number: '123456789'
    },
    {
        instructor_id: 2,
        school_id: 2,
        school: 'XYZ Driving Academy',
        first_name: 'Jane',
        last_name: 'Smith',
        qualifications: 'Certified Driving Instructor',
        license_number: '987654321'
    },
    {
        instructor_id: 3,
        school_id: 3,
        school: 'Speedy Driving School',
        first_name: 'Alice',
        last_name: 'Johnson',
        qualifications: 'Certified Driving Instructor',
        license_number: '456789123'
    },
    {
        instructor_id: 4,
        school_id: 4,
        school: 'Safe Drive Institute',
        first_name: 'Bob',
        last_name: 'Brown',
        qualifications: 'Certified Driving Instructor',
        license_number: '789123456'
    },
    {
        instructor_id: 5,
        school_id: 5,
        school: 'Drive Safe Academy',
        first_name: 'Charlie',
        last_name: 'White',
        qualifications: 'Certified Driving Instructor',
        license_number: '321654987'
    },

]