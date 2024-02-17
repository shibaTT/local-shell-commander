import { Card } from "@/components/elements/Card";
import { toast } from "react-toastify";
import sleep from "@/utils/sleep";

/*
type CARD_PARAMS = {
    title: String, // 改行コードOK
    description: String, // 改行コードOK
    icon: String(URL),
    category: String,
    action: () => Promise<void>, // APIへの送信を定義
}
*/

export function HomeCards() {
    const postPalworldApi = async (params) => {
        const commandToast = toast.loading("コマンド送信中");
        console.log(params);

        await fetch("/api/commands/palworld", params)
            .then((response) => response.json())
            .then((body) => {
                toast.update(commandToast, {
                    render: "コマンド送信に成功しました！",
                    type: "success",
                    isLoading: false,
                    autoClose: 5000,
                });
            })
            .catch((error) => {
                console.error(error);
                toast.update(commandToast, {
                    render: "何かしらのエラーが発生しました",
                    type: "error",
                    isLoading: false,
                    autoClose: 5000,
                });
            });
    };

    const handleClickPalworld = (type) => {
        const params = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                type,
            }),
        };

        postPalworldApi(params);
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
                        START
                    </span>

                    <h4 className="mt-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl whitespace-pre-wrap">
                        パルワールド
                        <br />
                        サーバースタート
                    </h4>

                    <p className="mt-3 text-base leading-relaxed text-gray-500 whitespace-pre-wrap">
                        パルワールドのサーバーを開始します
                    </p>

                    <div className="mt-6">
                        <div
                            onClick={() => handleClickPalworld("start")}
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
                        STOP
                    </span>

                    <h4 className="mt-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl whitespace-pre-wrap">
                        パルワールド
                        <br />
                        サーバーストップ
                    </h4>

                    <p className="mt-3 text-base leading-relaxed text-gray-500 whitespace-pre-wrap">
                        パルワールドのサーバーを停止します
                    </p>

                    <div className="mt-6">
                        <div
                            onClick={() => handleClickPalworld("stop")}
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
                        RESTART
                    </span>

                    <h4 className="mt-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl whitespace-pre-wrap">
                        パルワールド
                        <br />
                        サーバー再起動
                    </h4>

                    <p className="mt-3 text-base leading-relaxed text-gray-500 whitespace-pre-wrap">
                        パルワールドのサーバーを再起動します
                    </p>

                    <div className="mt-6">
                        <div
                            onClick={() => handleClickPalworld("restart")}
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
