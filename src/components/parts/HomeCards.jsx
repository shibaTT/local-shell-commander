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

        await fetch("/api/commands/palworld", params)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                toast.update(commandToast, {
                    render: "コマンド送信に成功しました！",
                    type: "success",
                    isLoading: false,
                    autoClose: 5000,
                });
            })
            .catch((err) => {
                console.error(err);
                toast.update(commandToast, {
                    render: "何かしらのエラーが発生しました",
                    type: "error",
                    isLoading: false,
                    autoClose: 5000,
                });
            });
    };

    const handleClickStartPalworld = () => {
        const params = {
            method: "POST",
            headers: "application/json",
            body: {
                type: "start",
            },
        };

        postPalworldApi(params);
    };

    const handleClickStopPalworld = () => {
        const params = {
            method: "POST",
            headers: "application/json",
            body: {
                type: "stop",
            },
        };

        postPalworldApi(params);
    };

    const handleClickRestartPalworld = () => {
        const params = {
            method: "POST",
            headers: "application/json",
            body: {
                type: "restart",
            },
        };

        postPalworldApi(params);
    };

    const cardsParams = [
        {
            title: "パルワールド\nサーバースタート",
            description: "パルワールドのサーバーを開始します",
            category: "START",
            action: handleClickStartPalworld,
        },
        {
            title: "パルワールド\nサーバー終了",
            description: "パルワールドのサーバーを終了します",
            category: "STOP",
            action: handleClickStopPalworld,
        },
        {
            title: "パルワールド\nサーバー再起動",
            description: "パルワールドのサーバーを再起動します",
            icon: "https://placehold.jp/600x300.png",
            category: "RESTART",
            action: handleClickRestartPalworld,
        },
    ];

    return (
        <section className="grid max-w-lg gap-5 mx-auto lg:grid-cols-3 lg:max-w-none">
            {cardsParams.map((item) => (
                <Card item={item} key={item.title} />
            ))}
        </section>
    );
}
