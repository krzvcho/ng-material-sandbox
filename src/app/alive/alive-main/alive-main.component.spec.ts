import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AliveMainComponent } from './alive-main.component';

describe('AliveMainComponent', () => {
  let component: AliveMainComponent;
  let fixture: ComponentFixture<AliveMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AliveMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AliveMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
