import { Injectable } from '@angular/core';
// tslint:disable-next-line:import-blacklist
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface ITime {
    stopName: string;
    destination: string;
    times: [string, string];
  }

@Injectable()
export class TimesService {

    public stops = [
        {stopId: 1, stopName: 'Lindenwold'},
        {stopId: 2, stopName: 'Ashland'},
        {stopId: 3, stopName: 'Woodcrest'},
        {stopId: 4, stopName: 'Haddonfield'},
        {stopId: 5, stopName: 'Westmont'},
        {stopId: 6, stopName: 'Collingswood'},
        {stopId: 7, stopName: 'Ferry Ave.'},
        {stopId: 8, stopName: 'Broadway'},
        {stopId: 9, stopName: 'City Hall'},
        {stopId: 10, stopName: '8th & Market'},
        {stopId: 11, stopName: '9/10 & Locust'},
        {stopId: 12, stopName: '12/13 & Locust'},
        {stopId: 13, stopName: '15/16 & Locust'},
    ];

    public directions = [
        {dirId: 1, direction: 'Eastbound'},
        {dirId: 2, direction: 'Westbound'}
    ];

    constructor(
        private http: HttpClient,
    ) { }

    timeNow(time) {
        // Timezone offset UTC - 5 (-4 for daylight savings TODO: automate the offset based on daylight savings time)
        time.setTime(time.getTime() + time.getTimezoneOffset() * 60 * 1000 - (5) * 60 * 60 * 1000);

        let hours = time.getHours();
            if (hours < 10 ) {
                hours = '0' + hours;
            }
        const min = time.getMinutes();
        const sec = time.getSeconds();

        if (min > 9) {
            return hours + ':' + min +  ':' + sec;
        } else {
            return hours + ':0' + min +  ':' + sec;
        }
    }

    getNextTime(req) {
        return this.http.get<ITime>(
            `https://node-patco.herokuapp.com/result?station=${req.station}&direction=${req.direction}&time=${req.time}&day=${req.day}`
        );
    }
}
