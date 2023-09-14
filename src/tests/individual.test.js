import getIndividualDataReducer, { getIndividualDataAction } from '../redux/individual/individual';

jest.mock('../redux/individual/individual');

const toCompare = {
  meta:
    {
      fund_house: 'DSP Mutual Fund',
      scheme_type: 'Open Ended Schemes',
      scheme_category: 'Debt Scheme - Gilt Fund',
      scheme_code: 100086,
      scheme_name: 'DSP Government Securities Fund - Regular Plan - IDCW - Monthly',
    },
  data: [{ date: '03-10-2022', nav: '10.70250' }, { date: '30-09-2022', nav: '10.71460' }],
  status: 'SUCCESS',
};

describe('Test Store', () => {
  test('test getIndividualDataReducer', () => {
    const initialState = [];
    const fetchedState = getIndividualDataReducer(initialState, getIndividualDataAction);
    expect(fetchedState()).toStrictEqual(toCompare);
  });
});
