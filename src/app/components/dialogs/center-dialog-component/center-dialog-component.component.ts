import { Component, Inject  } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-center-dialog-component',
  standalone: true,
  imports: [],
  templateUrl: './center-dialog-component.component.html',
  styleUrl: './center-dialog-component.component.css'
})
export class CenterDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<CenterDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onCloseClick(): void {
    this.dialogRef.close();
  }
}
