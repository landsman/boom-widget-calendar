type PropTypes = {
    googleFontFamilyName?: undefined | string;
}

export function GoogleFonts({ googleFontFamilyName = "Open Sans" }: PropTypes) {
    let value = `https://fonts.googleapis.com/css2`;
    value += `?family=${googleFontFamilyName}:wght@400;500;600`
    value += `&family=Poppins:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap`;
    return (
        <>
            <link href='https://fonts.googleapis.com' rel='preconnect' />
            <link
                href={value}
                rel='stylesheet'
            />
        </>
    );
}
