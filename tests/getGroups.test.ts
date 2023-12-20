import { getGroups } from '../src/getGroups';

describe('getGroups', () => {
  it('should return a list of groups', async () => {
    const groups = await getGroups();
    expect(groups.length).toBeGreaterThan(0);
  });
});
