# se cre correo electrónico para The house Exclusive:
### thehouseexclusive@gmail.com contraseña=House1234*

### Con este mismo correo se creo una cuenta clooudinary para las imagenes

-------------------------------------------------------------------------------------

# Empezando con el proyecto:

# 1

### Logo.astro

### vamos a 👉 src\components\Logo.astro

#### En el servidor no está tomando estas variables de entorno, dejaremos este documento como guía

### Icono de la página - Este icono fue almacenado en Cloudinary, se recomienda #sin fondo y 65 * 65 px en escritorio y en celular 80 * 80 px : que la imagen si es cualquier tipo de extensión cambiarsela a lo ultimo a: .avif, en cloudinary podemos subirla de cualquier tipo  y solo copiamos la url que nos dan y le cambiamos manualmente a .avif para no hacerle una conversión 👇:

SRC="https://res.cloudinary.com/dqryrvrzh/image/upload/v1687313342/The%20House%20Exclusive/Imagenes%20Carrusel/Lighthouse_Icon_Music_Studio_Logo_zgrujf.avif"

### Descripción del icono 👇:

ALT="Logo de the house exclusive"

![Imagen Logo](https://res.cloudinary.com/dqryrvrzh/image/upload/v1687663585/The%20House%20Exclusive/Reame/logo_r49zvz.png)

-------------------------------------------------------------------------------------

# 2

### config.mjs

### vamos a 👉 src\config.mjs

>Antes de continuar también debemos configurar los datos de la página: 

#### entramos al archivo config.mjs está debajo de la carpeta utils src\config.mjs

#### La imagen default va a ser igual para todos los comercios debemos cambiar 👇:

### * name, origin, title, description, googleAnalyticsId, #googleSiteVerificationId.

### Mira este archivo para sacar el ID de google analitycs: 

-------------------------------------------------------------------------------------

# 3

### config.mjs

### vamos a 👉 src\config.mjs

#### Debemos cambiar las palabras claves, (keywords) estas palabras estan un el archivo MetaTags.astro
#### src\components\common\MetaTags.astro
#### Están casi al final aparece así 

> {['sistemas auto organizados', 'sistemas #autoorganizados', 'Sistemas 
> Autoorganizados', 'Sistemas AutoOrganizados', #'Sistemas Auto Organizados'].
> map((keyword) => (
> <meta name="keywords" content={keyword} />
> ))}

Debemos cambiar las palabras que se parezcan al nombre de la empresa o que puedan llegar a buscar nuestra empresa

-------------------------------------------------------------------------------------

# 4

### data.js

### vamos a 👉 src\data.js

#### Las categorías de la página se encuentran en el archivo data.js 👈 está debajo del archivo config.mjs: en src\data.js

### En este archivo debemos configurar las categorías del header y del footer

### Para estas categorías se creo una carpeta categorias-productos en el area de #pages src\pages\categorias-productos 

### allí debemos analizar las categorías que tenemos y las carpetas que debemos crear, 

### cada carpeta tiene un archivo index.astro, que es el nombre de la carpeta la ruta que accede a él.

>### por ejemplo en nuestro caso:
###   pages
>###  categorias-productos
>>###   index.astro
>>###   mujeres
>>>###      index.astro
>>###   hombres
>>>###     index.astro
>>###   ninos
>>>###     index.astro

### cada index representa la ruta, pero dicha ruta se llama o se enruta con el #nombre de la carpeta, respetando las carpetas superiores: ejemplo queremos ir a la ruta hombres: 👉 /categorias-productos/hombres

Debemos crear todas las rutas que tengamos en las categorías, ya es dependiendo el comercio virtual al cual le hagamos la plantilla

>por ejemplo también tenemos nosotros, pero este apartado lo vamos a manejar desde el blog, como si fuera posters, para que el usuario pueda incluir documentación importante de su empresa o noticias.

>esto está en la ruta: 👉 src\content\post Podemos poner un articulo que diga, conoce nuestra empresa: 

>Otro que diga como hacemos nuestros productos

>Como puedes personalizar su prenda.

>entre otros

#### En nuestro caso también tenemos las categorías Reels y fotos

### Podemos incluilas en una capeta media, y debajo ambas cosas

más abajo llamamos los archivos google sheet de cada ruta.

![Imagen Categorias](https://res.cloudinary.com/dqryrvrzh/image/upload/v1687663738/The%20House%20Exclusive/Reame/categorias_sokvuu.png)

-------------------------------------------------------------------------------------

# 5

### SesionInicial.astro

### vamos a 👉 src\components\widgets\SesionInicial.astro

### Nombre de la empresa en mayuscula 👇:

> const nameCompany = "THE HOUSE EXCLUSIVE"


### Esta es la google sheet enfocada en el carrusel, las imagenes cambiarán cada 5 #minutos pero solo muestra una a la vez, la url de este es
### google sheet que muestra una sola imagen: https://docs.google.com/spreadsheets/d/1t06uf5PZtDZB7u1XpgI3THotkeoGClSJDyQXHyWpOxw/edit#gid=0

IDDATASHEET_CARRUSEL = 1t06uf5PZtDZB7u1XpgI3THotkeoGClSJDyQXHyWpOxw

Debemos utilizar "https://docs.google.com/spreadsheets/d/" + IDDATASHEET + /gviz/tq?tqx=out:json&gid=0

queda como resultado 👇:

> const response = await fetch("https://docs.google.com/spreadsheets/d/1t06uf5PZtDZB7u1XpgI3THotkeoGClSJDyQXHyWpOxw/gviz/tq?tqx=out:json&gid=0");

Hay que recordar que este archivo debe estar importado en index.astro

>import SesionInicial from '~/components/widgets/SesionInicial.astro';

>SesionInicial/>

![Imagen Sesion Inicial](https://res.cloudinary.com/dqryrvrzh/image/upload/v1687663808/The%20House%20Exclusive/Reame/Sesion_inicial_nzomvh.png)

-------------------------------------------------------------------------------------

# 6

### SesionInicial.astro

### vamos a 👉 src\components\widgets\SesionInicial.astro

#en el botón personalizar una prenda, se va a la ruta personalizar. 
> Personalizar
>>    index.astro
#### Esta área la terminaremos más adelante

-------------------------------------------------------------------------------------

# 7

### ofertas.astro

### vamos a 👉 src\components\widgets\ofertas.astro

### Luego sigue el área de  nuestros productos, el titulo y ver todos nos llevará 
### a todos los productos. /pages/categorias-productos/index.astro
### Esta área la tenemos en el componente 👉src\components\widgets\ofertas.astro

En esta área pintamos los productos en una card que tenemos la card en card.astro pero ya está echo el diseño

### si se quiere cambiar el diseño de la card vamos a 👉 src\components\widgets\Card.astro

Lo importante en esta área es la información que vamos a pintar 👇
### Esta es la google sheet que maneja las ofertas de 3 productos de muestra que #cambian cada 5 minutos
### Google sheet de 3 productos:https://docs.google.com/spreadsheets/d/1E_Kmq8JkFrKUlWnWdGV9ysuUJbcwalTQ5Vvp1cI1Ebc/edit?usp=sharing
### ID de Google sheet de 3 productos 👇
### IDDATASHEET= 1E_Kmq8JkFrKUlWnWdGV9ysuUJbcwalTQ5Vvp1cI1Ebc

Al tener la Id de la sheet usamos la misma forma de leer Json de google: 

IDDATASHEET = 1E_Kmq8JkFrKUlWnWdGV9ysuUJbcwalTQ5Vvp1cI1Ebc

Debemos utilizar "https://docs.google.com/spreadsheets/d/" + IDDATASHEET +" /gviz/tq?tqx=out:json&gid=0"

queda como resultado 👇:

> const response = await fetch("https://docs.google.com/spreadsheets/d/1E_Kmq8JkFrKUlWnWdGV9ysuUJbcwalTQ5Vvp1cI1Ebc/gviz/tq?tqx=out:json&gid=0");


### Adicional tenemos un botón que llevará a todos los productos


-------------------------------------------------------------------------------------

# 8

### ofertas.astro

### vamos a 👉 src\components\widgets\ofertas.astro




