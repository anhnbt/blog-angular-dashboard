import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ShepherdService} from "angular-shepherd";
export const builtInButtons = {
  cancel: {
    classes: '',
    secondary: true,
    text: 'Hoàn thành',
    type: 'cancel'
  },
  next: {
    classes: '',
    text: 'Tiếp tục',
    type: 'next'
  },
  back: {
    classes: '',
    text: 'Quay lại',
    type: 'back'
  }
};

@Component({
  selector: 'app-shepherd',
  templateUrl: './shepherd.component.html',
  styleUrls: ['./shepherd.component.scss']
})
export class ShepherdComponent implements OnInit, AfterViewInit {

  constructor(private shepherdService: ShepherdService) { }

  ngAfterViewInit() {
    this.shepherdService.defaultStepOptions = {
      classes: '',
      scrollTo: false,
      cancelIcon: {
        enabled: true
      }
    };
    this.shepherdService.modal = true;
    this.shepherdService.confirmCancel = false;
    this.shepherdService.addSteps([
      {
        id: 'intro',
        attachTo: {
          element: '.step1',
          on: 'bottom'
        },
        beforeShowPromise: function() {
          return new Promise(function(resolve) {
            setTimeout(function() {
              window.scrollTo(0, 0);
              resolve(null);
            }, 500);
          });
        },
        buttons: [
          builtInButtons.next
        ],
        cancelIcon: {
          enabled: false
        },
        classes: '',
        highlightClass: 'highlight',
        scrollTo: false,
        title: 'Welcome to Angular-Shepherd!',
        text: ['Angular-Shepherd is a JavaScript library for guiding users through your Angular app.'],
        when: {
          show: () => {
            console.log('show step');
          },
          hide: () => {
            console.log('hide step');
          }
        }
      },
      {
        id: 'intro',
        attachTo: {
          element: '.step2',
          on: 'bottom'
        },
        beforeShowPromise: function() {
          return new Promise(function(resolve) {
            setTimeout(function() {
              window.scrollTo(0, 0);
              resolve(null);
            }, 500);
          });
        },
        buttons: [
          builtInButtons.cancel,
          builtInButtons.next
        ],
        cancelIcon: {
          enabled: true
        },
        classes: '',
        highlightClass: 'highlight',
        scrollTo: false,
        title: 'Welcome to Angular-Shepherd!',
        text: ['Angular-Shepherd is a JavaScript library for guiding users through your Angular app.'],
        when: {
          show: () => {
            console.log('show step');
          },
          hide: () => {
            console.log('hide step');
          }
        }
      },
      {
        id: 'intro',
        attachTo: {
          element: '.step3',
          on: 'bottom'
        },
        beforeShowPromise: function() {
          return new Promise(function(resolve) {
            setTimeout(function() {
              window.scrollTo(0, 0);
              resolve(null);
            }, 500);
          });
        },
        buttons: [
          builtInButtons.cancel,
          builtInButtons.next
        ],
        cancelIcon: {
          enabled: true
        },
        classes: '',
        highlightClass: 'highlight',
        scrollTo: false,
        title: 'Welcome to Angular-Shepherd!',
        text: ['Angular-Shepherd is a JavaScript library for guiding users through your Angular app.'],
        when: {
          show: () => {
            console.log('show step');
          },
          hide: () => {
            console.log('hide step');
          }
        }
      },
      {
        id: 'intro',
        attachTo: {
          element: '.step4',
          on: 'bottom'
        },
        beforeShowPromise: function() {
          return new Promise(function(resolve) {
            setTimeout(function() {
              window.scrollTo(0, 0);
              resolve(null);
            }, 500);
          });
        },
        buttons: [
          builtInButtons.cancel,
          builtInButtons.next
        ],
        cancelIcon: {
          enabled: true
        },
        classes: '',
        highlightClass: 'highlight',
        scrollTo: false,
        title: 'Welcome to Angular-Shepherd!',
        text: ['Angular-Shepherd is a JavaScript library for guiding users through your Angular app.'],
        when: {
          show: () => {
            console.log('show step');
          },
          hide: () => {
            console.log('hide step');
          }
        }
      }
    ]);
    this.shepherdService.start();
  }

  ngOnInit(): void {
  }

}
