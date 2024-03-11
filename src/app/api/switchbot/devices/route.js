import { NextResponse } from "next/server";
import { v4 as uuid } from "uuid";
import { HmacSHA256, enc } from "crypto-js";

/**
 * Switchbotの中間API
 */

const BASE_URL = "https://api.switch-bot.com";
const time = Date.now();
const nonce = uuid();
const data = process.env.SWITCHBOT_TOKEN + String(time) + nonce;
const sign = HmacSHA256(data, process.env.SWITCHBOT_SECRET).toString(
    enc.Base64
);

export async function GET(request, response) {
    // GETの場合はデバイスリストの取得

    const url = BASE_URL + "/v1.1/devices";

    // console.log(data, sign);

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
        console.log(data.body.deviceList);

        return NextResponse.json(data.body, { status: 200 });
    } catch (error) {
        return NextResponse.json(error, { status: 500 });
    }
}

export async function POST(request, response) {
    // POSTの場合はデバイスの操作
    const requestData = await request.json();
    const controlType = requestData.type;

    const fetchSwitchbot = async (url, params) => {
        try {
            // const response = await fetch(url, {
            //     method: "POST",
            //     headers: {
            //         Authorization: process.env.SWITCHBOT_TOKEN,
            //         sign: sign,
            //         nonce: nonce,
            //         t: time,
            //         "Content-Type": "application/json",
            //     },
            //     body: params,
            // });
            // const data = await response.json();
            const data = {
                body: {
                    text: "text",
                },
            };

            return NextResponse.json(data.body, { status: 200 });
        } catch (error) {
            return NextResponse.json(error, { status: 500 });
        }
    };

    // 操作タイプによって使い分け
    switch (controlType) {
        case "shutter_up":
            const shutterUpUrl =
                BASE_URL +
                "/v1.1/devices/" +
                process.env.SWITCHBOT_SHUTTER_UP +
                "/commands";
            const shutterUpParams = {
                command: "press",
                parameter: "default",
                commandType: "command",
            };

            const shutterUpResponse = await fetchSwitchbot(
                shutterUpUrl,
                shutterUpParams
            );
            return shutterUpResponse;
        case "shuter_down":
            // TODO: 寝室照明用のアクションも設定する
            const shutterDownUrl =
                BASE_URL +
                "/v1.1/devices/" +
                process.env.SWITCHBOT_SHUTTER_DOWN +
                "/commands";
            const shutterDownParams = {
                command: "press",
                parameter: "default",
                commandType: "command",
            };

            const shutterDownResponse = await fetchSwitchbot(
                shutterDownUrl,
                shutterDownParams
            );
            return shutterDownResponse;
        default:
            console.log("missing value");
            return NextResponse.json(
                { error: "missing value" },
                { status: 400 }
            );
    }

    return NextResponse.json({ message: "ok" }, { status: 200 });
}
