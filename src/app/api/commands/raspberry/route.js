import { execa } from "execa";
import { NextResponse } from "next/server";

// ラズパイの状態確認

export async function GET() {
    // 温度、電圧、周波数を取得
    const temp = await execa("vcgencmd", ["measure_temp"]).catch(() => null);
    const volts = await execa("vcgencmd", ["measure_volts"]).catch(() => null);
    const clock = await execa("vcgencmd", ["measure_clock", "arm"]).catch(
        () => null
    );

    const raspberryPiStatus = { temp, volts, clock };

    if (Object.keys(raspberryPiStatus).length > 0) {
        return NextResponse.json(raspberryPiStatus, { status: 200 });
    } else {
        return NextResponse.json(
            { error: "データが取得できませんでした" },
            { status: 500 }
        );
    }
}
