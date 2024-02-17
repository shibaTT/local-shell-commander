interface ModalInterface {
    name: string;
    title: string;
    state: boolean;
    action(): void;
    children: React.ReactNode;
}

export function Modal(props: ModalInterface) {
    return (
        <div
            id={props.name}
            tabIndex={-1}
            aria-hidden="true"
            className={`overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 max-h-full ${
                props.state ? "" : "hidden"
            }`}
        >
            <div className="relative p-4 w-full max-w-md max-h-full flex justify-center items-center inset-1/2 -translate-x-1/2 -translate-y-1/2">
                {/* Modal content */}
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    {/* Modal header */}
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            {props.title}
                        </h3>
                        <button
                            type="button"
                            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                            data-modal-toggle={props.name}
                            onClick={props.action}
                        >
                            <svg
                                className="w-3 h-3"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 14"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                />
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>

                    {props.children}
                </div>
            </div>

            <div
                className="w-full h-full bg-slate-950 opacity-50 absolute top-0 left-0 -z-10"
                onClick={props.action}
            ></div>
        </div>
    );
}
