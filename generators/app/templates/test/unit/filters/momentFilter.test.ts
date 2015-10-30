/// <reference path="../../../typings/tsd.d.ts" />
/// <reference path="../../../public/app/common/filters.ts" />

module tests {
    describe('MomentFilter', function () {

        var filter : app.IMomentFilter,
            date: moment.Moment;
		
        // note that we use only the 'common' module here
        beforeEach(angular.mock.module(app.commonModuleId));

        beforeEach(angular.mock.inject(($injector) => {
            var $filter: angular.IFilterService = $injector.get('$filter');
            
			filter = <app.IMomentFilter>$filter(app.momentFilterId);
            date = moment();
        }));
        
        describe('on default call', () => {
			it('formats the current date with the default format', () => {
                
                expect(filter(date)).toBe(moment(date).format(app.MomentFilter.DefaultFormat));
            });
        });
        describe('when fed invalid date', () => {
			it('returns error message', () => {
                
                var result = filter('test');
                expect(result.indexOf('Error')).toBeGreaterThan(-1);
            });
        });
        describe('when fed a custom format', () => {
			it('returns date in that format', () => {
                
                var format = 'YYYY';
                var year = date.year().toString()
                expect(filter(date, format)).toBe(year);
            });
        });
    });
}