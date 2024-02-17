import { execa } from "execa";
import { NextResponse } from "next/server";
import sleep from "@/utils/sleep";

// パルワールドのサーバー関連

export async function GET() {
    // GETの場合はサーバーの起動確認
    // ポート番号 "8211" が空いているか確認

    // await抜いててちゃんと動かなかった！気をつけろ！
    const checkPortResult = await execa("sudo", ["lsof", "-i", ":8211"]).catch(() => "");

    if (checkPortResult != "") {
        return NextResponse.json({ running: true, text: checkPortResult.stdout }, { status: 200 });
    } else {
        return NextResponse.json({ running: false }, { status: 200 });
    }
}

export async function POST(request, response) {
    // POSTの場合はサーバーの起動、もしくは終了など操作に関するもの
    const body = await request.json();

    // エラーが起きた時のレスポンス
    const returnError = (error) => {
        return NextResponse({ error }, { status: 500 });
    };

    // POSTのtypeによってコマンドを変える
    switch (body.type) {
        case "start":
            await execa("sudo", ["systemctl", "start", "palworld"]);
            break;
        case "end":
            await execa("sudo", ["systemctl", "stop", "palworld"]);
            break;
        case "restart":
            await execa("sudo", ["systemctl", "stop", "palworld"]);
            // 再起動待ちのために10秒スリープ（自作関数）
            // いいやり方があればそれに移行
            // てか思ったけどawaitなんだしスリープする必要ある？
            await sleep(10);
            await execa("sudo", ["systemctl", "start", "palworld"]);
            break;
        default:
            returnError("type mismatch");
            break;
    }

    return NextResponse({ process: "ok" }, { status: 500 });
}
