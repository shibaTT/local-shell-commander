"use client";
import { Card, SkeletonCard } from "@/components/elements/Card";
import { toast } from "react-toastify";
import { Suspense, useState, useEffect } from "react";

export function SwitchbotCards() {
    const [sceneList, setSceneList] = useState([]);

    useEffect(() => {
        getSceneList();
    }, []);

    const getDeviceList = async () => {
        const toastId = toast.loading("読み込み中");

        await fetch("/api/switchbot/devices")
            .then((response) => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then((body) => {
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

    const getSceneList = async () => {
        await fetch("/api/switchbot/scenes")
            .then((response) => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then((body) => {
                console.log(body);
                setSceneList(body);
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
                        SCENES
                    </span>

                    <h4 className="mt-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl whitespace-pre-wrap">
                        シーンリスト
                    </h4>

                    <p className="mt-3 text-base leading-relaxed text-gray-500 whitespace-pre-wrap">
                        シーンリストを取得します。結果はコンソールに表示されます。
                    </p>

                    <div className="mt-6">
                        <div
                            onClick={getSceneList}
                            className="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl cursor-pointer hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                            Run
                        </div>
                    </div>
                </div>
            </Card>

            <Suspense fallback={<div>読み込み失敗………</div>}>
                {sceneList.length == 0 ? (
                    <SkeletonCard />
                ) : (
                    sceneList.map((item) => {
                        return (
                            <Card key={item.sceneName}>
                                <div className="p-6 lg:text-center">
                                    <span className="mb-8 text-xs font-semibold tracking-widest text-blue-600 uppercase">
                                        SCENE
                                    </span>

                                    <h4 className="mt-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl whitespace-pre-wrap">
                                        {item.sceneName}
                                    </h4>

                                    <div className="mt-6">
                                        <div
                                            onClick={() =>
                                                executeScene(item.sceneId)
                                            }
                                            className="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl cursor-pointer hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                        >
                                            Run
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        );
                    })
                )}
            </Suspense>
        </section>
    );
}
