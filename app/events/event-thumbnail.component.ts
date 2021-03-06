import { Component, Input } from '@angular/core';

@Component({
    selector: 'event-thumbnail',
    template: `
    <div class="well hoverwell thumbnail">
        <h2>{{event.name}}</h2>
        <div>Date: {{event.date}}</div>
        <div>Price: \${{event.price}}</div>
        <div>Time: {{event.time}}</div>
    </div>
    `
})
export class EventThumbnailComponent {
    @Input() event:any
}