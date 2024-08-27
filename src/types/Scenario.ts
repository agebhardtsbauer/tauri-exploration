interface Navigation {
	id: string;
	name: string;
}

interface Keyboard {
	id: string;
	name: string;
}

interface Mouse {
	id: string;
	name: string;
}

interface Step {
	Action: Keyboard | Mouse | Navigation;
}

interface TestCaseMap {
	id: string;
	name: string;
	tree: string;
}

export type Scenario = {
	id: string;
	team: string;
	name: string;
	description: string;
	TestCaseMap: TestCaseMap;
	Steps: Step[];
};

export type DemoScenaro = {
	id: string;
	team: string;
	name: string;
	description: string;
};
