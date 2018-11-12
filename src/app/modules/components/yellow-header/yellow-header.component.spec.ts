import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YellowHeaderComponent } from './yellow-header.component';

describe('YellowHeaderComponent', () => {
  let component: YellowHeaderComponent;
  let fixture: ComponentFixture<YellowHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YellowHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YellowHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
