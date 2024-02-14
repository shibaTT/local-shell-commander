import { execa } from "execa";
import { NextResponse } from "next/server";
import sleep from "@/utils/sleep";

// パルワールドのサーバー関連

export async function GET() {
    // GETの場合はサーバーの起動確認
    // ポート番号 "8211" が空いているか確認

    // await抜いててちゃんと動かなかった！気をつけろ！
    const checkPortResult = await execa("lsof", ["-i", ":8211"]).catch(() => "");

    if (checkPortResult != "") {
        return NextResponse.json({ running: true, text: checkPortResult.stdout }, { status: 200 });
    } else {
        return NextResponse.json({ running: false }, { status: 200 });
    }

    // Gemini先生に聞いてみると `./palworld.sh status`をすると情報をくれるという話
    // 本当かどうかはわからないが、いろんな情報をもらえるらしいので以下に示す

    // Server Name: My Server
    // Port: 8211
    // Map: Desert
    // Max Players: 10
    // Current Players: 2
    // Uptime: 1 hour 23 minutes
    // CPU Usage: 50%
    // Memory Usage: 2 GB
    // FPS: 60
    // Ping: 30 ms

    // Players:
    // - Player1
    // - Player2
}

export async function POST(request, response) {
    // POSTの場合はサーバーの起動、もしくは終了など操作に関するもの
    const body = await request.json();

    // エラーが起きた時のレスポンス
    const returnError = (error) => {
        return NextResponse({ error }, { status: 500 });
    };

    // POSTのtypeによってコマンドを変える
    // シェルコマンド送り込むのは面倒なのでエイリアスを投げる（動かなかったらちゃんとやる）
    switch (body.type) {
        case "start":
            await execa("startpal");
            break;
        case "end":
            await execa("stoppal");
            break;
        case "restart":
            await execa("stoppal");
            // 再起動待ちのために10秒スリープ（自作関数）
            // いいやり方があればそれに移行
            await sleep(10);
            await execa("startpal");
            break;
        default:
            returnError("type mismatch");
            break;
    }

    return NextResponse({ process: "ok" }, { status: 500 });
}
