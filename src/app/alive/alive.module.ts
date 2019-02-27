import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AliveRoutingModule } from "./alive-routing.module";
import { AliveMainComponent } from "./alive-main/alive-main.component";
import { SceneComponent } from "./alive-main/scene/scene.component";
import { LiveDotComponent } from "./alive-main/scene/live-dot/live-dot.component";

@NgModule({
  declarations: [AliveMainComponent, SceneComponent, LiveDotComponent],
  imports: [CommonModule, AliveRoutingModule],
  providers: [],
  bootstrap: [AliveMainComponent],
  entryComponents: [LiveDotComponent]
})
export class AliveModule {}
