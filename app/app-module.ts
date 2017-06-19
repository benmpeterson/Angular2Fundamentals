import { EventsAppComponent } from './events-add.component';
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'


@NgModule({
    imports: [BrowserModule],
    declarations: [EventsAppComponent],
    bootstrap: [EventsAppComponent]
})
export class AppModule {

}