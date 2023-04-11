export type FeatureTypes = {
    allowTimeSlots: boolean;
    localeSwitcher?: boolean;
}

/** for app context init */
export const featureDefaultValues: FeatureTypes = {
    allowTimeSlots: false,
    localeSwitcher: false,
}
