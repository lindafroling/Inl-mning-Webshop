const products = [ 
    {
    name: 'Product 1',
    price: '10',   /* '10kr' skriv ut valutakoden (kr) i html sen */
    rating: 4,
    category: 'sweet',
    img:  {
              url: 'assets/images/donut1.jpg',
              width: 1000,
              height: 450,
              alt: 'valfri bildbeskrivning i text'
              },
    },

    {
        name: 'Product 2',
        price: '15',   /* '10kr' skriv ut valutakoden (kr) i html sen */
        rating: 4,
        category: 'sweet',
        img:  {
                  url: 'assets/images/donut1.jpg',
                  width: 1000,
                  height: 450,
                  alt: 'valfri bildbeskrivning i text'
                  },
        },

        {
            name: 'Product 3',
            price: '20',   /* '10kr' skriv ut valutakoden (kr) i html sen */
            rating: 4,
            category: 'sweet',
            img:  {
                      url: 'assets/images/donut1.jpg',
                      width: 1000,
                      height: 450,
                      alt: 'valfri bildbeskrivning i text'
                      },
            },
 ];

 //-----------------------------------
 //---------- HTML ELEMENTS ----------
 //-----------------------------------
 const productslistDiv = document.querySelector
 ('#products-list');

 //------------------------------------
 //---------- PRINT PRODUCTS IN HTML --
 //------------------------------------
 products.forEach(product => {
    productslistDiv.innerHTML += `
        <article class="product">
            <h3>${product.name}</h3>
            <p>${product.price} kr</p>
            <p>Rating: ${product.rating}</p>
            <img src="${product.img.url}" width="${product.img.width}" height="${product.img.height}" alt="${product.img.alt}">
        </article>
        `;
 });











