type SimpleJob = {
  codingLanguage: string;
  sourceControl: string;
};
type ComplicatedJob = {
  codingLanguage: string;
  sourceControl: string;
  hasManyMeetings: true;
  reportsToBeCompleted: string[];
};

type QaJob = {
  scriptingLanguage: string;
  hasAutomateTest: true;
};

let simpleJob: SimpleJob = { codingLanguage: 'Ts', sourceControl: 'git' };
let complicateJob: ComplicatedJob = {
  codingLanguage: 'ts',
  sourceControl: 'git',
  hasManyMeetings: true,
  reportsToBeCompleted: ['hourly', 'monthly'],
};
let qaJob: QaJob = { scriptingLanguage: 'Python', hasAutomateTest: true };

simpleJob = complicateJob;
// next line with throw an error
// complicateJob=simpleJob
// this posable because both types have things in common
complicateJob = simpleJob as ComplicatedJob;
complicateJob = <ComplicatedJob>simpleJob;
// next line is not posable because both types are different
// complicateJob=qaJob as ComplicatedJob

// next line is posable because we are using unknown as a bridge
complicateJob = qaJob as unknown as ComplicatedJob;
complicateJob = <ComplicatedJob>(<unknown>qaJob);

// usage: building objects in steps.
// advantage: autocomplete assistance
// disadvantage: the compiler wont compline about incomplete objects.

const complicatedJobInSteps = {} as ComplicatedJob;
complicatedJobInSteps.codingLanguage = 'C';
complicatedJobInSteps.sourceControl = 'git';
complicatedJobInSteps.hasManyMeetings = true;
complicatedJobInSteps.reportsToBeCompleted = ['Daily'];
