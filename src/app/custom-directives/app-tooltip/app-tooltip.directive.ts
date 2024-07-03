import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CenterDialogComponent } from '../../components/dialogs/center-dialog-component/center-dialog-component.component';

@Directive({
  selector: '[appTooltip]',
  standalone: true
})
export class AppTooltipDirective {
  @Input() tooltipMessage: string = '';
  @Input() tooltipPosition: 'top' | 'bottom' | 'left' | 'right' = 'top';
  @Input() tooltipColor: string = 'black';

  private tooltipElement: any;

  constructor(private el: ElementRef, private renderer: Renderer2, private dialog: MatDialog){}

  @HostListener('mouseenter') onMouseEnter(){
    if(!this.tooltipElement){
      this.createTooltip();
    }
    this.setPosition();
    this.renderer.setStyle(this.tooltipElement, 'visibility', 'visible');
  }

  @HostListener('mouseleave') onMouseLeave() {
    if (this.tooltipElement) {
      this.renderer.setStyle(this.tooltipElement, 'visibility', 'hidden');
    }
  }

  @HostListener('click') onClick() {
    console.log('click');
    this.openDialog();
  }
  
  private openDialog() {
    const dialogRef = this.dialog.open(CenterDialogComponent, {
      data: { message: this.tooltipMessage }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog closed with result:', result);
      // Handle dialog close actions if needed
    });
  }

  private createTooltip(){
    this.tooltipElement = this.renderer.createElement('span');
    this.renderer.appendChild(
      this.tooltipElement,
      this.renderer.createText(this.tooltipMessage)
    );

    this.renderer.appendChild(document.body, this.tooltipElement);
    this.renderer.setStyle(this.tooltipElement, 'position', 'absolute');
    this.renderer.setStyle(this.tooltipElement, 'background-color', this.tooltipColor);
    this.renderer.setStyle(this.tooltipElement, 'color', 'white');
    this.renderer.setStyle(this.tooltipElement, 'padding', '5px 10px');
    this.renderer.setStyle(this.tooltipElement, 'font-size', '20px');
    this.renderer.setStyle(this.tooltipElement, 'border-radius', '4px');
    this.renderer.setStyle(this.tooltipElement, 'white-space', 'nowrap');
    this.renderer.setStyle(this.tooltipElement, 'visibility', 'hidden');
  }

  private setPosition() {
    const hostPos = this.el.nativeElement.getBoundingClientRect();
    const tooltipPos = this.tooltipElement.getBoundingClientRect();
    const scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    let top, left;

    switch (this.tooltipPosition) {
      case 'top':
        top = hostPos.top - tooltipPos.height + scrollPos;
        left = hostPos.left + (hostPos.width - tooltipPos.width) / 2;
        break;
      case 'bottom':
        top = hostPos.top + hostPos.height + scrollPos;
        left = hostPos.left + (hostPos.width - tooltipPos.width) / 2;
        break;
      case 'left':
        top = hostPos.top + scrollPos + (hostPos.height - tooltipPos.height) / 2;
        left = hostPos.left - tooltipPos.width;
        break;
      case 'right':
        top = hostPos.top + scrollPos + (hostPos.height - tooltipPos.height) / 2;
        left = hostPos.left + hostPos.width;
        break;
    }
    this.renderer.setStyle(this.tooltipElement, 'top', `${top}px`);
    this.renderer.setStyle(this.tooltipElement, 'left', `${left}px`);
  }
}
