import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelecomOpsComponent } from './telecom-ops.component';

describe('TelecomOpsComponent', () => {
  let component: TelecomOpsComponent;
  let fixture: ComponentFixture<TelecomOpsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelecomOpsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelecomOpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
