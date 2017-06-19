import { Component } from '@angular/core'

@Component({
    selector: 'events-list',
    template: `
    <div>
        <h1>Upcoming Angular 2 Events </h1>       
        <hr />
        <div class="well hoverwell thumbnail">
            <h2>{{event.name}}</h2>
            <div>Date: {{event.date}}</div>
            <div>Price: \${{event.price}}</div>
            <div>Time: {{event.time}}</div>
        </div>
    </div>
    `
})
export class EventsListComponent {
    event = {
        id: 1,
        name: 'Angular Connect',
        date: '9/13/2017',
        time: '10:00 am',
        price: 399.99,
        imageUrl : '/app/assets/images/angularconnect-shield.png',
        location: {
            address: '1057 DT',
            city: 'London',
            country: 'England'
        }
    }
}