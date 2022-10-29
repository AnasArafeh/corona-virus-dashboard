export const cardStyles = {
    container: {
        borderRadius: 10,
        marginLeft: 10,
        marginRight: 10,
        padding: 16,
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        boxShadow: "rgb(255 255 255 / 90%) 0rem 0rem 0.0625rem 0.0625rem inset, rgb(0 0 0 / 5%) 0rem 1.25rem 1.6875rem 0rem"
    },
    wordsContainer: {
        display: "flex",
        flexDirection: "column"
    },
    header: {
        fontSize: "0.875rem",
        lineHeight: 1.5,
        letterSpacing: "0.02857em",
        textTransform: "capitalize",
        verticalAlign: "unset",
        textDecoration: "none",
        color: "rgb(103, 116, 142)",
        fontWeight: 700
    },
    subHeader: {
        margin: 0,
        fontSize: "1.25rem",
        lineHeight: 1.375,
        letterSpacing: "0em",
        opacity: 1,
        verticalAlign: "unset",
        textTransform: "none",
        color: "rgb(52, 71, 103)",
        fontWeight: 700,
        paddingLeft: "1px"
    },
    iconContainer: {
        display: "flex",
        alignItems: "center",
        borderRadius: "0.5rem",
        height: "3rem",
        width: "3rem",
        background: "linear-gradient(310deg, rgb(33, 82, 255), rgb(33, 212, 253))",
        boxShadow: "rgb(20 20 20 / 12%) 0rem 0.25rem 0.375rem -0.0625rem, rgb(20 20 20 / 7%) 0rem 0.125rem 0.25rem -0.0625rem",
        justifyContent: "center",
        opacity: 1,
        marginLeft: "auto"
    },
    icon: {
        display: "inline-block",
        fontSize: "1.25rem !important",
        flexShrink: 0,
        textAlign: "center",
        userSelect: "none",
        width: "1em",
        height: "1em",
        color: "rgb(255, 255, 255)"
    },
    loader: {
        display: "flex",
        padding: "0px",
        justifyContent: "center"
    }

}