import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserGrid } from './user-grid';

describe('UserGrid', () => {
  let component: UserGrid;
  let fixture: ComponentFixture<UserGrid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserGrid],
    }).compileComponents();

    fixture = TestBed.createComponent(UserGrid);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
