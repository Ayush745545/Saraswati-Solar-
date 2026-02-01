import React from 'react';

const Products: React.FC = () => {
  const products = [
    { title: 'Solar panel mounting structure / rack', desc: 'for rooftop or ground installation', image: '/products/Solar panel roof.png', imageAlt: 'Mounting structure' },
    { title: 'Solar water heater', desc: 'evacuated tube type', image: '/products/Solar water heater.png', imageAlt: 'Solar water heater' },
    { title: 'Solar street light system', desc: 'panel + LED lamp + pole', image: '/products/Solar street light.png', imageAlt: 'Solar street light' },
    { title: 'Solar inverter', desc: '', image: '/products/solar-inveetor.png', imageAlt: 'Solar inverter' },
    { title: 'Solar battery', desc: 'tubular / lithium type for energy storage', image: '/products/solar-battery.png', imageAlt: 'Solar battery' },
    { title: 'DC solar cables / wires', desc: 'red & black', image: '/products/DC-solar- cables.png', imageAlt: 'DC solar cables' },
    { title: 'Lightning arresters / air terminals', desc: 'for surge & lightning protection', image: '/products/Lightning arresters.png', imageAlt: 'Lightning arresters' },
    { title: 'Electric energy meter', desc: 'net meter / utility meter', image: '/products/meter.png', imageAlt: 'Energy meter' },
    { title: 'Solar lantern with small solar panel', desc: '', image: '/products/laintain.png', imageAlt: 'Solar lantern' },
    { title: 'DCDB – DC Distribution Box', desc: 'protection box with MCB/SPD/fuse', image: '/products/Solar-DC-Distribition.webp', imageAlt: 'DC Distribution Box' },
    { title: 'Earthing / grounding kit', desc: 'copper earth rods, chemical earthing compound, clamps', image: '/products/equpments.png', imageAlt: 'Earthing kit' },
    { title: 'Solar mounting hardware', desc: 'mid clamps, end clamps, bolts, nuts, fasteners', image: '/products/71-E0x34XRL._AC_.jpg', imageAlt: 'Mounting hardware' },
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-3">Products</h2>
          <p className="text-lg md:text-xl text-slate-600 font-medium">Explore our curated product offerings for residential and commercial projects.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <div key={p.title} className="bg-slate-50 p-6 md:p-8 rounded-2xl shadow-md border border-slate-100 flex flex-col min-h-[18rem]">
              {p.image && (
                <div className="mb-4 w-full overflow-hidden rounded-md shadow-sm">
                  <img
                    src={p.image}
                    alt={p.imageAlt || p.title}
                    className="w-full h-56 md:h-64 object-cover"
                  />
                </div>
              )}

              <div className="flex-1">
                <h3 className="font-semibold text-lg md:text-xl text-slate-900">{p.title}</h3>
                {p.desc && <p className="text-slate-600 text-sm md:text-base mt-3">{p.desc}</p>}
                {p.imageAlt && p.title !== 'Mono PERC Module' && (
                  <p className="text-sm text-slate-600 mt-2">{p.imageAlt}</p>
                )}
              </div>

              <div className="mt-6 flex items-center justify-between">
                <span className="text-sm text-slate-500">SKU: {p.sku ? p.sku : p.title.split(' ').slice(0,2).join('-').toUpperCase()}</span>
                <a href="#contact" className="text-orange-600 font-medium hover:underline">Enquire</a>
              </div>
            </div>
          ))}
        </div>

        <p className="text-xs text-slate-400 mt-8 text-center italic">
          *Click 'Enquire' to request more information or a site survey.
        </p>
      </div>
    </section>
  );
};

export default Products;
