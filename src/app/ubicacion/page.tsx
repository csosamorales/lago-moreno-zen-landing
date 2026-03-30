import SectionLabel from '@/components/SectionLabel'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import TransportCard from '@/components/TransportCard'
import BusRoute from '@/components/BusRoute'
import DistanceRow from '@/components/DistanceRow'
import AttractionCard from '@/components/AttractionCard'
import ResourceCard from '@/components/ResourceCard'

export default function UbicacionPage() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section
        className="relative flex items-center justify-center text-center px-6"
        style={{ height: 420, background: 'linear-gradient(135deg, #2a1f14 0%, #6b8c6e 100%)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/60 pointer-events-none" />
        <div className="relative z-10 max-w-2xl">
          <p className="uppercase tracking-widest text-[10px] font-bold text-gold mb-3">Cómo llegar</p>
          <h1 className="text-3xl md:text-5xl font-light text-white mb-4">Ubicación ideal para descubrir todo</h1>
          <p className="text-white/70 text-sm">A 200 metros de la Playa del Viento · Av. Bustillo km 13</p>
        </div>
      </section>

      {/* HOW TO GET THERE */}
      <section className="bg-cream py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Transport cards */}
            <div>
              <SectionLabel>Cómo llegar</SectionLabel>
              <h2 className="text-2xl font-light text-ink mb-8 mt-2">Desde cualquier punto de Bariloche</h2>
              <div className="flex flex-col gap-4">
                <TransportCard
                  icon="✈"
                  title="Desde el aeropuerto"
                  description="El Aeropuerto Internacional de Bariloche se encuentra a 14km del centro y a 27km de los departamentos. El tiempo de viaje es de aproximadamente 30 minutos."
                  details={['Remises disponibles en llegadas (AutoJet y otros)', 'Bus línea 72 directa al centro', 'Distancia: 27km aprox.']}
                />
                <TransportCard
                  icon="🚗"
                  title="En auto propio o alquilado"
                  description="Tomá la Av. Bustillo en dirección oeste. Al llegar al km 13, encontrarás los departamentos. Contamos con estacionamiento privado incluido."
                  details={['Av. Bustillo km 13, dirección oeste', 'Estacionamiento privado incluido', 'Uber y Cabify disponibles en Bariloche']}
                />
                <TransportCard
                  icon="🚌"
                  title="Transporte público"
                  description="La empresa Mi Bus opera las líneas que recorren la Av. Bustillo. Se requiere tarjeta SUBE. Las líneas 20, 21 y 22 pasan frente al complejo."
                  details={['Líneas 20, 21 y 22 por Av. Bustillo', 'Frecuencia: cada 30 minutos aprox.', 'Tarjeta SUBE requerida']}
                />
              </div>
            </div>

            {/* Map */}
            <div>
              <p className="uppercase tracking-widest text-[10px] font-bold text-gold mb-4">Av. Bustillo km 13 · Bariloche</p>
              <div
                className="w-full bg-beige-dark flex items-center justify-center"
                style={{ aspectRatio: '4/3', filter: 'sepia(0.2)' }}
              >
                <span className="text-ink/40 text-sm uppercase tracking-widest">Google Maps</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BUS LINES */}
      <section className="bg-brown-dark py-16">
        <div className="max-w-6xl mx-auto px-6">
          <SectionLabel>Líneas de colectivo</SectionLabel>
          <h2 className="text-2xl font-light text-white mb-8 mt-2">Rutas desde y hacia el complejo</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <BusRoute
              number="72"
              route="Aeropuerto → Centro"
              description="Conecta el aeropuerto con el centro de Bariloche."
              schedules={['7:10','9:00','11:00','13:40','16:05','18:10','20:40','22:00']}
            />
            <BusRoute
              number="20–22"
              route="Centro → Bustillo km 13"
              description="Pasan frente al complejo. Frecuencia cada 30 minutos, de 5:30 a 21:00 hs."
            />
            <BusRoute
              number="10"
              route="Centro → Colonia Suiza"
              description="7 frecuencias diarias. Ideal para visitar la Colonia Suiza y sus alrededores."
            />
            <BusRoute
              number="Llao Llao"
              route="Terminal → Llao Llao km 25"
              description="Recorre toda la Av. Bustillo hasta el Hotel Llao Llao. Sale cada 20 minutos."
            />
          </div>
          <div className="mt-8 bg-brown p-4">
            <p className="text-white/70 text-xs">
              <strong className="text-gold">Tarjeta SUBE:</strong> Requerida para todos los colectivos. Podés conseguirla en kioscos habilitados del centro de Bariloche. También disponible en la terminal de ómnibus.
            </p>
          </div>
        </div>
      </section>

      {/* DISTANCES */}
      <section className="bg-cream py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionLabel>Distancias desde el complejo</SectionLabel>
              <h2 className="text-2xl font-light text-ink mt-2 mb-8">Todo Bariloche al alcance</h2>
              <p className="text-ink/70 text-sm leading-relaxed">
                La privilegiada ubicación en el km 13 de la Av. Bustillo nos pone a pocos minutos de las principales atracciones turísticas, playas lacustres y senderos de montaña de la región.
              </p>
            </div>
            <div>
              <DistanceRow place="Playa del Viento" distance="200 m" />
              <DistanceRow place="Centro de Bariloche" distance="13 km" />
              <DistanceRow place="Aeropuerto Internacional" distance="27 km" />
              <DistanceRow place="Cerro Otto" distance="~3 km" />
              <DistanceRow place="Cerro Campanario" distance="4.5 km" />
              <DistanceRow place="Circuito Chico" distance="5 km" />
              <DistanceRow place="Colonia Suiza" distance="12 km" />
              <DistanceRow place="Cerro Catedral" distance="~16 km" />
            </div>
          </div>
        </div>
      </section>

      {/* ATTRACTIONS */}
      <section className="bg-beige py-16">
        <div className="max-w-6xl mx-auto px-6">
          <SectionLabel>Atracciones cercanas</SectionLabel>
          <h2 className="text-2xl font-light text-ink mt-2 mb-8">Qué hacer desde el complejo</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            <AttractionCard name="Cerro Catedral" distance="~16 km" description="El mayor centro de esquí de Sudamérica. En verano, trekking y mountain bike." />
            <AttractionCard name="Circuito Chico" distance="~5 km" description="Ruta escénica con paisajes de lago y montaña. Ideal en auto o bici." />
            <AttractionCard name="Cerro Otto" distance="~3 km" description="Teleférico y vistas panorámicas 360° de Bariloche y el lago Nahuel Huapi." />
            <AttractionCard name="Cerro Campanario" distance="4.5 km" description="Considerada una de las vistas más bellas del mundo. Aerosilla desde la base." />
            <AttractionCard name="Colonia Suiza" distance="12 km" description="Aldea con arquitectura suiza, curanto y artesanías. Domingos: feria artesanal." />
          </div>
        </div>
      </section>

      {/* RESOURCES */}
      <section className="bg-cream py-16">
        <div className="max-w-6xl mx-auto px-6">
          <SectionLabel>Recursos útiles</SectionLabel>
          <h2 className="text-2xl font-light text-ink mt-2 mb-8">Para planificar tu viaje</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ResourceCard
              source="Parque Nacional"
              title="Parque Nacional Nahuel Huapi"
              description="Información oficial sobre senderos, guardaparques, accesos y normativa del parque."
              tags={['Trekking', 'Naturaleza', 'Oficial']}
              url="nahuelhuapi.gov.ar"
            />
            <ResourceCard
              source="Turismo oficial"
              title="Bariloche Turismo Oficial"
              description="Guía oficial de turismo de San Carlos de Bariloche: eventos, excursiones y alojamientos."
              tags={['Turismo', 'Excursiones', 'Eventos']}
              url="barilocheturismo.gob.ar"
            />
            <ResourceCard
              source="Actividades"
              title="Bariloche Trekking"
              description="Portal especializado en trekking, escalada y actividades outdoor en la región patagónica."
              tags={['Trekking', 'Outdoor', 'Guías']}
              url="barilochetrekking.com"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brown-dark py-16 text-center">
        <div className="max-w-xl mx-auto px-6">
          <SectionLabel>¿Tenés dudas sobre cómo llegar?</SectionLabel>
          <h2 className="text-2xl font-light text-white mt-4 mb-6">
            Estamos para ayudarte a planificar tu llegada
          </h2>
          <a
            href="https://wa.me/5492944428762"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gold hover:bg-gold-light text-white px-8 py-3 text-xs uppercase tracking-widest transition-colors"
          >
            Consultarnos por WhatsApp
          </a>
        </div>
      </section>

      <Footer />
    </>
  )
}
