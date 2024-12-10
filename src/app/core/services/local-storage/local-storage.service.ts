import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root",
})
export class LocalStorageService {
    getItem<T>(key: string): T {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : ([] as T);
    }

    setItem<T>(key: string, value: T): void {
        localStorage.setItem(key, JSON.stringify(value));
    }
}
