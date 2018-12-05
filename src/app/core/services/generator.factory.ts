import { InjectionToken } from '@angular/core';

const POSSIBLE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

export const GeneratorToken = new InjectionToken<string>('GeneratorToken');

export function GeneratorFactory(stringLength: number) {
    return () => generateRandomString(stringLength);
}

function generateRandomString(stringLength: number): string {
    let result = '';

    for (let i = 0; i < stringLength; i++) {
        result += POSSIBLE_CHARS.charAt(Math.floor(Math.random() * POSSIBLE_CHARS.length));
    }

    return result;
}
