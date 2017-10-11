import { lookUpMatcher } from './store.helpers';

describe('lookUpMatcher tests: ', () => {

  const mockStateCounter = 0;

  const mockLookUp = {
    'TEST_ACTION': (state, action) => state + 1
  };

  it('should be defined', () => {
    expect(lookUpMatcher).toBeDefined();
  });

  it('for unknown action should return state (mockStateCounter)', () => {
    const result = lookUpMatcher(mockLookUp, mockStateCounter, { type: 'UNKNOWN_ACTION ' });
    expect(result).toEqual(mockStateCounter);
  });

  it('for unknown action should return state + 1', () => {
    const result = lookUpMatcher(mockLookUp, mockStateCounter, { type: 'TEST_ACTION' });
    expect(result).toEqual(mockStateCounter + 1);
  });

});
