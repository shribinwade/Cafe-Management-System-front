import { NgModule } from '@angular/core';

import { AccordionDirective ,AccordionAnchorDirective,AccordionLinkDirective} from './accordion';
import { MenuItems } from './menu-items';
import { MaterialModule } from './material-module';



@NgModule({
  declarations: [
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective,
    
    
  ],
  exports: [
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective,
    MaterialModule
    
   ],
   providers:[MenuItems]
  
})
export class SharedModule { }
