import { InjectionToken } from '@angular/core';

export const GeneratorToken = new InjectionToken<string>('GeneratorToken');

export function GeneratorFactory(stringLength: number) {
    return () => generateRandomString(stringLength);
}

function generateRandomString(stringLength: number): string {
    return 'random string';
}