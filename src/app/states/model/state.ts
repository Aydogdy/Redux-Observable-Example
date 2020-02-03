export interface IStates {
    states: UsState[];
    isLoading: boolean;
}

export interface UsState {
    id: number;
    name: string;
    shortName: string;
}
