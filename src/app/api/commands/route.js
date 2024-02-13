import { execa } from "execa";
import { NextResponse } from "next/server";

export async function GET(request, response) {
    // const temp = await execa("vcgencmd", ["measure_temp"]).catch(() => null);
    // const volts = await execa("vcgencmd", ["measure_volts"]).catch(() => null);

    // const result = {
    //     temp: temp ? temp.stdout : "",
    //     volts: volts ? volts.stdout : "",
    // };

    // return NextResponse.json(result, { status: 200 });

    await execa("sudo", ["systemctl", "start", "palworld"]);
    return response.status(200);
}
