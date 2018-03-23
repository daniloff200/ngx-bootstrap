import { Component, ViewChild } from '@angular/core';
import { TabsetComponent } from 'ngx-bootstrap/tabs';

@Component({
  selector: 'demo-tabs-manual',
  templateUrl: './manual.html'
})
export class DemoTabsManualComponent {
  @ViewChild('staticTabs') staticTabs: TabsetComponent;

  selectTab(tab_id: number) {
    this.staticTabs.tabs[tab_id].active = true;
  }
}
