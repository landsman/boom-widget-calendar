export type IframeMessengerTypes = {
    handleContentResize(organizerId: string): void
    handleContentInitialized(organizerId: string): void
}

const source = 'boom-events-org-calendar__message-origin';

export function useIframeMessenger(): IframeMessengerTypes {
    const handleContentResize = (organizerId: string) => {
        window.parent.postMessage(
            {
                source: source,
                type: 'resize',
                height: window.document.body.scrollHeight + 50,
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
