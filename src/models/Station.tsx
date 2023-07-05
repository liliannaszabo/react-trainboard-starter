export type Station = {
    crs: string;
    displayName: string;
    nlc: string;
}

export type StationsListStation = {
    id: number;
    name: string;
    crs: string;
    nlc: string;
}

export interface DropdownStationOption {
    value: string;
    label: string;
}