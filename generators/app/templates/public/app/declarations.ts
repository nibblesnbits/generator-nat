
module app {
    /**
     * Module ID for all common components (logging, etc.)
     */
    export const commonModuleId = 'common';
    /**
     * Module ID for app-level components (the app itself, etc.)
     */
    export const appModuleId = 'app';
    
	export const dataModuleId = 'dataModule';
    export const dataServiceId = 'dataService';

    export const shellModuleId = 'app.shell';
    
    export const homeModuleId = 'app.home';
    export const homeControllerId = 'homeController';
    export const homeStateName = 'app.home';
    
    export const storageServiceFactoryId = 'storageServiceFactory';
    export const configConstKey = 'appConfigConst';
	export const appConfigServiceId = 'appConfigService';
    export const appConfigProviderId = appConfigServiceId + 'Provider';

    export const notifierServiceId = 'notifierService';
    export const notifierProviderId = notifierServiceId + 'Provider';

    export const loggerServiceId = 'loggerService';
    export const loggerProviderId = loggerServiceId + 'Provider';
    
    export const momentFilterId = 'moment';
}