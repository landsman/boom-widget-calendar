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
        // michal landsman 2 @ stage
        id: "37b08079-4066-4156-be9d-a5637d0d0ee7",
        production: false,
        customTheme: CustomTheme.PRAVCICKA_BRANA,
        features: null,
    },
]
