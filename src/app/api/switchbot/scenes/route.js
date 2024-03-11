import { NextResponse } from "next/server";
import { v4 as uuid } from "uuid";
import { HmacSHA256, enc } from "crypto-js";

/**
 * Switchbotのシーン用中間API
 */

const BASE_URL = "https://api.switch-bot.com";
const time = Date.now();
const nonce = uuid();
const data = process.env.SWITCHBOT_TOKEN + String(time) + nonce;
const sign = HmacSHA256(data, process.env.SWITCHBOT_SECRET).toString(enc.Base64);

export async function GET(request, response) {
    // GETの場合はシーンリストの取得
    const url = BASE_URL + "/v1.1/scenes";

    try {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                Authorization: process.env.SWITCHBOT_TOKEN,
                sign: sign,
                nonce: nonce,
                t: time,
                "Content-Type": "application/json",
            },
        });

        const data = await response.json();

        if (response.status !== 100 && response.status !== 200) {
            throw new Error(data.message);
        }

        return NextResponse.json(data.body, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: error }, { status: 500 });
    }
}

export async function POST(request, response) {
    // POSTの場合はシーンの実行
    const requestData = await request.json();
    const url = BASE_URL + "/v1.1/scenes/" + requestData.sceneId + "/execute";

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                Authorization: process.env.SWITCHBOT_TOKEN,
                sign: sign,
                nonce: nonce,
                t: time,
                "Content-Type": "application/json",
            },
        });
        const data = await response.json();

        if (response.status !== 100 && response.status !== 200) {
            throw new Error(data.message);
        }

        return NextResponse.json({ message: "ok" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: error }, { status: 500 });
    }
}
