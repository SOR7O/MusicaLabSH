import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistuserComponent } from './playlistuser.component';

describe('PlaylistuserComponent', () => {
  let component: PlaylistuserComponent;
  let fixture: ComponentFixture<PlaylistuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaylistuserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
