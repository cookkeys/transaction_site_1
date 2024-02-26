import Image from "next/image";
import styles from "./page.module.css";
import img from "./images/image1.jpg";
import { FaHome, FaInstagram, FaShoePrints, FaStore } from "react-icons/fa";

export default function Home() {
  return (
    <div className={styles.main_div}>
      <div className={styles.outer_div}>
        <div className={styles.inner_div_1}>
          <Image src={img} className={styles.inner_div_1Img}></Image>
        </div>
        <div className={styles.inner_div_2}>
          <h1>
            Make Every
            <br /> Transaction More
            <br /> Profitable
          </h1>
          <p>
            This function generates a random number based on the seed value. It
            is used to initialize the base value of the pseudorandom number
            4025946899135 as the first random number. Output:
          </p>
          <div className={styles.inner_div_2buttons}>
            <button className={styles.button1}>Learn More</button>
            <button className={styles.button2}>Watch Video</button>
          </div>
        </div>
      </div>

      <div className={styles.outer_div_2}>
        <div className={styles.inner_div_3}>
          <h1>
            Enriching Lives by helping People Make Better
            <br /> Purchase Decisions.
          </h1>
          <p>
            {" "}
            a song by American singer-songwriter SZA (pictured) from her second
            studio album, SOS (2022), featuring American rapper Travis Scott. It
            is one of the album's guitar- backed acoustic ballads, exploring a
            style of music that departs from SZA's usual R& B-leaning sound. Her
            deceased grandmother, whose vocals were in the album preceding SOS,
            appears in the song as a way of paying tribute. With lyrics about
            trying to stay with an ex-lover, "Open Arms" is addressed to a
            subject whom the
          </p>
          <button className={styles.button3}>See How It Works</button>
        </div>
        <div className={styles.inner_div_4}>
          <div className={styles.inner_div_3box1}>
            <FaStore />
            <h4>Merchants</h4>
            <p>Fastest way to grow Profitably</p>{" "}
          </div>
          <div className={styles.inner_div_3box2}>
            <FaHome/>
            <h4>Banks</h4>
            <p>The assured way of increasing customer spends.</p>
          </div>
        </div>
        <div className={styles.inner_div_5}>
        <div className={styles.inner_div_3box3}>
            <FaStore />
            <h4>Merchants</h4>
            <p>Fastest way to grow Profitably</p>{" "}
          </div>
          <div className={styles.inner_div_3box4}>
            <FaHome/>
            <h4>Banks</h4>
            <p>The assured way of increasing customer spends.</p>
          </div>
        </div>  
      </div>

    <div  className={styles.outer_div_3}>
      <h1>We Are A Collaborative<br/>Commerce Platform</h1>
      
      <div className={styles.inner_div_6}>
        <h3>Technology To Bring Small And Large<br/> Businesses On a Collaboration <br/> Platfrom</h3>
        <p>a song by American singer-songwriter SZA (pictured) from her second studio album, SOS (2022),
           featuring American rapper Travis Scott. It is one of the album's guitar- backed acoustic ballads,
            exploring a style of music that departs from SZA's usual R& B-leaning sound. Her deceased 
            grandmother, whose vocals were in the album preceding SOS, appears in the song as a way of 
            paying tribute. With lyrics about trying to stay with an ex-lover, "Open Arms" is addressed to
             a subject whom the</p>
        <button className={styles.button4}>Explore</button>
      </div>
      

    </div>

    </div>
  );
}
