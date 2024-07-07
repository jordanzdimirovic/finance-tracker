import config from "config";

export function getAll(keys: string[]): any[] {
    return keys.map((key) => config.get(key));
}

export function getAllWithPrefix(pre: string, keys: string[]): any[] {
    return keys.map((key) => config.get(pre + '.' + key));
}