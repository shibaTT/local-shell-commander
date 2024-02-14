export default function convert(payload: string) {
    return payload.replace(/[^0-9.]/g, "");
}
