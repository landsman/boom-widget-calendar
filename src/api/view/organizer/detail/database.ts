import {Organizer} from "@local/api/view/organizer/detail/types";
import {CustomTheme} from "@local/api/view/organizer/detail/themes/_custom";

/**
 * this would be nice API!
 *
 * Check organization events online on connect:
 * - Prod: https://connect.boomevents.org/cs/organizer/<id>
 * - Stage: https://connect.boomevents.dev/cs/organizer/<id>
 *
 */
export const organizersDatabase: Organizer[] = [
    {
        // michal landsman @ stage
        id: "e43780b9-a220-42d3-a026-cc97875a61e3",
        production: false,
        customTheme: CustomTheme.KVANTARIO,
        features: {
            allowTimeSlots: true,
        },
    },
    {
        // kvantario @ stage
        id: "e7af7792-38d0-4ba3-9024-330b6e273725",
        production: false,
        customTheme: CustomTheme.KVANTARIO,
        features: {
            allowTimeSlots: true,
        },
    },
    {
        // kvantario @ production
        id: "e637ebde-913c-4339-bb45-615293ef191c",
        production: true,
        customTheme: CustomTheme.KVANTARIO,
        features: {
            allowTimeSlots: true,
        },
    },
    {
        // Pravčická brána @ stage
        id: "714dbaac-adb1-472a-b00e-81da7eb7f216",
        production: false,
        customTheme: CustomTheme.PRAVCICKA_BRANA,
        features: null,
    },
    {
        // Pravčická brána @ prod
        id: "8fabf06c-0078-47e4-9c30-3f17827da0ab",
        production: true,
        customTheme: CustomTheme.PRAVCICKA_BRANA,
        features: null,
    },
    {
        // michal landsman 2 @ stage
        id: "37b08079-4066-4156-be9d-a5637d0d0ee7",
        production: false,
        customTheme: CustomTheme.PRAVCICKA_BRANA,
        features: null,
    },
    {
        // PubQuiz #1 @ stage
        id: "46ca6cbc-7394-4efc-a270-63e43ceb1d4c",
        production: false,
        customTheme: CustomTheme.PUBQUIZ,
        features: {
            allowTimeSlots: true,
        },
    },
    {
        // PubQuiz #2 @ stage
        id: "ffae5cd6-ed6e-41f2-8409-17b5e8d38a5a",
        production: false,
        customTheme: CustomTheme.PUBQUIZ,
        features: {
            allowTimeSlots: true,
        },
    },
    {
        // PubQuiz #1 @ production
        id: "8f0e49eb-9416-4de9-a878-488e4665d682",
        production: true,
        customTheme: CustomTheme.PUBQUIZ,
        features: {
            allowTimeSlots: true,
        },
    },
]
