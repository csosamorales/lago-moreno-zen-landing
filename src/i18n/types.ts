export type Lang = 'es' | 'en'

export interface ContentPart {
  text?: string
  highlighted?: boolean
  bold?: boolean
  br?: boolean
}

export interface TransportCard {
  title: string
  badge: string
  content: ContentPart[]
  linkText?: string
}

export interface BusLineData {
  number: string
  route: string
  description: ContentPart[]
  detail: ContentPart[]
}

export interface ApartmentCardData {
  badge: string
  description: string
  specs: string
  amenities: string[]
}

export interface ApartmentDetailData {
  badge: string
  description: string[]
  amenities: Array<{ group: string; icon: string; items: string[] }>
  images: Array<{ label: string }>
}

export interface Translations {
  nav: {
    departments: string
    amenities: string
    location: string
    book: string
  }
  footer: {
    contact: string
    follow: string
    rights: string
  }
  home: {
    hero: {
      tagline: string
      subtitle: string
      ctaView: string
      ctaContact: string
    }
    apartments: {
      label: string
      headingLight: string
      headingBold: string
      body: string
      cards: Record<string, ApartmentCardData>
    }
    features: Array<{ title: string; text: string }>
    testimonial: {
      label: string
      quote: string
      author: string
    }
    locationSection: {
      label: string
      headingLight: string
      headingHighlight: string
      mapPlaceholder: string
      cta: string
    }
  }
  apartmentCard: {
    viewDetail: string
    // inquire: string
  }
  apartmentDetail: {
    breadcrumbHome: string
    breadcrumbDepartments: string
    address: string
    amenitiesLabel: string
    availabilityLabel: string
    contactLabel: string
    emailPlaceholder: string
    namePlaceholder: string
    lastNamePlaceholder: string
    phonePlaceholder: string
    guestsPlaceholder: string
    checkInPlaceholder: string
    checkOutPlaceholder: string
    messagePlaceholder: string
    submitEmail: string
    submitWhatsapp: string
    guestUnit: string
    bedUnit: string
    bathUnit: string
    bathsUnit: string
    errorEmailRequired: string
    errorEmailInvalid: string
    errorNameRequired: string
    errorLastNameRequired: string
    errorGuestsRequired: string
    errorGuestsMin: string
    errorCheckInRequired: string
    errorCheckInPast: string
    errorCheckOutRequired: string
    errorCheckOutBeforeCheckIn: string
  }
  apartmentsData: Record<string, ApartmentDetailData>
  location: {
    hero: {
      tagline: string
      headingLight: string
      headingBold: string
      headingLight2: string
      subtitle: string
    }
    howToGet: {
      sectionLabel: string
      headingLight: string
      headingBold: string
      headingLight2: string
      airport: TransportCard
      car: TransportCard
      bus: TransportCard
      mapLabel: string
      mapCaption: string
    }
    busLines: {
      sectionLabel: string
      headingLight: string
      headingBold: string
      lines: BusLineData[]
      importantLabel: string
      importantText: ContentPart[]
    }
    distances: {
      sectionLabel: string
      headingLight: string
      headingBold: string
      headingLight2: string
      body1: string
      body2: string
      rows: Array<{ place: string; distance: string; time: string }>
    }
    attractions: {
      sectionLabel: string
      headingLight: string
      headingBold: string
      headingLight2: string
      items: Array<{ name: string; distance: string; description: string }>
    }
    resources: {
      sectionLabel: string
      headingLight: string
      headingBold: string
      headingLight2: string
      items: Array<{
        category: string
        title: string
        description: string
        tags: string[]
        linkLabel: string
        href: string
      }>
    }
    cta: {
      heading: string
      body: string
      button: string
    }
  }
}
