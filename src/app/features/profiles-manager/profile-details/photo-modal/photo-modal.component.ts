import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'photo-modal',
  templateUrl: './photo-modal.component.html',
  styleUrls: ['./photo-modal.component.scss'],
})
export class PhotoModalComponent {

  constructor(public dialogRef: MatDialogRef<PhotoModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: { src: string },
  ) {
  }

}
