import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import logo from "@/assets/ieeelogotransparent.png";
import Image from "next/image";
import CarouselComponent from "@/components/CarouselComponent";

export default function Home() {
  return (
    <>
      <Head>
        <title>IEEE at UT Dallas - The Student Branch of IEEE at UTD</title>
        <meta
          name="description"
          content="This is the website of the UTD branch of IEEE"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className={styles.carousel}>
          <div className={styles.overlay}>
            <div className={styles.title__logo}>
              <Image src={logo} alt="transparentlogo" className={styles.logo} />
              <p className={styles.title}>IEEE UTD</p>
            </div>
            <span className={styles.typewriter}>
              <p>Advancing Technology for Humanity</p>
            </span>
          </div>

          <CarouselComponent />
        </div>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus
          molestie nunc non blandit massa. Massa sapien faucibus et molestie.
          Laoreet id donec ultrices tincidunt arcu. Nec sagittis aliquam
          malesuada bibendum arcu vitae elementum curabitur. Posuere
          sollicitudin aliquam ultrices sagittis orci a scelerisque purus. Sit
          amet luctus venenatis lectus magna. Faucibus pulvinar elementum
          integer enim neque volutpat ac tincidunt. Maecenas sed enim ut sem
          viverra aliquet. Proin libero nunc consequat interdum varius sit.
          Sagittis eu volutpat odio facilisis mauris sit amet. Auctor augue
          mauris augue neque gravida in fermentum et. Facilisis magna etiam
          tempor orci eu lobortis elementum nibh. In massa tempor nec feugiat
          nisl pretium fusce id. Magna eget est lorem ipsum dolor. Sed felis
          eget velit aliquet sagittis id consectetur purus ut. Aliquam
          vestibulum morbi blandit cursus risus. Purus in mollis nunc sed id
          semper. Imperdiet nulla malesuada pellentesque elit eget gravida cum.
          Habitasse platea dictumst vestibulum rhoncus est pellentesque elit
          ullamcorper dignissim. Imperdiet nulla malesuada pellentesque elit
          eget gravida cum. Eu facilisis sed odio morbi quis commodo odio aenean
          sed. Non odio euismod lacinia at quis risus sed vulputate odio. Ut
          pharetra sit amet aliquam id diam. Arcu vitae elementum curabitur
          vitae nunc. Amet consectetur adipiscing elit duis tristique
          sollicitudin. Vestibulum rhoncus est pellentesque elit ullamcorper
          dignissim cras tincidunt. Diam sollicitudin tempor id eu nisl nunc mi
          ipsum faucibus. Tristique senectus et netus et. Vestibulum morbi
          blandit cursus risus. Velit scelerisque in dictum non consectetur a.
          Dolor sit amet consectetur adipiscing elit pellentesque. Nunc mattis
          enim ut tellus elementum sagittis vitae. Eu non diam phasellus
          vestibulum lorem. Sit amet nisl purus in mollis nunc sed id. Id
          aliquet lectus proin nibh nisl. Lorem sed risus ultricies tristique
          nulla aliquet enim tortor at. Egestas tellus rutrum tellus
          pellentesque eu tincidunt. Mi quis hendrerit dolor magna eget est
          lorem ipsum. Mauris cursus mattis molestie a. Magna fermentum iaculis
          eu non diam phasellus vestibulum lorem sed. Sed odio morbi quis
          commodo odio aenean sed. Sollicitudin ac orci phasellus egestas tellus
          rutrum tellus. Massa tincidunt dui ut ornare lectus sit amet.
          Pellentesque sit amet porttitor eget. Vitae tempus quam pellentesque
          nec nam. Lacus sed viverra tellus in hac habitasse. Mattis enim ut
          tellus elementum sagittis vitae et leo duis. Ultrices tincidunt arcu
          non sodales neque sodales ut etiam. Adipiscing commodo elit at
          imperdiet dui accumsan sit amet nulla. Nunc sed blandit libero
          volutpat sed cras ornare. Sit amet risus nullam eget felis eget.
          Malesuada fames ac turpis egestas maecenas. Sed nisi lacus sed
          viverra. Non blandit massa enim nec. Vehicula ipsum a arcu cursus
          vitae congue. Mattis nunc sed blandit libero volutpat sed. Neque vitae
          tempus quam pellentesque. Enim blandit volutpat maecenas volutpat
          blandit aliquam etiam. Turpis egestas sed tempus urna et. Ut morbi
          tincidunt augue interdum velit. Porttitor rhoncus dolor purus non.
          Augue interdum velit euismod in pellentesque massa. Arcu odio ut sem
          nulla pharetra diam sit amet. Etiam erat velit scelerisque in.
          Tristique sollicitudin nibh sit amet commodo. Porttitor leo a diam
          sollicitudin tempor id eu. Ligula ullamcorper malesuada proin libero
          nunc consequat interdum varius sit. Aliquam purus sit amet luctus
          venenatis lectus magna fringilla urna. Egestas egestas fringilla
          phasellus faucibus scelerisque eleifend donec. Eget velit aliquet
          sagittis id consectetur purus ut faucibus. Condimentum lacinia quis
          vel eros donec ac odio tempor orci. Accumsan tortor posuere ac ut
          consequat semper viverra nam libero. Natoque penatibus et magnis dis
          parturient montes. Nunc eget lorem dolor sed viverra ipsum. Amet nisl
          purus in mollis nunc sed id semper. Odio morbi quis commodo odio
          aenean sed adipiscing. Pharetra magna ac placerat vestibulum lectus
          mauris ultrices eros in. In cursus turpis massa tincidunt dui ut
          ornare lectus. Metus vulputate eu scelerisque felis imperdiet. Dui
          faucibus in ornare quam. Suspendisse ultrices gravida dictum fusce ut.
          Vulputate odio ut enim blandit volutpat. Venenatis tellus in metus
          vulputate eu. Aliquam vestibulum morbi blandit cursus risus. Pretium
          vulputate sapien nec sagittis. Vitae tempus quam pellentesque nec nam
          aliquam sem et tortor. Viverra nam libero justo laoreet sit amet
          cursus sit. Accumsan tortor posuere ac ut consequat. Elementum nisi
          quis eleifend quam adipiscing vitae proin sagittis. Risus commodo
          viverra maecenas accumsan lacus vel. Fringilla est ullamcorper eget
          nulla facilisi etiam dignissim diam. Sed risus pretium quam vulputate
          dignissim. Et leo duis ut diam quam nulla porttitor massa id. Id eu
          nisl nunc mi ipsum faucibus vitae. Tincidunt id aliquet risus feugiat
          in ante. Tortor aliquam nulla facilisi cras fermentum odio eu feugiat
          pretium. Orci phasellus egestas tellus rutrum tellus pellentesque eu
          tincidunt. At risus viverra adipiscing at in tellus. Molestie a
          iaculis at erat pellentesque adipiscing. Urna molestie at elementum eu
          facilisis sed odio morbi. Viverra mauris in aliquam sem fringilla ut.
          Odio morbi quis commodo odio. Maecenas sed enim ut sem viverra aliquet
          eget sit. Facilisis gravida neque convallis a cras semper auctor
          neque. Ac auctor augue mauris augue neque gravida in fermentum et.
          Eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada
          bibendum. Aliquam sem et tortor consequat id porta nibh. Lobortis
          mattis aliquam faucibus purus in. Id aliquet lectus proin nibh nisl
          condimentum id venenatis a. Odio eu feugiat pretium nibh ipsum
          consequat nisl. Vel fringilla est ullamcorper eget nulla facilisi
          etiam dignissim. Justo laoreet sit amet cursus sit amet dictum sit.
          Sem integer vitae justo eget. Suscipit tellus mauris a diam maecenas
          sed. Nisl condimentum id venenatis a condimentum vitae sapien. A
          scelerisque purus semper eget duis. Quis enim lobortis scelerisque
          fermentum dui. Quam quisque id diam vel quam elementum pulvinar etiam.
          Eget felis eget nunc lobortis mattis. Quis varius quam quisque id diam
          vel quam. Integer vitae justo eget magna fermentum iaculis eu non. Sem
          nulla pharetra diam sit amet. Sit amet cursus sit amet dictum. Ipsum
          faucibus vitae aliquet nec ullamcorper sit amet. Tellus pellentesque
          eu tincidunt tortor aliquam nulla. Tristique senectus et netus et
          malesuada fames ac turpis egestas. Fringilla phasellus faucibus
          scelerisque eleifend donec pretium vulputate sapien nec. Sit amet
          tellus cras adipiscing enim. Neque ornare aenean euismod elementum
          nisi quis. Facilisis volutpat est velit egestas dui id ornare arcu.
          Odio euismod lacinia at quis. Sem et tortor consequat id porta. Orci
          eu lobortis elementum nibh tellus molestie nunc non blandit. Habitasse
          platea dictumst vestibulum rhoncus est. Libero enim sed faucibus
          turpis in eu mi.
        </div>
      </main>
    </>
  );
}
