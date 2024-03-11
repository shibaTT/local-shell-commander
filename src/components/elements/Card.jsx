export function Card(props) {
    return (
        <div className="relative items-center w-full px-3 py-6 max-w-7xl">
            <div className="grid grid-cols-1">
                <div className="w-full max-w-lg mx-auto my-4 bg-white shadow-xl rounded-xl">
                    {props.children}
                </div>
            </div>
        </div>
    );
}

export function SkeletonCard() {
    return (
        <div className="relative items-center w-full px-3 py-6 max-w-7xl animate-pulse">
            <div className="grid grid-cols-1">
                <div className="w-full max-w-lg mx-auto my-4 bg-white shadow-xl rounded-xl px-6 py-12">
                    <div className="h-6 bg-gray-200 rounded-full dark:bg-gray-300 w-48 mb-4"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-300 max-w-[90%] mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-300 mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-300 max-w-[75%] mb-2.5"></div>
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        </div>
    );
}
