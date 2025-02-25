
export interface ITheoryTestModel {
    test_id: number;
    driver_id: number;
    score: number;
    pass_status: string;
    test_date: string;
}

export const defaultTheoryTestData: ITheoryTestModel = {
    test_id: 0,
    driver_id: 0,
    score: 0,
    pass_status: '',
    test_date: ''
}