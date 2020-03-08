import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowDataComponent } from './show-data/show-data.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';

import { CustomerComponent } from './customer/customer.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VisualCardComponent } from './visual-card/visual-card.component';
import { InvoiceCardComponent } from './invoice-card/invoice-card.component';
import { ClientsCardComponent } from './clients-card/clients-card.component';
import { FinanceCardComponent } from './finance-card/finance-card.component';
// Register Form Components
import { BasicFormDetailsComponent } from './basic-form-details/basic-form-details.component';


// Angular material 
import { MatButtonModule} from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import {  MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { MatMenuModule} from '@angular/material/menu';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { MatCardModule} from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';

import { InvoiceTableComponent } from './invoice-table/invoice-table.component';
import { ClientsTableComponent } from './clients-table/clients-table.component';
import { FinanceTableComponent } from './finance-table/finance-table.component';
import { BankTemplateComponent } from './bank-template/bank-template.component';
import { HeadernavComponent } from './headernav/headernav.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { InvoiceBarChartComponent } from './invoice-bar-chart/invoice-bar-chart.component';
import { FinanceBarChartComponent } from './finance-bar-chart/finance-bar-chart.component';
import { RegisterFormComponent } from './register-form/register-form.component';







const routes = [  
{path: 'home', component:HomeComponent},
{ path: 'register', component:RegisterFormComponent},
{ path:'customer', component: CustomerComponent},
{path:'customer-details', component:CustomerDetailsComponent},
// {path:'', component: ShowDataComponent},
{path: '', redirectTo:'home', pathMatch:'full'},
{ path:'**', component: PagenotfoundComponent },


];

@NgModule({
  declarations: [
    AppComponent,
    ShowDataComponent,
    PagenotfoundComponent,
    HomeComponent,
    CustomerComponent,
    CustomerDetailsComponent,
    SidenavComponent,
    VisualCardComponent,
    InvoiceCardComponent,
    ClientsCardComponent,
    FinanceCardComponent,
    BasicFormDetailsComponent,
    InvoiceTableComponent,
    ClientsTableComponent,
    FinanceTableComponent,
    BankTemplateComponent,
    HeadernavComponent,
    PieChartComponent,
    InvoiceBarChartComponent,
    FinanceBarChartComponent,
    RegisterFormComponent,
    
  
    
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
  
    CommonModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    FlexLayoutModule,
    MatMenuModule,
    MatListModule,
    MatDividerModule,
    MatCardModule,
    MatTableModule,
    ReactiveFormsModule,
    FormlyModule,
    FormlyBootstrapModule,
    MatStepperModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatRadioModule,
    
  
   
  ],
  exports: [
 
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpModule,
    BrowserAnimationsModule,
   
    CommonModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatDividerModule,
    MatIconModule,
    FlexLayoutModule,
    MatMenuModule,
    MatCardModule,
    MatTableModule,
    InvoiceTableComponent,
    HomeComponent,
    RegisterFormComponent,
    
    ReactiveFormsModule,
    FormlyModule,
    FormlyBootstrapModule,
    MatStepperModule,
    FormsModule,
    MatSelectModule,

   
  ],
  providers:    [],
  bootstrap: [AppComponent]
})
export class AppModule { }
