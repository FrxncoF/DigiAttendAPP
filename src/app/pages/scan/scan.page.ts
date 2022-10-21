import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scan',
  templateUrl: './scan.page.html',
  styleUrls: ['./scan.page.scss'],
})
export class ScanPage implements OnInit {
  isModalOpen= false;
  constructor() { }

  ngOnInit() {
  }
  setOpen(isOpen:boolean) {
    this.isModalOpen = isOpen;
  }
}
