import About from "@/components/About";

import Hero from "@/components/Hero";

import Meal from "@/components/Meal";
import Workout from "@/components/Workout";

import CTA from "@/components/CTA"
import Footer_Conter from "@/components/Footer_Conter"
import Fitness from "@/components/Fitness";

export default function Home() {
  return (
    <>
<header >
<Hero/>
</header>
<main >
<About/>
<Meal/>
<Workout/>
<Fitness/>
<CTA/>

</main>
<footer >
<Footer_Conter/>
</footer>
 </>
  )
}
