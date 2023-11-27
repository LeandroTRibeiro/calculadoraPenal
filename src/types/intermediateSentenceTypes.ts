export type IntermediateSentenceType = {
    aggravating: {
        relapse: boolean,
        crimeMotive: boolean,
        LeadershipOrOrganizationOfCrime: boolean, 
        CoercionOrInducementToCommitCrime: boolean,
        instigationOrAuthority: boolean,
        crimeForPayment: boolean,
    },
    mitigating: {
        minorAgeOrSenior: boolean,
        ignoranceOfLaw: boolean,
        agentFactors: boolean,
    }
};

export type AggravatingType = "relapse" | "crimeMotive" | "LeadershipOrOrganizationOfCrime" |  "CoercionOrInducementToCommitCrime" | "instigationOrAuthority" | "crimeForPayment";

export type MitigatingType = "minorAgeOrSenior" | "ignoranceOfLaw" | "agentFactors";