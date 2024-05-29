const mixins = {
    toolbar: {
        minHeight: 70,
        "@media (min-width:600px)": {
            minHeight: 104,
        },
        "@media (min-width:0px) and (orientation: landscape)": {
            minHeight: 70,
        },
    },
};

export default mixins;
