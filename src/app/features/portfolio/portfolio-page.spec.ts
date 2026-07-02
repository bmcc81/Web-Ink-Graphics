import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { PortfolioPage } from './portfolio-page';

describe('PortfolioPage', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioPage],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  it('filters projects by category', () => {
    const fixture = TestBed.createComponent(PortfolioPage);
    fixture.componentInstance.projects.set([
      {
        id: 'one',
        slug: 'first-project',
        featured: false,
        translations: [{ locale: 'EN', title: 'First', summary: 'First summary' }],
        categories: [{ id: 'web', slug: 'website', nameEn: 'Website', nameFr: 'Site Web' }],
        images: [],
      },
      {
        id: 'two',
        slug: 'second-project',
        featured: false,
        translations: [{ locale: 'EN', title: 'Second', summary: 'Second summary' }],
        categories: [{ id: 'brand', slug: 'branding', nameEn: 'Branding', nameFr: 'Image de marque' }],
        images: [],
      },
    ]);
    fixture.componentInstance.loading.set(false);
    fixture.componentInstance.activeCategory.set('website');
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelectorAll('article')).toHaveLength(1);
  });
});
