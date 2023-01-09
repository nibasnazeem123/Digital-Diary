import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloginputComponent } from './bloginput.component';

describe('BloginputComponent', () => {
  let component: BloginputComponent;
  let fixture: ComponentFixture<BloginputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BloginputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BloginputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
