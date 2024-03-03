const HomeIcon = () => {
    return (
        <svg
            width="20"
            height="20"
            fill="currentColor"
            viewBox="0 0 2048 1792"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M1070 1178l306-564h-654l-306 564h654zm722-282q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z" />
        </svg>
    );
};

export const grandData = [
    {
        title: "Home",
        icon: <HomeIcon />,
        link: "/",
    },
    {
        title: "パルワールド",
        icon: <HomeIcon />,
        link: "/palworld",
    },
    {
        title: "Switchbot",
        icon: <HomeIcon />,
        link: "/switchbot",
    },
];
