import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletediaryComponent } from './deletediary.component';

describe('DeletediaryComponent', () => {
  let component: DeletediaryComponent;
  let fixture: ComponentFixture<DeletediaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletediaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletediaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
