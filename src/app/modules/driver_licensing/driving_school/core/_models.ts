
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

// create a list of driving schools
export const drivingSchoolData = [
    {
        school_id: 1,
        name: 'ABC Driving School',
        address: '123 Main Street',
        contact_person: 'John Doe',
        phone: '123-456-7890',
        email: 'john@gmail.com',
        accreditation_status: 'Accredited'
    },
    {
        school_id: 2,
        name: 'XYZ Driving Academy',
        address: '456 Elm Street',
        contact_person: 'Jane Smith',
        phone: '987-654-3210',
        email: 'jane@gmail.com',
        accreditation_status: 'Accredited'
    },
    {
        school_id: 3,
        name: 'Speedy Driving School',
        address: '789 Oak Street',
        contact_person: 'Alice Johnson',
        phone: '456-789-1234',
        email: 'alice@gmail.com',
        accreditation_status: 'Pending'
    },
    {
        school_id: 4,
        name: 'Safe Drive Institute',
        address: '321 Pine Street',
        contact_person: 'Bob Brown',
        phone: '321-654-9870',
        email: 'bob@gmail.com',
        accreditation_status: 'Accredited'
    },
    {
        school_id: 5,
        name: 'Elite Driving School',
        address: '654 Maple Street',
        contact_person: 'Charlie Davis',
        phone: '654-321-7890',
        email: 'charlie@gmail.com',
        accreditation_status: 'Pending'
    },
    {
        school_id: 6,
        name: 'Prime Driving Academy',
        address: '987 Birch Street',
        contact_person: 'David Wilson',
        phone: '789-123-4567',
        email: 'david@gmail.com',
        accreditation_status: 'Accredited'
    }
];