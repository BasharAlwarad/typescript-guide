type Level = 'Junior' | 'Senior' | 'Expert';
type Position = 'HR' | 'PR' | 'Programer';

type LeveledPosition = `${Level} ${Position}`;

type Prefixed<Prefix extends string, T extends string> = `${Prefix} ${T}`;

let techPosition: Prefixed<'Tech', Position>;

// Intrinsic string manipulation type

let lowerCasePositions: Lowercase<Position>;
let upperCasePositions: Uppercase<Position>;
let unCapitalizedCasePositions: Uncapitalize<Position>;
let CapitalizedCasePositions: Capitalize<Position>;
