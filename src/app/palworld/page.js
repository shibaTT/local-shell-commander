"use client";
import { HomeCards } from "@/components/parts/HomeCards";
import { Content } from "@/components/parts/Content";
import { useEffect, useState } from "react";
import converter from "@/utils/convertIntDec";

export default function Palworld() {
    const [isRunning, setIsRunning] = useState(false);

    const fetchStatus = async () => {
        await fetch("/api/commands/palworld")
            .then((response) => response.json())
            .then((body) => {
                setIsRunning(body.running);
            })
            .catch(() => {
                console.error("エラーが発生しました");
            });
    };

    useEffect(() => {
        fetchStatus();
    }, []);

    return (
        <Content className="flex flex-col flex-1 w-0 overflow-hidden h-screen">
            <div className="relative items-center w-full px-3 py-6">
                <div className="w-full mx-auto p-6 bg-white shadow-xl rounded-xl">
                    <div className="flex justify-between">
                        <p className="text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl whitespace-pre-wrap">
                            パルワールドサーバー稼働状況
                            <span className="ml-4 text-xs font-semibold tracking-widest text-blue-600 uppercase">
                                Status
                            </span>
                        </p>
                        <p
                            onClick={fetchStatus}
                            className="text-gray-500 font-semibold"
                        >
                            再読み込み
                        </p>
                    </div>

                    <section className="max-w-lg mt-5 gap-5 mx-auto lg:max-w-none">
                        <div className="relative items-center w-full px-3 py-6 max-w-7xl">
                            <div className="grid grid-cols-1">
                                <div className="w-full max-w-lg mx-auto my-4 bg-white">
                                    <div className="p-6 lg:text-center">
                                        <h4 className="my-4 text-xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl whitespace-pre-wrap">
                                            {isRunning
                                                ? "稼働中"
                                                : "オフライン"}
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <HomeCards />
        </Content>
    );
}
