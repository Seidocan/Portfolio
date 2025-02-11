import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenueComponent } from './menu.component';

describe('MenueComponent', () => {
  let component: MenueComponent;
  let fixture: ComponentFixture<MenueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
