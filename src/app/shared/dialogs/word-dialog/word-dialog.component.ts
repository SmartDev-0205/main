import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from "@angular/material/dialog";
import { MAT_DIALOG_DATA} from "@angular/material/dialog";
@Component({
  selector: 'app-word-dialog',
  templateUrl: './word-dialog.component.html',
  styleUrls: ['./word-dialog.component.scss'],
})
export class WordDialogComponent implements OnInit {

  private wordsNumber = "";
  constructor(
    private dialogRef: MatDialogRef<WordDialogComponent>,
  ) { }

  ngOnInit() {}
  async continue(){
    this.dialogRef.close(this.wordsNumber);
  }
  close(){
    this.dialogRef.close();
  }

}
