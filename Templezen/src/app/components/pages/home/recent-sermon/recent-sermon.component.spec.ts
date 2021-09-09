import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentSermonComponent } from './recent-sermon.component';

describe('RecentSermonComponent', () => {
  let component: RecentSermonComponent;
  let fixture: ComponentFixture<RecentSermonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentSermonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentSermonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
