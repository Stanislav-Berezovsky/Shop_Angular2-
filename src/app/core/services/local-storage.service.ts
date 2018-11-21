export class LocalStorageService {

    public constructor() { }

    setItem(key: string, value): void {
        localStorage.setItem(key, JSON.stringify(value));
    }

    getItem(key: string): any {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : null;
    }

    removeItem(key): void {
        localStorage.removeItem(key);
    }
}
