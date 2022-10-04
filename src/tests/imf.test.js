import imfReducer, { getDataAction } from '../redux/imf/imf';

jest.mock('../redux/imf/imf');

const toCompare = [{ schemeCode: 100027, schemeName: 'Grindlays Super Saver Income Fund-GSSIF-Half Yearly Dividend' },
  { schemeCode: 100028, schemeName: 'Grindlays Super Saver Income Fund-GSSIF-Quaterly Dividend' },
  { schemeCode: 100029, schemeName: 'Grindlays Super Saver Income Fund-GSSIF-Growth' },
  { schemeCode: 100030, schemeName: 'Grindlays Super Saver Income Fund-GSSIF-Annual Dividend' }];

describe('Test Store', () => {
  test('test imfReducer', () => {
    const initialState = [];
    const fetchedState = imfReducer(initialState, getDataAction);
    expect(fetchedState()).toStrictEqual(toCompare);
  });
});
