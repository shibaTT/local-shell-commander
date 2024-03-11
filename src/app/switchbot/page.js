"use client";
import { Content } from "@/components/parts/Content";
import { SwitchbotCards } from "@/components/parts/SwitchbotCards";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

export default function SWITCHBOT() {
    const [sceneList, setSceneList] = useState([]);

    useEffect(() => {
        getSceneList();
    }, []);

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
            })
            .catch((error) => {
                console.error(error);
                toast.error("読み込みに失敗しました");
            });
    };

    return (
        <Content>
            <SwitchbotCards sceneList={sceneList} />
        </Content>
    );
}
