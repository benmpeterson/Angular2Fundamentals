import { EventsListComponent } from './events/events-list.component';
import { EventsAppComponent } from './events-add.component';
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'


@NgModule({
    imports: [BrowserModule],
    declarations: [
        EventsAppComponent,
        EventsListComponent
        ],
    bootstrap: [EventsAppComponent]
})
export class AppModule {

}