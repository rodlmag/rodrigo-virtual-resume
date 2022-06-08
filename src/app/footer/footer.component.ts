import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor( @Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
  }
  
  goFacebook(): void {
    this.document.location.href = 'https://es-la.facebook.com/public/Rodrigo-Lopez-M';
  }

  goLinkedIn(): void {
    this.document.location.href = 'https://mx.linkedin.com/in/rodrigo-lopez-m01';
  }

  goWhatsApp(): void {
    this.document.location.href = 'https://wa.me/+524442146723';
  }

}
