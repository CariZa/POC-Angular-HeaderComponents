import { RedHeaderComponent } from './red-header.component';

describe('Read Header tests', () => {
    let component;
    beforeEach(() => {
        component = new RedHeaderComponent();
    });

    it('should instantiate the Red Header', () => {
        expect(component).toBeDefined();
    });
});