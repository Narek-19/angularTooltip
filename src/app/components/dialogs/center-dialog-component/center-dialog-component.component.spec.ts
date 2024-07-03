import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterDialogComponentComponent } from './center-dialog-component.component';

describe('CenterDialogComponentComponent', () => {
  let component: CenterDialogComponentComponent;
  let fixture: ComponentFixture<CenterDialogComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CenterDialogComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CenterDialogComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
