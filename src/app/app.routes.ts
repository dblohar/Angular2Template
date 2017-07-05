import { Routes,RouterModule } from '@angular/router'; 

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CareerComponent } from './career/career.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [  
{ path: '', component: HomeComponent },  
{ path: 'About', component: AboutComponent },  
{ path: 'Career', component: CareerComponent  },
{ path: 'Products', component: ProductsComponent },  
{ path: 'Contacts', component: ContactComponent  },   
];

export const obj=RouterModule.forRoot(routes);