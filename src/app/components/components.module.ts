import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {ProjectsTableComponent} from './projects-table/projects-table.component'
import { JobTableComponent } from './job-table/job-table.component';
import { PmjobTableComponent } from './pmjob-table/pmjob-table.component';
import { PmtaskTableComponent } from './pmtask-table/pmtask-table.component';
import {MaterialModule} from "../shared/material-modules";
import { FreelancerTableComponent } from './freelancer-table/freelancer-table.component';
import { EventTableComponent } from './event-table/event-table.component';
import { MatTooltipModule } from '@angular/material';
import { DialogsPageModule } from '../shared/dialogs/dialogs.module';
import { WordDialogComponent } from '../shared/dialogs/word-dialog/word-dialog.component';
import { TooltipsModule } from 'ionic-tooltips';
import { FinanceTableComponent } from './finance-table/finance-table.component';
import { ConversationComponent } from './conversation/conversation.component';
import { CreatingJobTableComponent } from './creating-job-table/creating-job-table.component';
import { FinanceQuotationTableComponent } from './finance-quotation-table/finance-quotation-table.component';
import { FinanceInvoiceTableComponent } from './finance-invoice-table/finance-invoice-table.component';
import { FinanceCollectionTableComponent } from './finance-collection-table/finance-collection-table.component';
import { RateTableComponent } from './rate-table/rate-table.component';
import { ManagerClientsRateTableComponent } from './manager-clients-rate-table/manager-clients-rate-table.component';
import { TransMemoryTableComponent } from './trans-memory-table/trans-memory-table.component';
import { TranscriptComponent } from './transcript/transcript.component';
import { ProgressComponent } from './progress/progress.component';
import { PaymentDialogComponent } from '../shared/dialogs/payment-dialog/payment-dialog.component';
import { ChatComponent } from './chat/chat.component';
import {PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface, PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import { PaymentComponent } from './payment/payment.component';
@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCheckboxModule,
    MaterialModule,
    MatTooltipModule,
    DialogsPageModule,
    PerfectScrollbarModule,
    TooltipsModule.forRoot(), 
  ],
  declarations: [
    ProjectsTableComponent,
    JobTableComponent,
    PmjobTableComponent,
    PmtaskTableComponent,
    FreelancerTableComponent,
    EventTableComponent,
    FinanceTableComponent,
    ConversationComponent,
    CreatingJobTableComponent,
    FinanceQuotationTableComponent,
    FinanceInvoiceTableComponent,
    FinanceCollectionTableComponent,
    RateTableComponent,
    ManagerClientsRateTableComponent,
    TransMemoryTableComponent,
    TranscriptComponent,
    ProgressComponent,
    ChatComponent,
    PaymentComponent
  ],
  exports:[
    ProjectsTableComponent,
    JobTableComponent,
    PmjobTableComponent,
    PmtaskTableComponent,
    FreelancerTableComponent,
    EventTableComponent,
    FinanceTableComponent,
    ConversationComponent,
    CreatingJobTableComponent,
    FinanceQuotationTableComponent,
    FinanceInvoiceTableComponent,
    FinanceCollectionTableComponent,
    RateTableComponent,
    ManagerClientsRateTableComponent,
    TransMemoryTableComponent,
    TranscriptComponent,
    ProgressComponent,
    ChatComponent,
    PaymentComponent
  ],
  entryComponents: [
    WordDialogComponent,
    PaymentDialogComponent
  ],
})
export class ComponentsModule { }
