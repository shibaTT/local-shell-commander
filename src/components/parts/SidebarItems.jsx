import Link from "next/link";

export function SidebarItems({ items }) {
    return (
        <ul>
            {items.map((item) => {
                return (
                    <li key={item.title}>
                        <Link
                            className="inline-flex items-center w-full px-4 py-2 mt-1 text-base transition duration-500 ease-in-out transform border rounded-lg text-neutral-200 border-neutral-800 hover:border-neutral-800 focus:shadow-outline hover:bg-neutral-900"
                            href={item.link}
                        >
                            {item.icon}
                            <span className="ml-4">{item.title}</span>
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
}
