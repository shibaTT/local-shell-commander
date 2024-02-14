import { Sidebar } from "@/components/layouts/Sidebar";

export function DefaultLayout(props) {
    return (
        <div className="flex min-h-screen overflow-hidden bg-white rounded-lg">
            <Sidebar />
            {props.children}
        </div>
    );
}
