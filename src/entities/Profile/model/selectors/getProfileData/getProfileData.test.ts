import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { getProfileData } from './getProfileData';

describe('getProfileData.test', () => {
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
            profile: { data },
        };
        expect(getProfileData(state as StateSchema)).toEqual(data);
    });
    test('should work with empty state', () => {
        const state:DeepPartial<StateSchema> = {};
        expect(getProfileData(state as StateSchema)).toEqual(undefined);
    });
});
