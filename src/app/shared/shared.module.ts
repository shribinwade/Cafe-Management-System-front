import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionDirective ,AccordionAnchorDirective,AccordionLinkDirective} from './accordion';



@NgModule({
  declarations: [
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective
  ],
  exports: [
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective
   ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
