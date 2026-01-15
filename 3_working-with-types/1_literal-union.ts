type HR = 'HR';
type PR = 'PR';
type Positions = HR | PR | 'CEO';

function getSalaryForPosition(position: Positions): number | undefined {
  if (position === 'CEO') return 10000;
  if (position === 'PR') return 60000;
  if (position === 'HR') return 50000;
  console.log('invalid position');
  return undefined;
}
