export default function deferredCreator<T>() {
    let reject: any;
    let resolve: any;
    let promise = new Promise<T>((res, rej) => {
        reject = rej
        resolve = res
    })

    return {
        reject: reject as unknown as (reson?: any) => void,
        resolve: resolve as unknown as (value: T | PromiseLike<T>) => any,
        promise
    }
}