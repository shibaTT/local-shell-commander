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
