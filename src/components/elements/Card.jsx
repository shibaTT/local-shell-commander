export function Card({ item }) {
    const hasIcon = () => {
        if (Object.hasOwn(item, "icon")) {
            return (
                <img
                    alt="team"
                    className="flex-shrink-0 object-cover object-center w-16 h-16 mx-auto -mt-8 rounded-full shadow-xl aboslute"
                    src={item.icon}
                />
            );
        }
    };

    const hasAction = () => {
        if (Object.hasOwn(item, "action")) {
            return (
                <div className="mt-6">
                    <div
                        onClick={() => item.action()}
                        className="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl cursor-pointer hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                        Run
                    </div>
                </div>
            );
        } else {
            return;
        }
    };

    return (
        <div className="relative items-center w-full px-3 py-6 max-w-7xl">
            <div className="grid grid-cols-1">
                <div className="w-full max-w-lg mx-auto my-4 bg-white shadow-xl rounded-xl">
                    {hasIcon()}

                    <div className="p-6 lg:text-center">
                        <span className="mb-8 text-xs font-semibold tracking-widest text-blue-600 uppercase">
                            {Object.hasOwn(item, "category") && item.category}
                        </span>

                        <h4 className="mt-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl whitespace-pre-wrap">
                            {Object.hasOwn(item, "title") && item.title}
                        </h4>

                        <p className="mt-3 text-base leading-relaxed text-gray-500 whitespace-pre-wrap">
                            {Object.hasOwn(item, "description") && item.description}
                        </p>

                        {hasAction()}
                    </div>
                </div>
            </div>
        </div>
    );
}
