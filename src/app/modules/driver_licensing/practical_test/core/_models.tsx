// test_id (PK), driver_id (FK), instructor_id (FK), score, pass_status,test_date

export interface IPracticalTestModel {
    test_id: number;
    driver_id: number;
    instructor_id: number;
    score: number;
    pass_status: string;
    test_date: string;
}

export const defaultPracticalTestData: IPracticalTestModel = {
    test_id: 0,
    driver_id: 0,
    instructor_id: 0,
    score: 0,
    pass_status: '',
    test_date: ''
}