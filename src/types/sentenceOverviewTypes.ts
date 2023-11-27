import { SentenceRangeType } from "./baseSentencetypes";

export type DosimetryResultsType = {
    baseSentence: SentenceRangeType, 
    intermediateSentence: SentenceRangeType,
    definitiveSentence: SentenceRangeType
};

export type dosimetryPhaseKeyType = "baseSentence" | "intermediateSentence" | "definitiveSentence";

export type TimeUnitType = "days" | "months" | "years";