export function PageTitle(title) {
    if (title != "") {
        return (
            <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
                <h1 className="text-lg text-neutral-600">{title}</h1>
            </div>
        );
    } else {
        return;
    }
}
