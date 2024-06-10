import { getFullYear, getFooterCopy, getLatestNotification  } from "./utils";
describe('getFullYear', () =>{
    it('should return the current year', () =>{
        const mockDate = new Date('2024-06-10T00:00:00Z')
        jest.spyOn(global, 'Date').mockImplementation(() => mockDate);

        expect (year).tobe(2024);
        jest.restoreAllMocks();
    });
});