import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { getProfileForm } from './getProfileForm';

describe('getProfileForm.test', () => {
    test('return error', () => {
        const data = {
            username: 'admin',
            age: 28,
            firstname: 'Firstname',
            lastname: 'Lastname',
            country: Country.Russia,
            city: 'City',
            currency: Currency.RUB,
        };
        const state:DeepPartial<StateSchema> = {
            profile: { form: data },
        };
        expect(getProfileForm(state as StateSchema)).toEqual(data);
    });
    test('should work with empty state', () => {
        const state:DeepPartial<StateSchema> = {};
        expect(getProfileForm(state as StateSchema)).toEqual(undefined);
    });
});
