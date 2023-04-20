export type IframeMessengerTypes = {
    handleContentResize(organizerId: string): void
    handleContentInitialized(organizerId: string): void
}

/**
 * ⚠️ this value have to match with: "./public/api/loader.js"
 */
const source = 'boom-events-org-calendar__event-listener-origin';

export function useIframeMessenger(): IframeMessengerTypes {
    const handleContentResize = (organizerId: string) => {
        const height = window.document.body.scrollHeight + 50;
        window.parent.postMessage(
            {
                source: source,
                type: 'resize',
                height: height,
                organizerId,
            },
            '*',
        );
    };

    const handleContentInitialized = (organizerId: string) => {
        window.parent.postMessage(
            {
                source: source,
                type: 'initialized',
                organizerId,
            },
            '*',
        );
    };

    return {
        handleContentResize,
        handleContentInitialized,
    }
}
