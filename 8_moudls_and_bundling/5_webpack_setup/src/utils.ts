export type User = {
  name: string;
};

export function createUser(user: { name: string }): void {
  console.log(`User created: ${user.name}`);
}
