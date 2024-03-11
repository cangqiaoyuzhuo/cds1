import { NgModule } from '@angular/core';
import { WorkflowV2StagesGraphComponent } from './stages-graph.component';
import { WorkflowV2JobsGraphComponent } from './jobs-graph.component';
import { GraphForkJoinNodeComponent } from './node/fork-join-node.components';
import { GraphGateNodeComponent } from './node/gate-node.component';
import { GraphJobNodeComponent } from './node/job-node.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { AimOutline, RotateRightOutline, RotateLeftOutline } from '@ant-design/icons-angular/icons';
import { IconDefinition } from '@ant-design/icons-angular';

const icons: IconDefinition[] = [AimOutline, RotateRightOutline, RotateLeftOutline];

@NgModule({
  declarations: [
    GraphForkJoinNodeComponent,
    GraphGateNodeComponent,
    GraphJobNodeComponent,
    WorkflowV2JobsGraphComponent,
    WorkflowV2StagesGraphComponent
  ],
  imports: [
    CommonModule,
    NzAvatarModule,
    NzButtonModule,
    NzIconModule.forRoot(icons),
    NzToolTipModule
  ],
  exports: [
    GraphForkJoinNodeComponent,
    GraphGateNodeComponent,
    GraphJobNodeComponent,
    WorkflowV2JobsGraphComponent,
    WorkflowV2StagesGraphComponent
  ]
})
export class WorkflowGraphModule { }
