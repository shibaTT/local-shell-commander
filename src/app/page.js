"use client";
import { HomeCards } from "@/components/parts/HomeCards";
import { Content } from "@/components/parts/Content";
import { useEffect, useState } from "react";

export default function Home() {
    const [raspTemp, setRaspTemp] = useState("0'C");
    const [raspVolts, setRaspVolts] = useState("0V");
    const [raspClock, setRaspClock] = useState("0Mhz");

    useEffect(() => {
        const fetchStatus = async () => {
            await fetch("/api/commands/raspberry")
                .then((response) => response.json())
                .then((body) => {
                    setRaspTemp(body.temp);
                    setRaspVolts(body.volts);
                    setRaspClock(body.clock);
                })
                .catch(() => {
                    console.error("エラーが発生しました");
                });
        };

        fetchStatus();
    }, []);

    return (
        <Content className="flex flex-col flex-1 w-0 overflow-hidden h-screen">
            <div className="relative items-center w-full px-3 py-6">
                <div className="w-full mx-auto p-6 bg-white shadow-xl rounded-xl">
                    <p className="text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl whitespace-pre-wrap">
                        ラズペリーバイの状況
                        <span className="ml-4 text-xs font-semibold tracking-widest text-blue-600 uppercase">
                            Status
                        </span>
                    </p>

                    <section className="grid max-w-lg mt-5 gap-5 mx-auto divide-x lg:grid-cols-3 lg:max-w-none">
                        <div className="relative items-center w-full px-3 py-6 max-w-7xl">
                            <div className="grid grid-cols-1">
                                <div className="w-full max-w-lg mx-auto my-4 bg-white">
                                    <div className="p-6 lg:text-center">
                                        <h4 className="my-4 text-xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl whitespace-pre-wrap">
                                            温度
                                        </h4>

                                        <p className="mt-3 text-base leading-relaxed text-gray-500 whitespace-pre-wrap">
                                            {raspTemp}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative items-center w-full px-3 py-6 max-w-7xl">
                            <div className="grid grid-cols-1">
                                <div className="w-full max-w-lg mx-auto my-4 bg-white">
                                    <div className="p-6 lg:text-center">
                                        <h4 className="my-4 text-xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl whitespace-pre-wrap">
                                            電圧
                                        </h4>

                                        <p className="mt-3 text-base leading-relaxed text-gray-500 whitespace-pre-wrap">
                                            {raspVolts} × 5A =<br />
                                            {Number.parseFloat(raspVolts) * 5 + "W"}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative items-center w-full px-3 py-6 max-w-7xl">
                            <div className="grid grid-cols-1">
                                <div className="w-full max-w-lg mx-auto my-4 bg-white">
                                    <div className="p-6 lg:text-center">
                                        <h4 className="my-4 text-xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl whitespace-pre-wrap">
                                            クロック数
                                        </h4>

                                        <p className="mt-3 text-base leading-relaxed text-gray-500 whitespace-pre-wrap">
                                            {raspClock}
                                        </p>
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
