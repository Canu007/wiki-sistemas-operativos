const sidebars = {
  tutorialSidebar: [
    {
  type: 'category',
  label: 'Unidad 1: Introducción',
  items: [
    'unidad-1-introduccion/introduccion-sistemas-operativos',
    'unidad-1-introduccion/evolucion-historica',
  'unidad-1-introduccion/llamadas-al-sistema',
    'unidad-1-introduccion/clasificacion-sistemas-operativos',
'unidad-1-introduccion/proteccion-sistema',
  ],
},
    {
      type: 'category',
      label: 'Unidad 2: Procesos',
      items: [
    'unidad-2-procesos/introduccion-procesos',
    'unidad-2-procesos/estados-proceso',
    'unidad-2-procesos/bloque-control-procesos',
        {
          type: 'link',
          label: 'Contenido próximamente',
          href: '/docs/unidad-2-procesos',
        },
      ],
    },
    {
      type: 'category',
      label: 'Unidad 3: Concurrencia',
      items: [
        {
          type: 'link',
          label: 'Contenido próximamente',
          href: '/docs/unidad-3-concurrencia',
        },
      ],
    },
    {
      type: 'category',
      label: 'Unidad 4: Interbloqueos',
      items: [
        {
          type: 'link',
          label: 'Contenido próximamente',
          href: '/docs/unidad-4-interbloqueos',
        },
      ],
    },
    {
      type: 'category',
      label: 'Unidad 5: Memoria',
      items: [
        {
          type: 'link',
          label: 'Contenido próximamente',
          href: '/docs/unidad-5-memoria',
        },
      ],
    },
  ],
};

module.exports = sidebars;
