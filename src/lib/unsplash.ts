export interface UnsplashImage {
  url: string;
  alt: string;
  credit: {
    name: string;
    link: string;
  };
}

// Using direct Unsplash URLs for simplicity
// In a production environment, you should use the Unsplash API with proper authentication
export const images: Record<string, UnsplashImage> = {
  luxuryInterior: {
    url: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=1600&q=80',
    alt: 'Luxury modern interior with ambient lighting',
    credit: {
      name: 'Ricardo Gomez Angel',
      link: 'https://unsplash.com/@ripato'
    }
  },
  gymBackground: {
    url: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1600&q=80',
    alt: 'Modern gym interior with equipment',
    credit: {
      name: 'John Fornander',
      link: 'https://unsplash.com/@johnfornander'
    }
  },
  redLightTherapy: {
    url: 'https://images.unsplash.com/photo-1579126038374-6064e9370f0f?w=1600&q=80',
    alt: 'Person receiving red light therapy treatment',
    credit: {
      name: 'Conscious Design',
      link: 'https://unsplash.com/@conscious_design'
    }
  },
  compression: {
    url: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1600&q=80',
    alt: 'Athletic compression equipment',
    credit: {
      name: 'Jonathan Borba',
      link: 'https://unsplash.com/@jonathanborba'
    }
  },
  ivTherapy: {
    url: 'https://images.unsplash.com/photo-1584362917165-526a968579e8?w=1600&q=80',
    alt: 'IV therapy treatment setup',
    credit: {
      name: 'National Cancer Institute',
      link: 'https://unsplash.com/@nci'
    }
  },
  nytArticle: {
    url: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1600&q=80',
    alt: 'Athletic recovery session',
    credit: {
      name: 'John Arano',
      link: 'https://unsplash.com/@johnarano'
    }
  },
  verywellArticle: {
    url: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=1600&q=80',
    alt: 'Person stretching during recovery',
    credit: {
      name: 'Luis Quintero',
      link: 'https://unsplash.com/@jibarofoto'
    }
  },
  globeArticle: {
    url: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1600&q=80',
    alt: 'Wellness and recovery equipment',
    credit: {
      name: 'Dane Wetton',
      link: 'https://unsplash.com/@danewetton'
    }
  },
  storefront: {
    url: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1600&q=80',
    alt: 'Modern retail storefront with glass windows',
    credit: {
      name: 'Francesca Tosolini',
      link: 'https://unsplash.com/@fromitaly'
    }
  },
  brandedHoodie: {
    url: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=1600&q=80',
    alt: 'Person wearing a branded hoodie',
    credit: {
      name: 'Tobias Tullius',
      link: 'https://unsplash.com/@tobiastu'
    }
  },
  leatherTexture: {
    url: 'https://images.unsplash.com/photo-1617957718614-8c23f060c2d0?w=1600&q=80',
    alt: 'Luxury black fabric texture',
    credit: {
      name: 'Milad Fakurian',
      link: 'https://unsplash.com/@miladfakurian'
    }
  }
}; 