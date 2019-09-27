export function getURL(path: string): string {
    let base = getBaseURL()
    return `${base}/storage_management/${path}`
}

/**
 * Return URL like http://0.0.0.0
 */
export function getBaseURL(): string {
    var base = "http://0.0.0.0"
    let store = localStorage.getItem("address")
    if (store) {
        base = store
    }
    return base;
}

export function getWebSocket(path: string): string {
    var base = "ws://192.168.31.19:4000"
    return `${base}/?type=receiver`
    // return "ws://0.0.0.0:8000/?type=receiver"
}