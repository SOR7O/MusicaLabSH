import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopaplaylistComponent } from './topaplaylist.component';

describe('TopaplaylistComponent', () => {
  let component: TopaplaylistComponent;
  let fixture: ComponentFixture<TopaplaylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopaplaylistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopaplaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
