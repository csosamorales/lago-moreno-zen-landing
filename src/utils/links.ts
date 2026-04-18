export const links = {
  whatsapp: 'https://wa.me/5492944428762',
  whatsappCta: 'https://wa.me/message/S34MCDTW3AQXI1',
  nahuelHuapi: 'https://nahuelhuapi.gov.ar/',
  barilocheTurismo: 'https://barilocheturismo.gob.ar/',
  clubAndino: 'https://www.clubandino.org/',
  busTimetable: 'https://bariloche.org/horario-omnibus-linea-72/',
} as const;

export const whatsappApartmentLink = (apartmentName: string) =>
  `${links.whatsapp}?text=Hola! Me interesa el departamento ${apartmentName}`;
