import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CookiesWarningComponent } from './cookies-warning.component';

describe('CookiesWarningComponent', () => {
  let component: CookiesWarningComponent;
  let fixture: ComponentFixture<CookiesWarningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CookiesWarningComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CookiesWarningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
