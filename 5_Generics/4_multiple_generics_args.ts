const scrumRole = {
  holdsMeetings: false,
  team: ['Team1', 'Team2'],
};
const productOwnerRole = {
  holdsMeetings: false,
  reportsTo: 'UpperManagement',
};

function mergeRoles<T extends object, G extends object>(role1: T, role2: G) {
  return { ...role1, ...role2 };
}

const scrumProductOwnerRole = mergeRoles(scrumRole, productOwnerRole);
console.log(scrumProductOwnerRole);
