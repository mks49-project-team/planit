(function() {

  angular
    .module('app.calendar')
    .controller('CalendarController', CalendarController);

  CalendarController.$inject = ['$scope', 'uiCalendarConfig'];

  function CalendarController($scope, uiCalendarConfig) {

    var vm = this;
    vm.form = {};
    vm.years = [2016, 2017, 2018];
    vm.months = [
      {
        name: "January",
        value: 01
      },
      {
        name: "February",
        value: 02
      },
      {
        name: "March",
        value: 03
      },
      {
        name: "April",
        value: 04
      },
      {
        name: "May",
        value: 05
      },
      {
        name: "June",
        value: 06
      },
      {
        name: "July",
        value: 07
      },
      {
        name: "August",
        value: 08
      },
      {
        name: "September",
        value: 09
      },
      {
        name: "October",
        value: 10
      },
      {
        name: "November",
        value: 11
      },
      {
        name: "December",
        value: 12
      }
    ];

    vm.days28 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28];

    vm.days30 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];

    vm.days31 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];

    vm.hours = [
      {
        name: "01 AM",
        value: 1
      },
      {
        name: "02 AM",
        value: 02
      },
      {
        name: "03 AM",
        value: 03
      },
      {
        name: "04 AM",
        value: 04
      },
      {
        name: "05 AM",
        value: 05
      },
      {
        name: "06 AM",
        value: 06
      },
      {
        name: "07 AM",
        value: 07
      },
      {
        name: "08 AM",
        value: 08
      },
      {
        name: "09 AM",
        value: 09
      },
      {
        name: "10 AM",
        value: 10
      },
      {
        name: "11 AM",
        value: 11
      },
      {
        name: "12 PM",
        value: 12
      },
      {
        name: "01 PM",
        value: 1
      },
      {
        name: "02 PM",
        value: 02
      },
      {
        name: "03 PM",
        value: 03
      },
      {
        name: "04 PM",
        value: 04
      },
      {
        name: "05 PM",
        value: 05
      },
      {
        name: "06 PM",
        value: 06
      },
      {
        name: "07 PM",
        value: 07
      },
      {
        name: "08 PM",
        value: 08
      },
      {
        name: "09 PM",
        value: 21
      },
      {
        name: "10 PM",
        value: 22
      },
      {
        name: "11 PM",
        value: 23
      },
      {
        name: "12 AM",
        value: 00
      }
    ];

    vm.minutes = ["00","05","10","15","20","25","30","35","40","45","50","55","60"];

    vm.getDays = function() {
      if (vm.form.month === 4 || vm.form.month === 6 || vm.form.month === 9 || vm.form.month === 11) {
        vm.form.days = vm.days30;
      } else if (vm.form.month === 2) {
        vm.form.days = vm.days28;
      } else {
        vm.form.days = vm.days31;
      }
    }

    vm.eventSources = [
    {
      events:[
        {
          title: 'Event1',
          start: '2016-10-28T22:00'
        }
      ]
    }];

    vm.uiConfig = {
      calendar: {
        height: 450,
        defaultView: 'basicWeek',
        timezone: 'local',
        editable: true,
        fixedWeekCount: false,
        header: {
          left: 'month basicWeek basicDay agendaWeek agendaDay',
          center: 'title',
          right: 'today prev,next'
        }
      }
    };

    vm.test = function() {
      var date = moment(vm.form.year + "-" + vm.form.month + "-" + vm.form.day + " " + vm.form.startHour + ":" + vm.form.startMinute, "YYYY-MM-DD HH:mm");

      vm.eventSources[0].events.push(
        {
          title: vm.form.title,
          start: date,
          stick: true
        }
      );

      vm.form.title = null;
      vm.form.year = null;
      vm.form.month = null;
      vm.form.day = null;
      vm.form.startHour = null;
      vm.form.startMinute = null;
    }

  }
})();
