const cropDetails = [
    {
        'name': 'Rice',
        'description': "Rice is starchy cereal grain and the grass plant (family Poaceae) by which it is produced. Roughly one-half of the world population, including virtually all of East and Southeast Asia, is wholly dependent upon rice as a staple food; 95 percent of the world’s rice crop is eaten by humans. Rice is cooked by boiling, or it can be ground into a flour.",
        'price': "Min: Rs 65/Kg \nMax: Rs 180/Kg",
        'nutrients': "Portion size: 100g \nCalories: 130 \nCarbohydrate: 28.7 g \nProtein: 2.36 g \nFat: 0.19 g"
    },
    {
        'name': 'Maize',
        'description': "Corn also called Indian corn or maize, cereal plant of the grass family (Poaceae) and its edible grain. The domesticated crop originated in the Americas and is one of the most widely distributed of the world’s food crops. Corn is used as livestock feed, as human food, as biofuel, and as raw material in industry.",
        'price': "Min: Rs 14/kg \nMax: Rs 45/kg",
        'nutrients': "Portion Size 166 g\nAmount Per Portion 606\nTotal Fat 7.9g 10% \nSaturated Fat 1.1g 6% \nSodium 58mg 3% \nTotal Carbohydrate 123g	45% \nDietary Fiber 12g	43% \nSugar 1.1g \nProtein 16g 32%"
    },
    {
        'name': 'Chickpea',
        'description': "Chickpea, (Cicer arietinum), also called garbanzo bean or Bengal gram, annual plant of the pea family (Fabaceae), widely grown for its nutritious seeds. Chickpeas are an important food plant in India, Africa, and Central and South America. The seeds are high in fibre and protein and are a good source of iron, phosphorus, and folic acid.",
        'price': "Rs 267/Kg",
        'nutrients': "Portion size: 28 gm \nCalories: 46\nCarbs: 8 grams\nFiber: 2 grams\nProtein: 3 grams\nFolate: 12% of the RDI.\nIron: 4% of the RDI.\nPhosphorus: 5% of the RDI.\nCopper: 5% of the RDI."
    },
    {
        'name': 'Kidneybeans',
        'description': "The kidney bean is a variety of the common bean (Phaseolus vulgaris). It is named for its visual resemblance in shape and – for the red variety – colour to a human kidney. Red kidney beans should not be confused with other red beans, such as adzuki beans.",
        'price': "Rs 189/kg",
        'nutrients': "Calories: 127\nWater: 67 %\nProtein: 8.7 grams\nCarbs: 22.8 grams\nSugar: 0.3 grams\nFiber: 6.4 grams\nFat: 0.5 grams"
    },
    {
        'name': 'Pigeonpeas',
        'description': "The pigeon pea is a perennial legume from the family Fabaceae. Since its domestication in the Indian subcontinent at least 3,500 years ago, its seeds have become a common food in Asia, Africa, and Latin America. It is consumed on a large scale in South Asia and is a major source of protein for the population of the Indian subcontinent.",
        'price': "Rs 70-90/kg",
        'nutrients': "Serving Size: 1 Cup, 153 g\nCalories 170 Kcal.\nCalories from Fat 18.72 Kcal\nWater 109.85g \nEnergy 170 Kcal	\nEnergy 710 kJ	\nProtein 9.12g 18.24%\nTotal Fat(lipid) 2.08g	5.94% \nAsh	2.13g \nCarbohydrate 29.82g	22.94%\nTotal dietary Fiber	6.4g 16.84%\nTotal Sugars 3.79g"
    },
    {
        'name': 'Mothbeans',
        'description': "Vigna aconitifolia is a drought-resistant legume, commonly grown in arid and semi-arid regions of India. It is commonly called mat bean, moth bean, matki or dew bean. The pods, sprouts and protein-rich seeds of this crop are commonly consumed in India. Moth bean can be grown on many soil types, and can also act as a pasture legume.",
        'price': "Rs 90/Kg",
        'nutrients': "Total Fat 1.6 g 2% \nSaturated fat 0.4 g 2% \nSodium 30 mg 1% \nPotassium 1191 mg	34% \nTotal Carbohydrate 62g 20% \nProtein 23g 46% \nVitamin C 6% \nCalcium 15% \nIron 60% \nVitamin B-6 20% \nMagnesium 95%"
    },
    {
        'name': 'Mungbean',
        'description': "The mung bean (Vigna radiata), alternatively known as the green gram is a plant species in the legume family. The mung bean is mainly cultivated in East, Southeast and South Asia. It is used as an ingredient in both savoury and sweet dishes.",
        'price': "Min: Rs 65/Kg \nMax: Rs 103/Kg",
        'nutrients': "Amount Per 100 grams\nCalories 347 \nTotal Fat 1.2 g 1% \nSaturated fat 0.3 g	1% \nPotassium 1246 mg 35% \nTotal Carbohydrate 63 g 21% \nDietary fiber 16 g 64% \nSugar 7 g \nProtein 24 g 48% \nVitamin C 8% Calcium	13% \nIron 37% Vitamin B-6	20 %\n Magnesium 47 % "
    },
    {
        'name': 'Blackgram',
        'description': "Vigna mungo, the black gram, urad bean is a bean grown in South Asia. Like its relative, the mung bean, it has been reclassified from the Phaseolus to the Vigna genus. The product sold as black lentil is usually the whole urad bean, whereas the split bean (the interior being white) is called white lentil.",
        'price': "Rs 200/Kg",
        'nutrients': "Energy 341 Kcal\n Carbohydrates 58.99 g\n Protein 25.21 g\n Total Fat 1.64 g\n Dietary Fiber 18.3 g\n Folates 216 mg\n Niacin 1.447 mg\n Pantothenic acid 0.906 mg\n Pyridoxine 0.281 mg"
    },
    {
        'name': 'Lentil',
        'description': "The lentil (Lens culinaris or Lens esculenta) is an edible legume. It is an annual plant known for its lens-shaped seeds. It is about 40 cm (16 in) tall, and the seeds grow in pods, usually with two seeds in each. As a food crop, the majority of world production comes from Canada and India, producing 58% combined of the world total.",
        'price': "Rs 200/Kg",
        'nutrients': "Calories: 140\nFat: 0.5 grams\nCarbs: 23 grams\nFiber: 9 grams\nSodium: 5 milligrams\nProtein: 12 grams"
    },
    {
        'name': 'Pomegranate',
        'description': "The pomegranate (Punica granatum) is a fruit-bearing deciduous shrub in the family Lythraceae, subfamily Punicoideae, that grows between 5 and 10 m (16 and 33 ft) tall. The pomegranate was originally described throughout the Mediterranean region. It was introduced into Spanish America in the late 16th century and into California by Spanish settlers in 1769. The fruit is typically in season in the Northern Hemisphere from October to February, and in the Southern Hemisphere from March to May. As intact sarcotestas or juice, pomegranates are used in baking, cooking, juice blends, meal garnishes, smoothies, and alcoholic beverages, such as cocktails and wine.",
        'price': "Rs 150/Kg",
        'nutrients': "72 calories.\n27 grams(g) carbohydrates.\n89 g sugar.\n5 g fiber(14 percent daily value, or DV)\n205 milligrams(mg) potassium(about 5 percent DV)\n9 mg vitamin C(about 10 percent DV for men, 12 percent DV for women)"
    },
    {
        'name': 'Banana',
        'description': 'A banana is an elongated, edible fruit – botanically a berry – produced by several kinds of large herbaceous flowering plants in the genus Musa. In some countries, bananas used for cooking may be called "plantains", distinguishing them from dessert bananas. The fruit is variable in size, color, and firmness, but is usually elongated and curved, with soft flesh rich in starch covered with a rind, which may be green, yellow, red, purple, or brown when ripe. The fruits grow in clusters hanging from the top of the plant.',
        'price': "Rs 70/Kg",
        'nutrients': "Potassium: 9% of the RDI.\nVitamin B6: 33 % of the RDI.\nVitamin C: 11 % of the RDI.\nMagnesium: 8 % of the RDI.\nCopper: 10 % of the RDI.\nManganese: 14 % of the RDI.\nNet carbs: 24 grams.\nFiber: 3.1 grams."
    },
    {
        'name': 'Mango',
        'description': 'A mango is an edible stone fruit produced by the tropical tree Mangifera indica which is believed to have originated from the region between northwestern Myanmar, Bangladesh, and  India. M. indica has been cultivated in South and Southeast Asia since ancient times resulting in two distinct types of modern mango cultivars: the "Indian type" and the "Southeast Asian type". Other species in the genus Mangifera also produce edible fruits that are also called "mangoes", the majority of which are found in the Malesian ecoregion.',
        'price': "Min: Rs 25/Kg \nMax: Rs 275/Kg",
        'nutrients': "Calories: 99.\nProtein: 1.4 grams.\nCarbs: 24.7 grams.\nFat: 0.6 grams.\nDietary fiber: 2.6 grams.\nVitamin C: 67 % of the Reference Daily Intake(RDI)\nCopper: 20 % of the RDI.\nFolate: 18 % of the RDI."
    },
    {
        'name': 'Grapes',
        'description': 'A grape is a fruit, botanically a berry, of the deciduous woody vines of the flowering plant genus Vitis. Grapes can be eaten fresh as table grapes, used for making wine, jam, grape juice, jelly, grape seed extract, vinegar, and grape seed oil, or dried as raisins, currants and sultanas.Grapes are a non- climacteric type of fruit, generally occurring in clusters.',
        'price': "Rs. 110/Kg",
        'nutrients': "Calories: 104.\nCarbs: 27.3 grams.\nProtein: 1.1 grams.\nFat: 0.2 grams.\nFiber: 1.4 grams.\nVitamin C: 27 % of the Reference Daily Intake(RDI)\nVitamin K: 28 % of the RDI.\nThiamine: 7 % of the RDI."
    },
    {
        'name': 'Watermelon',
        'description': "Watermelon (Citrullus lanatus) is a flowering plant species of the Cucurbitaceae family and the name of its edible fruit. A scrambling and trailing vine-like plant, it was originally domesticated in Africa. It is a highly cultivated fruit worldwide, with more than 1,000 varieties.",
        'price': "Rs 20/Kg",
        'nutrients': "Vitamin C: 21% of the Reference. Daily Intake (RDI)\nVitamin A: 18 % of the RDI.\nPotassium: 5 % of the RDI.\nMagnesium: 4 % of the RDI.\nVitamins B1, B5 and B6: 3 % of.the RDI."
    },
    {
        'name': 'Muskmelon',
        'description': "Cucumis melo, also known as melon, is a species of Cucumis that has been developed into many cultivated varieties. The fruit is a pepo. The flesh is either sweet or bland, with or without a musky aroma, and the rind can be smooth (such as honeydew), ribbed (such as cantaloupe), wrinkled (such as casaba melon), or netted (such as muskmelon). In North America, the sweet-flesh varieties are often collectively called muskmelon, including the musky netted-rind varieties and the inodorous smooth-rind varieties, and cantaloupe usually means the former type. However, muskmelon in a narrow sense only refers to the musky netted-rind type, while the true cantaloupe is the European type with ribbed and often warty rind that is seldom grown in North America.",
        'price': "Rs 80/Kg",
        'nutrients': "Calories: 61.\nCarbs: 15 grams.\nFiber: 1.5 grams.\nProtein: 1 gram.\nVitamin C: 34 % of the RDI.\nVitamin A: 2 % of the RDI.\nPotassium: 8 % of the RDI.\nFolate: 8 % of the RDI."
    },
    {
        'name': 'Apple',
        'description': "An apple is an edible fruit produced by an apple tree (Malus domestica). Apple trees are cultivated worldwide and are the most widely grown species in the genus Malus. The tree originated in Central Asia, where its wild ancestor, Malus sieversii, is still found today. Apples have been grown for thousands of years in Asia and Europe and were brought to North America by European colonists. Apples have religious and mythological significance in many cultures, including Norse, Greek, and European Christian tradition.",
        'price': "Rs 110/Kg",
        'nutrients': "Calories: 52.\nWater: 86 %\nProtein: 0.3 grams.\nCarbs: 13.8 grams.\nSugar: 10.4 grams.\nFiber: 2.4 grams.\nFat: 0.2 grams."
    },
    {
        'name': 'Orange',
        'description': "The orange is the fruit of various citrus species in the family Rutaceae; it primarily refers to Citrus × sinensis, which is also called sweet orange, to distinguish it from the related Citrus × aurantium, referred to as bitter orange. The sweet orange reproduces asexually (apomixis through nucellar embryony); varieties of sweet orange arise through mutations.",
        'price': "Rs 18/Kg",
        'nutrients': "60 calories\nNo fat or sodium\n3 grams of fiber\n12 grams of sugar\n1 gram of protein\n14 micrograms of vitamin A\n70 milligrams of vitamin C\n6 % of your daily recommended amount of calcium\n237 milligrams of potassium\n15.4 grams of carbohydrates"
    },
    {
        'name': 'Papaya',
        'description': "The papaya is a melon like fruit with yellow-orange flesh enclosed in a thin skin that varies in color from green to orange to rose. Papayas are a rich source of vitamin A and C. One half of a small papaya can provide 150% of the recommended dietary intake of Vitamin C. It is low in calories, fat free, cholesterol free, and a good source of potassium, folate, and fiber.",
        'price': "Rs 60/Kg",
        'nutrients': "2.7 g dietary fiber, or 10 percent DV\n31 milligrams(mg) calcium, or 3.1 percent DV\n33 mg magnesium, 8 percent DV\n286 mg potassium, 6.08 percent DV\n0.13 mg zinc, 0.9 percent DV\n95.6 mg vitamin C, 106.2 percent DV\n58 micrograms(mcg) folate, 14.5 percent DV\n1, 492 international units(IU) vitamin A, 30 percent DV\n0.47 mg vitamin E, 2.4 percent DV\n4.1 mcg vitamin K, 5.1, percent DV"
    },
    {
        'name': 'Coconut',
        'description': "It provides food, fuel, cosmetics, folk medicine and building materials, among many other uses. The inner flesh of the mature seed, as well as the coconut milk extracted from it, form a regular part of the diets of many people in the tropics and subtropics. Coconuts are distinct from other fruits because their endosperm contains a large quantity of clear liquid, called coconut water or coconut juice.",
        'price': "Rs 30-40/Piece",
        'nutrients': "Calories: 283.\nProtein: 3 grams.\nCarbs: 10 grams.\nFat: 27 grams.\nSugar: 5 grams.\nFiber: 7 grams.\nManganese: 60 % of the Daily Value(DV)\nSelenium: 15 % of the DV."
    },
    {
        'name': 'Cotton',
        'description': "Cotton is a soft, fluffy staple fiber that grows in a boll, or protective case, around the seeds of the cotton plants of the genus Gossypium in the mallow family Malvaceae. The fiber is almost pure cellulose. Under natural conditions, the cotton bolls will increase the dispersal of the seeds. The plant is a shrub native to tropical and subtropical regions around the world, including the Americas, Africa, Egypt and India.The greatest diversity of wild cotton species is found in Mexico, followed by Australia and Africa.[1] Cotton was independently domesticated in the Old and New Worlds.",
        'price': "Rs 105-110 /kg",
        'nutrients': "The most basic use of cotton is to provide thread using cotton gin, which they can have vast use both domestic and industrial.\nCotton is used to make comfortable and breathable textile, which later on will have multiple purposes of use.\nBy weaving cotton fiber, fabrics such as flannel, velvet, velour, and corduroy can be made by which exquisite clothing can be produced."
    },
    {
        'name': 'Jute',
        'description': 'Jute is one of the most affordable natural fibers, and second only to cotton in the amount produced and variety of uses. Jute fibers are composed primarily of the plant materials cellulose and lignin. Jute fiber falls into the bast fiber category (fiber collected from bast, the phloem of the plant, sometimes called the "skin") along with kenaf, industrial hemp, flax (linen), ramie, etc.. The industrial term for jute fiber is raw jute. The fibers are off-white to brown, and 1–4 metres (3–13 feet) long. Jute is also called the "golden fiber" for its color and high cash value.',
        'price': "Rs 52 /kg",
        'nutrients': "Jute fibres are mainly used in matting and twine processing. This fibre is also used extensively in cord manufacturing. As part of an airplane, jute can be used alongside sugar.\nJute matting is a viable alternative to protect the soil to avoid degradation of soils due to floods.In fact, after the establishment of natural vegetation, these methods are often used.\nIn producing cloth and bags, jute is also used.It should however be noted that the fabric made from jute fibers is typically very rough and therefore inappropriate for human clothing.They are however also commonly used in the manufacture of sacks to store many items.\nIn the manufacture of some types of curtains Jute fibres are also known to be used."
    },
    {
        'name': 'Coffee',
        'description': 'Coffee is a brewed drink prepared from roasted coffee beans, the seeds of berries from certain Coffea species. From the coffee fruit, the seeds are separated to produce a stable, raw product: unroasted green coffee. The seeds are then roasted, a process which transforms them into a consumable product: roasted coffee, which is ground into a powder and typically steeped in hot water before being filtered out, producing a cup of coffee. Coffee is darkly colored, bitter, slightly acidic and has a stimulating effect in humans, primarily due to its caffeine content.[3] It is one of the most popular drinks in the world, [4] and can be prepared and presented in a variety of ways(e.g., espresso, French press, caffè latte, or already- brewed canned coffee).It is usually served hot, although chilled or iced coffee is common.Sugar, sugar substitutes, milk or cream are often used to lessen the bitter taste.It may be served with coffee cake or another sweet dessert like doughnuts.A commercial establishment that sells prepared coffee beverages is known as a coffee shop',
        'price': "Min: Rs 170/Kg \nMax: Rs 800/Kg",
        'nutrients': "Can Improve Energy Levels and Make You Smarter.\nCan Help You Burn Fat.\nCan Drastically Improve Physical Performance.\nContains Essential Nutrients.\nMay Lower Your Risk of Type 2 Diabetes.\nMay Protect You From Alzheimer's Disease and Dementia.\nMay Lower Your Risk of Parkinson's."
    },
]

export default cropDetails