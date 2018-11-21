import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

interface UserConfig {
    id: string;
    login: string;
    email: string;
}

const LOCAL_STORAGE_KEY = 'USER_CONFIG';

@Injectable()
export class ConfigOptionsService {
    private userConfig: UserConfig;

    constructor(private localStorageService: LocalStorageService) { }

    set(config: UserConfig): void {
        this.userConfig = config;
        this.localStorageService.setItem(LOCAL_STORAGE_KEY, config);
    }

    getSettings(): UserConfig {
        return this.userConfig;
    }

    // should not return User Config object and called just once on service initialization 
    loadSetting(): UserConfig {
        this.userConfig = this.localStorageService.getItem(LOCAL_STORAGE_KEY);
        return this.userConfig;
    }
}
