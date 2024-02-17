"use client";
import { HomeCards } from "@/components/parts/HomeCards";
import { Modal } from "@/components/parts/Modal";
import { Content } from "@/components/parts/Content";
import { useEffect, useState } from "react";
import converter from "@/utils/convertIntDec";

export default function Home() {
    const [raspTemp, setRaspTemp] = useState("0'C");
    const [raspVolts, setRaspVolts] = useState("0V");
    const [raspClock, setRaspClock] = useState("0Mhz");

    // モーダル開閉用変数
    const [isOpenModal, setIsOpenModal] = useState(false);

    const fetchStatus = async () => {
        await fetch("/api/commands/raspberry")
            .then((response) => response.json())
            .then((body) => {
                const formatTemp = converter(body.temp) + "℃";
                const formatVolts = converter(body.volts) + "V";
                const formatClock = Number.parseFloat(converter(body.clock)) / 10 ** 9 + "Ghz";
                setRaspTemp(formatTemp);
                setRaspVolts(formatVolts);
                setRaspClock(formatClock);
            })
            .catch(() => {
                console.error("エラーが発生しました");
            });
    };

    useEffect(() => {
        fetchStatus();
    }, []);

    return (
        <Content>
            <div className="relative items-center w-full px-3 py-6">
                <div className="w-full mx-auto p-6 bg-white shadow-xl rounded-xl">
                    <div className="flex justify-between">
                        <p className="text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl whitespace-pre-wrap">
                            ラズペリーバイの状況
                            <span className="ml-4 text-xs font-semibold tracking-widest text-blue-600 uppercase">
                                Status
                            </span>
                        </p>
                        <p onClick={fetchStatus} className="text-gray-500 font-semibold">
                            再読み込み
                        </p>
                    </div>

                    <section className="grid max-w-lg mt-5 gap-5 mx-auto lg:divide-x lg:grid-cols-3 lg:max-w-none">
                        <div className="grid grid-cols-1 items-center w-full p-3 max-w-7xl mx-auto mt-4 bg-white lg:p-6 lg:text-center">
                            <h4 className="mt-4 text-xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl whitespace-pre-wrap">
                                温度
                            </h4>

                            <p className="mt-3 text-base leading-relaxed text-gray-500 whitespace-pre-wrap">
                                {raspTemp}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 items-center w-full p-3 max-w-7xl mx-auto mt-4 bg-white lg:p-6 lg:text-center">
                            <h4 className="mt-4 text-xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl whitespace-pre-wrap">
                                電圧
                            </h4>

                            <p className="mt-3 text-base leading-relaxed text-gray-500 whitespace-pre-wrap">
                                {raspVolts} × 5A =<br />
                                {Number.parseFloat(raspVolts) * 5 + "W"}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 items-center w-full p-3 max-w-7xl mx-auto mt-4 bg-white lg:p-6 lg:text-center">
                            <h4 className="mt-4 text-xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl whitespace-pre-wrap">
                                クロック数
                            </h4>

                            <p className="mt-3 text-base leading-relaxed text-gray-500 whitespace-pre-wrap">
                                {raspClock}
                            </p>
                        </div>
                    </section>
                </div>
            </div>
            <HomeCards />

            <button
                className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:cursor-pointer dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button"
                onClick={() => {
                    setIsOpenModal(!isOpenModal);
                }}
            >
                Run
            </button>
            {isOpenModal && (
                <Modal
                    name="test-modal"
                    title="テストモーダル！"
                    state={isOpenModal}
                    action={() => setIsOpenModal(false)}
                >
                    <form className="p-4 md:p-5">
                        <div className="grid gap-4 mb-4 grid-cols-2">
                            <div className="col-span-2">
                                <label
                                    htmlFor="name"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="Type product name"
                                    required=""
                                />
                            </div>
                            <div className="col-span-2 sm:col-span-1">
                                <label
                                    htmlFor="price"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Price
                                </label>
                                <input
                                    type="number"
                                    name="price"
                                    id="price"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="$2999"
                                    required=""
                                />
                            </div>
                            <div className="col-span-2 sm:col-span-1">
                                <label
                                    htmlFor="category"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Category
                                </label>
                                <select
                                    id="category"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    defaultValue={""}
                                >
                                    <option value={""}>Select category</option>
                                    <option value={"TV"}>TV/Monitors</option>
                                    <option value={"PC"}>PC</option>
                                    <option value={"GA"}>Gaming/Console</option>
                                    <option value={"PH"}>Phones</option>
                                </select>
                            </div>
                            <div className="col-span-2">
                                <label
                                    htmlFor="description"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Product Description
                                </label>
                                <textarea
                                    id="description"
                                    rows="4"
                                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Write product description here"
                                ></textarea>
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            <svg
                                className="me-1 -ms-1 w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                            Add new product
                        </button>
                    </form>
                </Modal>
            )}
        </Content>
    );
}
