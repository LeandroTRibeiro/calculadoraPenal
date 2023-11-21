export type CircumstancesType = {
    name: "Minorante" | "Majorante" | "",
    weight: {
        numerator: number,
        denominator: number
    },
    description: string
};
