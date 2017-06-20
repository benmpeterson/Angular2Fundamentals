import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { EventsListComponent } from './events/events-list.component';
import { EventsAppComponent } from './events-add.component';
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'


@NgModule({
    imports: [BrowserModule],
    declarations: [
        EventsAppComponent,
        EventsListComponent,
        EventThumbnailComponent
        ],
    bootstrap: [EventsAppComponent]
})
export class AppModule {

}