type Position2 = 'HR' | 'PR' | 'CEO';
async function getSalaryForPosition(position: Position2): Promise<number> {
  return new Promise((resolve, reject) => {
    switch (position) {
      case 'CEO':
        resolve(10000);
        break;
      case 'HR':
        resolve(10000);
        break;
      case 'PR':
        resolve(10000);
        break;

      default:
        reject(`Nor salary for ${position}`);
        break;
    }
  });
}

async function wrapperPosition() {
  try {
    const salary = await getSalaryForPosition('CEO');
    console.log(salary);
  } catch (error) {
    console.log(error);
  }
}
wrapperPosition();
