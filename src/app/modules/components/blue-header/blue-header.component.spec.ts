import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlueHeaderComponent } from './blue-header.component';

describe('BlueHeaderComponent', () => {
  let component: BlueHeaderComponent;
  let fixture: ComponentFixture<BlueHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlueHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlueHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
