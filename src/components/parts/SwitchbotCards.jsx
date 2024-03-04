import { Card } from "@/components/elements/Card";
import { toast } from "react-toastify";

const CONTROL = {
    shutter_up: "shutter_up",
    shutter_down: "shutter_down",
};

export function SwitchbotCards() {
    const getDeviceList = async () => {
        const toastId = toast.loading("読み込み中");

        await fetch("/api/switchbot/devices")
            .then((response) => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                const body = response.json();
                console.log(body);
                toast.update(toastId, {
                    render: "デバイス情報の取得に成功しました",
                    type: "success",
                    isLoading: false,
                    autoClose: 5000,
                });
            })
            .catch((error) => {
                console.error(error);
                toast.update(toastId, {
                    render: "デバイス情報の取得に失敗しました",
                    type: "error",
                    isLoading: false,
                    autoClose: 5000,
                });
            });
    };

    const postShutterUp = async () => {
        const toastId = toast.loading("読み込み中");
        await fetch("/api/switchbot/devices", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                type: CONTROL.shutter_up,
            }),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("シャッターを開けませんでした");
                }

                toast.update(toastId, {
                    render: "シャッターを開きました",
                    type: "success",
                    isLoading: false,
                    autoClose: 5000,
                });
            })
            .catch((error) => {
                console.dir(error);
                toast.update(toastId, {
                    render: error.message,
                    type: "error",
                    isLoading: false,
                    autoClose: 5000,
                });
            });
    };

    const postShutterDown = async () => {
        const toastId = toast.loading("読み込み中");
        await fetch("/api/switchbot/devices", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                type: CONTROL.shutter_down,
            }),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("シャッターを閉じられませんでした");
                }

                toast.update(toastId, {
                    render: "シャッターを閉じました",
                    type: "success",
                    isLoading: false,
                    autoClose: 5000,
                });
            })
            .catch((error) => {
                console.dir(error);
                toast.update(toastId, {
                    render: error.message,
                    type: "error",
                    isLoading: false,
                    autoClose: 5000,
                });
            });
    };

    return (
        <section className="grid max-w-lg gap-5 mx-auto lg:grid-cols-3 lg:max-w-none">
            <Card>
                <img
                    alt="team"
                    className="flex-shrink-0 object-cover object-center w-16 h-16 mx-auto -mt-8 rounded-full shadow-xl aboslute"
                    src="https://placehold.jp/600x300.png"
                />

                <div className="p-6 lg:text-center">
                    <span className="mb-8 text-xs font-semibold tracking-widest text-blue-600 uppercase">
                        DEVICE
                    </span>

                    <h4 className="mt-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl whitespace-pre-wrap">
                        デバイスリスト
                    </h4>

                    <p className="mt-3 text-base leading-relaxed text-gray-500 whitespace-pre-wrap">
                        デバイスリストを取得します。結果はコンソールに表示されます。
                    </p>

                    <div className="mt-6">
                        <div
                            onClick={getDeviceList}
                            className="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl cursor-pointer hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                            Run
                        </div>
                    </div>
                </div>
            </Card>

            <Card>
                <img
                    alt="team"
                    className="flex-shrink-0 object-cover object-center w-16 h-16 mx-auto -mt-8 rounded-full shadow-xl aboslute"
                    src="https://placehold.jp/600x300.png"
                />

                <div className="p-6 lg:text-center">
                    <span className="mb-8 text-xs font-semibold tracking-widest text-blue-600 uppercase">
                        OPEN
                    </span>

                    <h4 className="mt-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl whitespace-pre-wrap">
                        シャッターオープン
                    </h4>

                    <p className="mt-3 text-base leading-relaxed text-gray-500 whitespace-pre-wrap">
                        シャッターを開けます
                    </p>

                    <div className="mt-6">
                        <div
                            onClick={postShutterUp}
                            className="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl cursor-pointer hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                            Run
                        </div>
                    </div>
                </div>
            </Card>

            <Card>
                <img
                    alt="team"
                    className="flex-shrink-0 object-cover object-center w-16 h-16 mx-auto -mt-8 rounded-full shadow-xl aboslute"
                    src="https://placehold.jp/600x300.png"
                />

                <div className="p-6 lg:text-center">
                    <span className="mb-8 text-xs font-semibold tracking-widest text-blue-600 uppercase">
                        CLOSE
                    </span>

                    <h4 className="mt-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl whitespace-pre-wrap">
                        シャッタークローズ
                    </h4>

                    <p className="mt-3 text-base leading-relaxed text-gray-500 whitespace-pre-wrap">
                        シャッターを閉め、寝室照明をつけます
                    </p>

                    <div className="mt-6">
                        <div
                            onClick={postShutterDown}
                            className="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl cursor-pointer hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                            Run
                        </div>
                    </div>
                </div>
            </Card>
        </section>
    );
}
