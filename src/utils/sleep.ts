export default function sleep(seconds: number = 3): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
}
