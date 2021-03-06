import { Component, OnInit } from '@angular/core';
import { TimesService, ITime } from '../times.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-next-time',
  templateUrl: './next-time.component.html',
  styleUrls: ['./next-time.component.scss'],
})

export class NextTimeComponent implements OnInit {

    stops;
    directions;
    req: {direction: number, station: number, time: string, day: number};
    searchMode: boolean;
    result: ITime = {stopName: '', destination: '', times: ['', '']};

    constructor(
        private timesService: TimesService,
        private spinnerService: NgxSpinnerService

    ) { }

    ngOnInit() {
        this.searchMode = true;
        this.stops = this.timesService.stops;
        this.directions = this.timesService.directions;
        this.req = {
            station: 1,
            direction: 1,
            time: '',
            day: new Date().getDay(),
        };
    }

    search() {
        this.spinnerService.show();
        this.req.time = this.timesService.timeNow(new Date());
        this.timesService.getNextTime(this.req).subscribe( (time) => {
        this.result = time;
        this.spinnerService.hide();
        this.searchMode = false;
        });
    }


    goBack() {
        this.searchMode = true;
    }

}

