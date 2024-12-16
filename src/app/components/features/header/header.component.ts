import { AfterViewChecked, AfterViewInit, Component, ElementRef, inject, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NavigationStart, Router, RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { BurgerMenuComponent } from '../burger-menu/burger-menu.component';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { CookieService } from '../../../services/cookie/cookie.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, BurgerMenuComponent, TranslatePipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit, OnDestroy, AfterViewChecked {
  @ViewChild(BurgerMenuComponent) burgermenu! : BurgerMenuComponent

  private routeSubscription?: Subscription;
  private pointer?: HTMLElement | null;
  private positions: string[] = []

  constructor(private router: Router, private translate: TranslateService, private cookies: CookieService) {}
  ngAfterViewChecked(): void {
    this.navSetup()
    window.onresize = () => this.navSetup()
  }

  ngOnInit(): void {

    this.pointer = document.getElementById('pointer')
    this.routeSubscription = this.router.events
      .subscribe((event) => {
        if(event instanceof NavigationStart){
          this.burgermenu.close();
          (document.getElementById('mobile_nav'))?.classList.remove('active')
          if(event.url == '/home'){
            this.pointer!.style.marginLeft = this.positions[0]
          }
          else if(event.url == '/about'){
            this.pointer!.style.marginLeft = this.positions[1]
          }
          else if(event.url == '/portfolio'){
            this.pointer!.style.marginLeft = this.positions[2]
          }
          else if(event.url == '/news'){
            this.pointer!.style.marginLeft = this.positions[3]
          }
        }
      });
  }
  ngOnDestroy(): void {
    this.routeSubscription?.unsubscribe()
  }

  openBurgerMenu(){
    this.burgermenu.toggle()
  }

  openLangDropdown(){
    const dropdown = document.getElementById('dropdown')
    dropdown!.classList.toggle('open');
  }

  public setLang(lang: string): void{
    this.cookies.lang = lang
    const currentUrl = this.router.url;

    const urlSegments = currentUrl.split('/');
    const lastSegment = urlSegments[urlSegments.length - 1] || 'home';
    this.openLangDropdown()
    this.router.navigate([lastSegment])
  }
  public get currentLang():string{
    return this.translate.currentLang
  }

  navSetup(){
    this.positions = []

    let nav = document.getElementsByClassName('nav-button')
    for(let i = 0; i<nav.length;i++){
      let prev = 0
      if(i > 0) prev = parseFloat(this.positions[i-1].substring(0, this.positions[i-1].length -2))
      let elemWidth = window.getComputedStyle(nav.item(i)as HTMLElement).width
      this.positions.push((parseFloat(elemWidth.substring(0, elemWidth.length-2)) + prev + 40) + 'px')
    }
    this.positions.unshift('0px')
  }
}
