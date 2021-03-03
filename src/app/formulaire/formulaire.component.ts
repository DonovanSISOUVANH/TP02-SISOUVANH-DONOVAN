import { asLiteral } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {

  valid : boolean = false;
  nom : string = "";
  result : string = "";

  constructor() { }

  onSubmit(value){
    alert("Nom : " + value.name + ", Prenom : " +value.firstname);
  }


  ngOnInit(): void {
  }

}
