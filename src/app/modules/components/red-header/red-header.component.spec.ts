import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedHeaderComponent } from './red-header.component';

describe('RedHeaderComponent', () => {
  let component: RedHeaderComponent;
  let fixture: ComponentFixture<RedHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
