import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: '🧗‍♂️Inicio',
      href: getPermalink('/'),
    },
    {
      text: 'Todos los productos',
      href: getPermalink('/categorias-productos'),
    },
    {
      text: 'Mujer',
      links: [
        {
          text: '👩Todos los productos de mujer',
          href:'/categorias-productos/mujer'
        },
        {
          text: '👚Blusas y camisetas',
          href:'/categorias-productos/mujer/blusas-casmisetas'
        },
        {
          text: '🥼Chaquetas, buzos y súeteres',
          href:'/categorias-productos/mujer/chaquetas-buzos'
        },
        // {
        //   text: '👖Pantalones, jeans y sudaderas',
        //   href:'/categorias-productos/mujer/pantalones-sudaderas'
        // },
        // {
        //   text: '🩳Shorts, faldas y vestidos',
        //   href:'/categorias-productos/mujer/shorts-faldas'
        // },
      ],
    },
    {
      text: 'Hombre',
      links: [
        {
          text: '👨Todos los productos de hombre',
          href:'/categorias-productos/hombre'
        },
        {
          text: '👕Camisas y camisetas',
          href:'/losplanosdelapaz'
        },
        {
          text: '🥼Chaquetas y buzos',
          href:'/revolucioncientificotecnologica'
        },
        // {
        //   text: '👖Pantalones, jeans y sudaderas',
        //   href:'/decalogodelapaz'
        // },
        // {
        //   text: '🩳Shorts y pantalonetas',
        //   href:'/libro'
        // },
      ],
    },
    //La categoria de niños queda al pendiente
    // {
    //   text: 'Niños',
    //   links: [
    //     {
    //       text: '👦👧Todos los productos de niños',
    //       href:'/categorias-productos/ninos'
    //     },
    //     {
    //       text: '👚👕Blusas, Camisas y camisetas',
    //       href:'/categorias-productos/ninos'
    //     },
    //     {
    //       text: '🥼Chaquetas, buzos y súeteres',
    //       href:'/categorias-productos/ninos'
    //     },
    //     {
    //       text: '👖Pantalones, jeans y sudaderas',
    //       href:'/categorias-productos/ninos'
    //     },
    //     {
    //       text: '🩳Shorts,pantalonetas, faldas y vestidos',
    //       href:'/categorias-productos/ninos'
    //     },
    //   ],
    // },
    {
      text: 'Nosotros',
      href: getPermalink('/blog'),
    },
    {
      text: '📽️Reels',
      href: getPermalink('/media/reels'),
    },
    {
      text: '📷Fotos',
      href: '/media/fotos',
    },
  ],
};
  
export const footerData = {
  links: [
  {
    title: 'Productos:',
    links: [
      { text: 'Ofertas', href: getPermalink('/categorias-productos') },
    ],
  },
  {
    title: 'Nosotros:',
    links: [
      { text: 'Conoce nuestra empresa', href: '/blog' },
    ],
  },
],
  secondaryLinks: [
    { text: 'Política de privacidad', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/sistemas_autoorganizados' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/sitemasautoorganizados' },
  ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 float-left rounded-sm bg-[url(https://onwidget.com/favicon/favicon-32x32.png)]"></span>
    Made by <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://softwarehelpcenter.vercel.app/" target="_blank"> Software help center</a> · All rights reserved.
  `,
};
