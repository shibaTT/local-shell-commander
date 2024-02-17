export function Content(props) {
    return (
        <main className="flex flex-col flex-1 w-0 overflow-hidden overflow-y-auto h-screen bg-slate-50 focus:outline-none">
            <div className="py-6">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
                    <div className="py-4">
                        <div className="rounded-lg h-96">{props.children}</div>
                    </div>
                </div>
            </div>
        </main>
    );
}
