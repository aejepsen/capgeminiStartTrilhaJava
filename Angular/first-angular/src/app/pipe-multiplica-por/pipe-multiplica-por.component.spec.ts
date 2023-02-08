import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeMultiplicaPorComponent } from './pipe-multiplica-por.component';

describe('PipeMultiplicaPorComponent', () => {
  let component: PipeMultiplicaPorComponent;
  let fixture: ComponentFixture<PipeMultiplicaPorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipeMultiplicaPorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipeMultiplicaPorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
