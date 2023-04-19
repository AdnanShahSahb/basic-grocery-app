import apples from "./images/apples.jpg"
// import cow from "./images/cow.jpg"
import drydogfood from "./images/drydogfood.jpg"
import fishFingers from "./images/fishFingers.jpg"
import frozenPizza from "./images/frozenPizza.jpg"
import hayCow from "./images/hayCow.jpg"
import iceCream from "./images/iceCream.jpg"
import soap from "./images/soap.jpg"
import toiletpaper from "./images/toilet paper.jpg"
import wetcatfood from "./images/apples.jpg"
import carrot from "./images/carrot.jpg"
import beverages1 from "./images/beverages.jpg"
import beverages2 from "./images/beverages2.jpg"
import beverages3 from "./images/beverages3.jpg"
import dryCat from "./images/dryCat.jpg"
import fishFood from "./images/fishFood.jpg"
import duckjurkeyy from "./images/duckJerkeyy.jpg"

import frozenVeg from "./images/frozenVeg.jpg"
import frozenWaf from "./images/frozenWaffles.jpg"
import frozenBurr from "./images/frozenBurritos.jpg"
import fruitBar from "./images/fruitBars.jpg"
import shrimp from "./images/frozenShrimps.jpg"
import nuggets from "./images/nuggets.jpg"

import broccoli from "./images/broccoli.jpg"
import lettuce from "./images/lettuce.jpg"
import tomatoes from "./images/tomatoes.jpg"

const frozenF = [fishFingers, frozenPizza, iceCream, frozenVeg, frozenWaf, frozenBurr, fruitBar, shrimp, nuggets]
const freshF = [apples, carrot,broccoli,lettuce,tomatoes]
const beverages = [beverages1, beverages2, beverages3,]
const homeHealth = [soap, toiletpaper]

const cat = [dryCat, wetcatfood, wetcatfood]
const dog = [drydogfood, drydogfood, drydogfood, drydogfood]
const cow = [hayCow, hayCow]
const duck = [fishFood, duckjurkeyy, fishFood]

const petF = { cat, dog, cow, duck }

const images = [{ "Frozen-Food": frozenF, "FreshFood": freshF, "Beverages": beverages, "Home-Health": homeHealth, "Pet-Food": petF }]

export default { images };