import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SermonSidebarComponent } from './sermon-sidebar.component';

describe('SermonSidebarComponent', () => {
  let component: SermonSidebarComponent;
  let fixture: ComponentFixture<SermonSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SermonSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SermonSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
