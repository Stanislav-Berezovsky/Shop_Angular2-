import { CustomSortPipe } from './custom-sort.pipe';
import { count } from 'rxjs/operators';

describe('custom-sort pipe', () => {
    let pipe: CustomSortPipe;

    beforeEach(() => {
        pipe = new CustomSortPipe();
    });

    afterEach(() => {
        pipe = null;
    });

    it('should propely sort by defined field', () => {
        const arr = [{ count: 2 }, { count: 1 }];
        const result = pipe.transform(arr, 'count', true);
        expect(result[0].count).toBe(1);
        expect(result[1].count).toBe(2);
    });
});
