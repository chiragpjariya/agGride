import { themeQuartz } from 'ag-grid-community';

// to use myTheme in an application, pass it to the theme grid option
export const myTheme = themeQuartz
	.withParams({
        accentColor: "#15BDE8",
        backgroundColor: "#0C0C0D",
        borderColor: "#ffffff00",
        borderRadius: 20,
        browserColorScheme: "dark",
        cellHorizontalPaddingScale: 1,
        chromeBackgroundColor: {
            ref: "backgroundColor"
        },
        columnBorder: false,
        fontFamily: {
            googleFont: "Roboto"
        },
        fontSize: 16,
        foregroundColor: "#BBBEC9",
        headerBackgroundColor: "#182226",
        headerFontSize: 14,
        headerFontWeight: 500,
        headerTextColor: "#FFFFFF",
        headerVerticalPaddingScale: 0.9,
        iconSize: 20,
        rowBorder: false,
        rowVerticalPaddingScale: 1.2,
        sidePanelBorder: false,
        spacing: 8,
        wrapperBorder: false,
        wrapperBorderRadius: 0
    });
