import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiarydataComponent } from './diarydata.component';

describe('DiarydataComponent', () => {
  let component: DiarydataComponent;
  let fixture: ComponentFixture<DiarydataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiarydataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiarydataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
