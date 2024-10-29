import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router, RouterModule } from '@angular/router';
import { filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit, OnDestroy {
  private routeSubscription?: Subscription;
  private pointer?: HTMLElement | null;
  private positions: string[] = []
  private width: string[] = []

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    let filler = document.getElementById('header-filler')
    filler!.style.height = window.getComputedStyle(document.getElementsByTagName('header')[0] as HTMLElement).height

    let nav = document.getElementsByTagName('a')
    for(let i = 0; i<nav.length;i++){
      let prev = 0
      if(i > 0) prev = parseFloat(this.positions[i-1].substring(0, this.positions[i-1].length -2))
      let elemWidth = window.getComputedStyle(nav.item(i)as HTMLElement).width
      this.width.push(elemWidth)
      this.positions.push((parseFloat(elemWidth.substring(0, elemWidth.length-2)) + prev + 40) + 'px')
    }
    this.positions.unshift('0px')
    this.pointer = document.getElementById('pointer')
    this.routeSubscription = this.router.events
      .subscribe((event) => {
        if(event instanceof NavigationStart){
          if(event.url == '/'){
            this.pointer!.style.marginLeft = this.positions[0]
            setTimeout(()=>{this.pointer!.style.width = this.width[0]}, 350)
          }
          else if(event.url == '/home'){
            this.pointer!.style.marginLeft = this.positions[0]
            setTimeout(()=>{this.pointer!.style.width = this.width[0]}, 350)
          }
          else if(event.url == '/about'){
            setTimeout(()=>{this.pointer!.style.width = this.width[1]}, 350)
            this.pointer!.style.marginLeft = this.positions[1]
          }
          else if(event.url == '/portfolio'){
            this.pointer!.style.marginLeft = this.positions[2]
            setTimeout(()=>{this.pointer!.style.width = this.width[2]}, 350)
          }
          else if(event.url == '/news'){
            this.pointer!.style.marginLeft = this.positions[3]
            setTimeout(()=>{this.pointer!.style.width = this.width[3]}, 350)
          }
          this.pointer!.style.width = '10px'
        }
      });
  }
  ngOnDestroy(): void {
    this.routeSubscription?.unsubscribe()
  }
}
