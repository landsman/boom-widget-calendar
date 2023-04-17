import {CustomTheme} from "@local/api/view/organizer/detail/custom-theme";

export type Organizer = {
    id: string;
    production: boolean;
    customTheme: null | CustomTheme;
}
