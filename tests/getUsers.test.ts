import { getUsers } from '../src/getUsers';

describe('getUsers', () => {
  it('should return a list of users', async () => {
    const users = await getUsers();
    expect(users.length).toBeGreaterThan(0);
  });
});
