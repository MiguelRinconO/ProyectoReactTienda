import Layout from "../Layouts/Layouts";
import { Carousel } from "flowbite-react";
import imgc1 from "../assets/img/imgc1.jpg";
import miguel from "../assets/img/miguel.avif";
import imgc2 from "../assets/img/imgc2.jpg";
import imgc3 from "../assets/img/imgc3.jpg";


export default function inicio(){ 
    return(
        <>
        <Layout><br /> <br /><br />
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        <img src={imgc1} alt="..." />
        <img src={imgc2} alt="..." />
        <img src={imgc3} alt="..." />
        
        
      </Carousel>
    </div><br /><br />

    <center><h1>Lo mas vendidos</h1></center>

    <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    
    <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
      <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div class="rounded-lg h-64 overflow-hidden">
          <img alt="content" class="object-cover object-center h-full w-full" src="https://nikeco.vtexassets.com/arquivos/ids/710907-800-auto?v=638639138135130000&width=800&height=auto&aspect=true"/>
        </div>
        <h2 class="text-xl font-medium title-font text-gray-900 mt-5">Air Jordan 4 Retro fear</h2>
        <p class="text-base leading-relaxed mt-2">Adéntrate en un clásico. Estos AJ4 regresan en cuero de pleno grano y sintético, más unos textiles de primera. Los colores exuberantes y los toques metálicos actualizan este ícono; además, gracias a los elementos de diseño originales</p>
        
      </div>
      <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div class="rounded-lg h-64 overflow-hidden">
          <img alt="content" class="object-cover object-center h-full w-full" src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/309972/13/sv01/fnd/PNA/fmt/png/X-Cell-Lightspeed-Men's-Running-Shoe"/>
        </div>
        <h2 class="text-xl font-medium title-font text-gray-900 mt-5">X-Cell Lightspeed</h2>
        <p class="text-base leading-relaxed mt-2">Adéntrate en un clásico. Estos AJ4 regresan en cuero de plena flor y cuero sintético, más unos textiles de primera.</p>
        
      </div>
      <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div class="rounded-lg h-64 overflow-hidden">
          <img alt="content" class="object-cover object-center h-full w-full" src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8d2af4ef5c244e2f95f6b948c79fdedf_9366/Tenis_Samba_OG_Negro_IH3119_01_standard.jpg"/>
        </div>
        <h2 class="text-xl font-medium title-font text-gray-900 mt-5">Tenis Samba OG</h2>
        <p class="text-base leading-relaxed mt-2">son un clásico atemporal de Adidas que combina estilo retro con funcionalidad moderna. Este diseño icónico, inspirado en el calzado de fútbol</p>
        
      </div>
    </div>
  </div>
</section>


<section class="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
  <div class="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20"></div>
  <div class="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>
  <div class="mx-auto max-w-2xl lg:max-w-4xl">
    <b><center><p>URBAN FOOTPRINTS</p></center></b>
    <figure class="mt-10">
      <blockquote class="text-center text-xl/8 font-semibold text-gray-900 sm:text-2xl/9">
        <p>En Urban Footprints, creemos que cada paso cuenta.
Nuestra misión es ofrecer zapatos deportivos que
impulsen tu rendimiento y te hagan sentir invencible.
Gracias por permitirnos ser parte de tu camino.</p>
      </blockquote>
      <figcaption class="mt-10">
        <img class="mx-auto size-10 rounded-full" src={miguel} alt=""/>
        <div class="mt-4 flex items-center justify-center space-x-3 text-base">
          <div class="font-semibold text-gray-900">Miguel Rincon</div>
          <svg viewBox="0 0 2 2" width="3" height="3" aria-hidden="true" class="fill-gray-900">
            <circle cx="1" cy="1" r="1" />
          </svg>
          <div class="text-gray-600">Cuarteto Sena</div>
        </div>
      </figcaption>
    </figure>
  </div>
</section>

        </Layout>
        </>
    )
}