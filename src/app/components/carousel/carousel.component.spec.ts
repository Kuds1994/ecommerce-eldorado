import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SwiperModule } from 'swiper/angular';

import { CarouselComponent } from './carousel.component';

describe('CarouselComponent', () => {
  let component: CarouselComponent;
  let fixture: ComponentFixture<CarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselComponent],
      providers: [HttpClient, HttpHandler],
      imports: [SwiperModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have a title', () => {

    component.carouselTitle = 'Carousel Title';

    expect(component.carouselTitle).toBe('Carousel Title');
  });

  it('should have called function', () => {

    component.productsType = 'Masculino';

    expect(component.productsType).toBe('Masculino');
  });
});
