

export interface IDriverModel {
    driver_id: number;
    national_id: string;
    first_name: string;
    last_name: string;
    address: string;
    phone: string;
    email: string;
    license_type: string;
    license_expiry_date: string;
}


export const defaultDriverData: IDriverModel = {
    driver_id: 0,
    national_id: '',
    first_name: '',
    last_name: '',
    address: '',
    phone: '',
    email: '',
    license_type: '',
    license_expiry_date: ''
}

// Help me generate 10 list of drivers

export const driverData = [
    {
        driver_id: 1,
        national_id: '123456789',
        first_name: 'John',
        last_name: 'Doe',
        address: '123 Main Street',
        phone: '123-456-7890',
        email: 'john@gmail.com',
        license_type: 'Provisional License',
        license_expiry_date: '2023-12-31'
    },
    {
        driver_id: 2,
        national_id: '987654321',
        first_name: 'Jane',
        last_name: 'Smith',
        address: '456 Elm Street',
        phone: '987-654-3210',
        email: 'jane@gmail.com',
        license_type: 'Full License',
        license_expiry_date: '2024-05-15'
    },
    {
        driver_id: 3,
        national_id: '456789123',
        first_name: 'Alice',
        last_name: 'Johnson',
        address: '789 Oak Street',
        phone: '456-789-1234',
        email: 'alice@gmail.com',
        license_type: 'Provisional License',
        license_expiry_date: '2023-11-20'
    },
    {
        driver_id: 4,
        national_id: '321654987',
        first_name: 'Bob',
        last_name: 'Brown',
        address: '321 Pine Street',
        phone: '321-654-9870',
        email: 'bob@gmail.com',
        license_type: 'Full License',
        license_expiry_date: '2025-01-10'
    },
    {
        driver_id: 5,
        national_id: '654321789',
        first_name: 'Charlie',
        last_name: 'Davis',
        address: '654 Maple Street',
        phone: '654-321-7890',
        email: 'charlie@gmail.com',
        license_type: 'Provisional License',
        license_expiry_date: '2024-07-22'
    }
];