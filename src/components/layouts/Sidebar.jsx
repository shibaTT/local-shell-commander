import { SidebarItems } from "@/components/parts/SidebarItems";
import { grandData } from "@/components/layouts/sidebarData/grandData";
import { shortcutData } from "@/components/layouts/sidebarData/shortcutData";

export function Sidebar() {
    return (
        <aside className="hidden md:flex md:flex-shrink-0">
            <div className="flex flex-col w-64">
                <div className="flex flex-col flex-grow pt-5 overflow-y-auto border-r bg-neutral-800 h-screen">
                    <div className="flex flex-col items-center flex-shrink-0 px-4 sticky top-0">
                        <a
                            className="px-8 text-left focus:outline-none"
                            href="/groups/sidebar/"
                        >
                            <h2 className="block p-2 text-xl font-medium tracking-tighter transition duration-500 ease-in-out transform cursor-pointer text-neutral-200 hover:text-neutral-200">
                                wickedblocks
                            </h2>
                        </a>
                        <button className="hidden rounded-lg focus:outline-none focus:shadow-outline">
                            <svg
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                className="w-6 h-6"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                                    clipRule="evenodd"
                                ></path>
                                <path
                                    fillRule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </button>
                    </div>
                    <div className="flex flex-col flex-grow px-4 mt-5">
                        <nav className="flex-1 space-y-1 bg-neutral-800">
                            <SidebarItems items={grandData} />
                            <p className="px-4 pt-4 font-medium uppercase text-neutral-200">
                                Shortcuts
                            </p>
                            <SidebarItems items={shortcutData} />
                        </nav>
                    </div>
                    {/* <div className="flex flex-shrink-0 p-4 px-4 bg-neutral-900">
                        <a
                            href="#"
                            className="flex-shrink-0 block w-full group"
                        >
                            <div className="flex items-center">
                                <div>
                                    <img
                                        className="inline-block rounded-full h-9 w-9"
                                        src="/assets/images/avatar.png"
                                        alt=""
                                    />
                                </div>
                                <div className="ml-3">
                                    <p className="text-sm font-medium text-neutral-200">
                                        Wicked Labs
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div> */}
                </div>
            </div>
        </aside>
    );
}
