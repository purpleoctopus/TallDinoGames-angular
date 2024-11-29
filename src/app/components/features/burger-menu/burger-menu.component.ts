import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-burger-menu',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './burger-menu.component.html',
  styleUrl: './burger-menu.component.scss'
})
export class BurgerMenuComponent implements OnInit {
  private parent!: HTMLElement;
  private opened: boolean = false;

  ngOnInit(): void {
    this.parent= document.getElementsByClassName('burger-menu')[0] as HTMLElement
  }

  public toggle(){
    if(this.opened){
      this.parent.style.transform = 'translateX(100vw)';
      (document.getElementsByTagName('body')[0] as HTMLElement).style.overflow = ''
    }
    else{
      this.parent.style.transform = 'translateX(0px)';
      (document.getElementsByTagName('body')[0] as HTMLElement).style.overflow = 'hidden'
    }
    this.opened = !this.opened
  }
  public close(){
    if(this.opened){
      this.parent.style.transform = 'translateX(100vw)';
      (document.getElementsByTagName('body')[0] as HTMLElement).style.overflow = ''
      this.opened = false
    }
  }
}
