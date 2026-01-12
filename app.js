// ========================================
// FITFUEL - Personal Training & Nutrition
// ========================================

// Exercise Database - Videos with timestamps to jump to demo + form cues
const exerciseVideos = {
    // Stretching & Mobility
    "Foam Rolling - Full Body": {
        videoId: "SxQkZK2hk-0",
        start: 45,  // Jump to demo at 0:45
        cues: ["Roll slowly - 1 inch per second", "Pause on tender spots 30 sec", "Never roll on joints"]
    },
    "Hip Flexor Stretch": {
        videoId: "YQmpO9VT2X4",
        start: 15,
        cues: ["Back knee on pad", "Squeeze back glute", "Torso upright"]
    },
    "Pigeon Pose": {
        videoId: "o41jzyL3Wh4",
        start: 20,
        cues: ["Square hips forward", "Walk hands forward to deepen", "Breathe into stretch"]
    },
    "Cat-Cow Flow": {
        videoId: "kqnua4rHVVA",
        start: 8,
        cues: ["Inhale = arch (cow)", "Exhale = round (cat)", "Move with breath"]
    },
    "World's Greatest Stretch": {
        videoId: "IFpU2Fz7s6M",
        start: 25,
        cues: ["Deep lunge", "Rotate toward front leg", "Reach to ceiling"]
    },
    "Light Walk or Bike": {
        videoId: "JGvLfCCmYwQ",
        start: 0,
        cues: ["Zone 1-2 heart rate", "15-30 minutes", "Active recovery"]
    },
    
    // Lower Body
    "Dynamic Warm-Up": {
        videoId: "R0mMyV5OtcM",
        start: 30,
        cues: ["Leg swings each direction", "Hip circles", "Increase range gradually"]
    },
    "Barbell Back Squat": {
        videoId: "bEv6CCg2BC8",
        start: 165,  // 2:45 - actual squat demo
        cues: ["Bar on upper traps", "Knees track over toes", "Hip crease below knee"]
    },
    "Romanian Deadlift": {
        videoId: "7j-2w4-P14I",
        start: 85,  // 1:25 - form demo
        cues: ["Push hips BACK", "Bar close to legs", "Feel hamstring stretch"]
    },
    "Bulgarian Split Squats": {
        videoId: "2C-uNgKwPLE",
        start: 60,  // 1:00
        cues: ["Back foot on bench", "Front knee over toes", "Torso upright"]
    },
    "Leg Press": {
        videoId: "IZxyjW7MPJQ",
        start: 55,
        cues: ["Feet shoulder-width", "90° knee bend", "Don't lock knees"]
    },
    "Nordic Hamstring Curls": {
        videoId: "d8AAPcYxHFo",
        start: 30,
        cues: ["Anchor feet secure", "Hips extended", "Lower SLOWLY"]
    },
    "Standing Calf Raises": {
        videoId: "gwLzBJYoWlI",
        start: 35,
        cues: ["Full range of motion", "Pause at top", "Slow negative"]
    },
    "Core: Plank Holds": {
        videoId: "ASdvN_XEl_c",
        start: 20,
        cues: ["Straight line head to heels", "Squeeze glutes + core", "Don't sag hips"]
    },
    
    // Agility & Conditioning  
    "Ladder Drills": {
        videoId: "1AEM1bErdUo",
        start: 15,
        cues: ["Balls of feet", "Quick ground contact", "Arms drive movement"]
    },
    "Cone Agility - T-Drill": {
        videoId: "1qGfcFbNZxM",
        start: 25,
        cues: ["Explosive first step", "Stay low", "Plant outside foot hard"]
    },
    "Box Jumps": {
        videoId: "52r_Ul5k03g",
        start: 40,
        cues: ["Swing arms for power", "Land soft, bent knees", "Step down"]
    },
    "Interval Sprints": {
        videoId: "vXttNI3kFj8",
        start: 20,
        cues: ["Drive arms hard", "High knee drive", "Full recovery between"]
    },
    "Shuttle Runs (5-10-5)": {
        videoId: "DV_dGSqkpsc",
        start: 35,
        cues: ["Low athletic stance", "Plant hard on turns", "Sprint through finish"]
    },
    "Medicine Ball Slams": {
        videoId: "iS3XiSKnl1w",
        start: 15,
        cues: ["Reach overhead", "Slam with CORE", "Squat to catch"]
    },
    "Cool Down Jog": {
        videoId: "phn9UU3qXD0",
        start: 0,
        cues: ["Very easy pace", "5-10 minutes", "Let heart rate drop"]
    },
    
    // Upper Body
    "Warm-Up (Band Pull-Aparts)": {
        videoId: "JObYtU7Y7ag",
        start: 25,
        cues: ["Arms straight", "Squeeze shoulder blades", "Control return"]
    },
    "Bench Press": {
        videoId: "rT7DgCr-3pg",
        start: 185,  // 3:05 - actual pressing
        cues: ["Retract shoulder blades", "Bar to mid-chest", "Drive feet into floor"]
    },
    "Bent Over Rows": {
        videoId: "FWJR5Ve8bnQ",
        start: 95,  // 1:35
        cues: ["Hinge hips, flat back", "Pull elbows BACK", "Squeeze shoulder blades"]
    },
    "Overhead Press": {
        videoId: "2yjwXTZQDDI",
        start: 150,  // 2:30
        cues: ["Squeeze glutes + core", "Press straight up", "Lock out at top"]
    },
    "Lat Pulldowns": {
        videoId: "CAwf7n6Luuc",
        start: 90,  // 1:30
        cues: ["Lean back slightly", "Pull to upper chest", "Squeeze lats"]
    },
    "Dumbbell Incline Press": {
        videoId: "8iPEnn-ltC8",
        start: 60,
        cues: ["Bench 30-45°", "Press up and in", "Don't flare elbows"]
    },
    "Face Pulls": {
        videoId: "rep-qVOkqgk",
        start: 70,  // 1:10
        cues: ["Pull to EARS, not chest", "Externally rotate", "Squeeze rear delts"]
    },
    "Bicep Curls / Tricep Pushdowns": {
        videoId: "ykJmrZ5v0Oo",
        start: 50,
        cues: ["Elbows pinned", "Full ROM", "No swinging"]
    },
    
    // Cardio & Core
    "Easy Jog Warm-Up": {
        videoId: "brFHyOtTwH4",
        start: 0,
        cues: ["Conversation pace", "5-10 minutes", "Stay relaxed"]
    },
    "Tempo Run": {
        videoId: "brFHyOtTwH4",
        start: 0,
        cues: ["Comfortably hard", "Short phrases only", "70-75% effort"]
    },
    "Dead Bugs": {
        videoId: "I5xbsA71v1A",
        start: 45,
        cues: ["Low back FLAT to floor", "Opposite arm/leg", "Exhale as you extend"]
    },
    "Russian Twists": {
        videoId: "wkD8rjkodUI",
        start: 30,
        cues: ["Lean back slightly", "Rotate from CORE", "Touch ground each side"]
    },
    "Hollow Body Hold": {
        videoId: "LlDNef_Ztsc",
        start: 35,
        cues: ["Low back glued down", "Banana shape", "Breathe steadily"]
    },
    "Side Plank": {
        videoId: "K2VljzCC16g",
        start: 25,
        cues: ["Hips up high", "Body straight", "Elbow under shoulder"]
    },
    "Bicycle Crunches": {
        videoId: "9FGilxCbdz8",
        start: 20,
        cues: ["Elbow to opposite knee", "Extend other leg", "Don't pull neck"]
    },
    
    // Power Movements
    "Power Cleans": {
        videoId: "GVt4uQ0sDJE",
        start: 180,  // 3:00 - demo
        cues: ["Explosive hip extension", "Shrug + pull under", "Catch in front rack"]
    },
    "Front Squats": {
        videoId: "m4ytaCJZpl0",
        start: 120,  // 2:00
        cues: ["Elbows HIGH", "More upright torso", "Push knees out"]
    },
    "Push Press": {
        videoId: "X6-DMh-t4nQ",
        start: 70,
        cues: ["Dip with knees", "Explosive drive up", "Lock out overhead"]
    },
    "Weighted Pull-Ups": {
        videoId: "eGo4IYlbE5g",
        start: 85,  // 1:25
        cues: ["Dead hang start", "Pull elbows to pockets", "Chin over bar"]
    },
    "Kettlebell Swings": {
        videoId: "YSxHifyI6s8",
        start: 105,  // 1:45
        cues: ["HINGE, not squat", "Power from hip snap", "Squeeze glutes at top"]
    },
    "Single-Leg RDL": {
        videoId: "Ej3Rr30xMqI",
        start: 40,
        cues: ["Slight knee bend", "Back leg goes straight back", "Hips stay square"]
    },
    "Farmer's Carry": {
        videoId: "Fkzk_RqlYig",
        start: 30,
        cues: ["Stand tall", "Core braced", "Shoulders back"]
    },
    
    // Saturday Options
    "Option A: Pickup Soccer/Basketball": {
        videoId: "R0mMyV5OtcM",
        start: 30,
        cues: ["Warm up first", "Stay hydrated", "Have fun!"]
    },
    "Option B: Long Easy Run": {
        videoId: "brFHyOtTwH4",
        start: 0,
        cues: ["Conversation pace", "5-6 miles", "Enjoy it"]
    },
    "Option C: Hiking": {
        videoId: "8xg3vE8Ie_E",
        start: 0,
        cues: ["Good footwear", "Bring water", "60+ minutes"]
    },
    "Post-Activity Stretching": {
        videoId: "SsT_go-oCcQ",
        start: 60,
        cues: ["Hold 30-60 sec", "Focus on worked muscles", "Don't bounce"]
    }
};

// Workout Data - Weekly Plan for Former Collegiate Soccer Player
const workouts = {
    0: { // Sunday - Active Recovery
        name: "Active Recovery & Mobility",
        type: "Recovery",
        duration: 30,
        intensity: "Low",
        exercises: [
            { name: "Foam Rolling - Full Body", detail: "10 minutes" },
            { name: "Hip Flexor Stretch", detail: "2 min each side" },
            { name: "Pigeon Pose", detail: "2 min each side" },
            { name: "Cat-Cow Flow", detail: "20 reps" },
            { name: "World's Greatest Stretch", detail: "5 each side" },
            { name: "Light Walk or Bike", detail: "15 minutes" }
        ],
        notes: "Focus on areas that feel tight from the week. This is your reset day - don't skip it! Great time for a nature walk or easy bike ride."
    },
    1: { // Monday - Lower Body Strength
        name: "Lower Body Power & Strength",
        type: "Strength",
        duration: 55,
        intensity: "High",
        exercises: [
            { name: "Dynamic Warm-Up", detail: "5 min (leg swings, hip circles)" },
            { name: "Barbell Back Squat", detail: "4 x 6-8 reps" },
            { name: "Romanian Deadlift", detail: "3 x 10 reps" },
            { name: "Bulgarian Split Squats", detail: "3 x 8 each leg" },
            { name: "Leg Press", detail: "3 x 12 reps" },
            { name: "Nordic Hamstring Curls", detail: "3 x 6 reps" },
            { name: "Standing Calf Raises", detail: "4 x 15 reps" },
            { name: "Core: Plank Holds", detail: "3 x 45 sec" }
        ],
        notes: "As a former soccer player, your legs are your foundation. Focus on controlled eccentric (lowering) phases. Rest 90 seconds between heavy sets."
    },
    2: { // Tuesday - Conditioning & Agility
        name: "Soccer-Style Conditioning",
        type: "Cardio",
        duration: 45,
        intensity: "High",
        exercises: [
            { name: "Dynamic Warm-Up", detail: "5 min" },
            { name: "Ladder Drills", detail: "5 minutes (ickey shuffle, in-out)" },
            { name: "Cone Agility - T-Drill", detail: "6 reps" },
            { name: "Box Jumps", detail: "4 x 8 reps" },
            { name: "Interval Sprints", detail: "8 x 30 sec on, 30 sec off" },
            { name: "Shuttle Runs (5-10-5)", detail: "6 reps" },
            { name: "Medicine Ball Slams", detail: "3 x 12 reps" },
            { name: "Cool Down Jog", detail: "5 minutes" }
        ],
        notes: "This mimics the intermittent high-intensity nature of soccer. Push hard during work intervals, recover fully during rest. Stay hydrated!"
    },
    3: { // Wednesday - Upper Body
        name: "Upper Body Strength",
        type: "Strength",
        duration: 50,
        intensity: "Medium",
        exercises: [
            { name: "Warm-Up (Band Pull-Aparts)", detail: "2 x 15" },
            { name: "Bench Press", detail: "4 x 8 reps" },
            { name: "Bent Over Rows", detail: "4 x 8 reps" },
            { name: "Overhead Press", detail: "3 x 10 reps" },
            { name: "Lat Pulldowns", detail: "3 x 10 reps" },
            { name: "Dumbbell Incline Press", detail: "3 x 10 reps" },
            { name: "Face Pulls", detail: "3 x 15 reps" },
            { name: "Bicep Curls / Tricep Pushdowns", detail: "3 x 12 each" }
        ],
        notes: "Balance pushing and pulling movements. Soccer players often neglect upper body - this builds functional strength and injury prevention."
    },
    4: { // Thursday - Tempo Run & Core
        name: "Tempo Run & Core Circuit",
        type: "Cardio",
        duration: 40,
        intensity: "Medium",
        exercises: [
            { name: "Easy Jog Warm-Up", detail: "5 minutes" },
            { name: "Tempo Run", detail: "20 min at 70-75% effort" },
            { name: "Cool Down Jog", detail: "5 minutes" },
            { name: "Dead Bugs", detail: "3 x 12 each side" },
            { name: "Russian Twists", detail: "3 x 20 reps" },
            { name: "Hollow Body Hold", detail: "3 x 30 sec" },
            { name: "Side Plank", detail: "2 x 30 sec each side" },
            { name: "Bicycle Crunches", detail: "3 x 20 reps" }
        ],
        notes: "Tempo pace should feel 'comfortably hard' - you can speak in short sentences. Great for building aerobic base and mental toughness."
    },
    5: { // Friday - Full Body Power
        name: "Full Body Athletic Power",
        type: "Strength",
        duration: 55,
        intensity: "High",
        exercises: [
            { name: "Dynamic Warm-Up", detail: "5 minutes" },
            { name: "Power Cleans", detail: "5 x 3 reps" },
            { name: "Front Squats", detail: "4 x 6 reps" },
            { name: "Push Press", detail: "4 x 6 reps" },
            { name: "Weighted Pull-Ups", detail: "4 x 6 reps" },
            { name: "Kettlebell Swings", detail: "3 x 15 reps" },
            { name: "Single-Leg RDL", detail: "3 x 8 each leg" },
            { name: "Farmer's Carry", detail: "3 x 40 meters" }
        ],
        notes: "Focus on explosive power - this translates to speed on the field. Quality over quantity. Rest 2 minutes between power clean sets."
    },
    6: { // Saturday - Pickup Game or Long Run
        name: "Active Play Day",
        type: "Cardio",
        duration: 60,
        intensity: "Medium",
        exercises: [
            { name: "Option A: Pickup Soccer/Basketball", detail: "45-60 min" },
            { name: "Option B: Long Easy Run", detail: "5-6 miles at conversational pace" },
            { name: "Option C: Hiking", detail: "60+ minutes" },
            { name: "Post-Activity Stretching", detail: "10 minutes" }
        ],
        notes: "This day is about enjoying movement! Join intramurals, play pickup games, or explore a trail. The best workout is one you actually enjoy."
    }
};

// Meal Data - Weekly Dinner Plan ($70 Budget, Kroger Prices)
const meals = {
    0: { // Sunday
        name: "Teriyaki Turkey Lettuce Wraps",
        prepTime: 5,
        cookTime: 12,
        calories: 420,
        protein: 38,
        ingredients: [
            "1 lb ground turkey",
            "1 green bell pepper, diced",
            "1/2 onion, diced",
            "1/2 cup frozen spinach",
            "3 cloves garlic, minced",
            "3 tbsp teriyaki sauce",
            "Lettuce leaves or rice"
        ],
        instructions: [
            "Heat a large skillet over medium-high heat.",
            "Add ground turkey, break apart and cook 5-6 min until browned.",
            "Add peppers, onion, and garlic. Cook 3-4 min until softened.",
            "Stir in frozen spinach until heated through.",
            "Pour in teriyaki sauce, toss everything together.",
            "Serve in lettuce wraps or over rice."
        ],
        tips: "~$5 total for 3 servings. Frozen spinach is way cheaper than fresh and works great here!"
    },
    1: { // Monday
        name: "Garlic Chicken & Broccoli Stir-Fry",
        prepTime: 5,
        cookTime: 15,
        calories: 450,
        protein: 38,
        ingredients: [
            "1 lb chicken thighs, cubed",
            "1 bag frozen broccoli",
            "4 cloves garlic, minced",
            "3 tbsp soy sauce",
            "1 tbsp oil",
            "Rice to serve"
        ],
        instructions: [
            "Heat oil in a large skillet over medium-high heat.",
            "Season chicken with salt and pepper, cook 6-7 min until done.",
            "Add frozen broccoli directly to pan.",
            "Add garlic, cook 4-5 min until broccoli is hot.",
            "Pour soy sauce over, toss to coat.",
            "Serve over rice."
        ],
        tips: "~$4 for 3 servings. Chicken thighs are $2.49/lb - half the price of breast!"
    },
    2: { // Tuesday
        name: "Beef & Black Bean Tacos",
        prepTime: 5,
        cookTime: 12,
        calories: 480,
        protein: 32,
        ingredients: [
            "1 lb ground beef (73/27)",
            "1 can black beans, drained",
            "1/2 onion, diced",
            "2 cloves garlic, minced",
            "2 tbsp taco seasoning",
            "Tortillas"
        ],
        instructions: [
            "Brown ground beef in skillet over medium-high heat, 5-6 min.",
            "Drain excess fat.",
            "Add onion and garlic, cook 3 min.",
            "Stir in beans and taco seasoning with splash of water.",
            "Simmer 3-4 min until everything is coated.",
            "Serve in tortillas with cheese."
        ],
        tips: "~$5 for 4 servings = $1.25/meal! The 73/27 beef is cheaper and the fat adds flavor."
    },
    3: { // Wednesday
        name: "Veggie Egg Fried Rice",
        prepTime: 5,
        cookTime: 10,
        calories: 420,
        protein: 18,
        ingredients: [
            "4 eggs",
            "2 cups cooked rice",
            "1 zucchini, diced",
            "3 cloves garlic, minced",
            "3 tbsp soy sauce",
            "2 tbsp oil",
            "Green onions"
        ],
        instructions: [
            "Heat 1 tbsp oil in skillet over high heat.",
            "Scramble eggs, break into pieces, set aside.",
            "Add remaining oil, toss in rice and zucchini.",
            "Stir-fry 4-5 min until rice is slightly crispy.",
            "Add garlic, soy sauce, and eggs back in.",
            "Top with green onions and serve."
        ],
        tips: "~$2 for 2 big servings! Cheapest dinner of the week. Use leftover rice from other meals."
    },
    4: { // Thursday
        name: "Chickpea & Spinach Curry",
        prepTime: 5,
        cookTime: 15,
        calories: 400,
        protein: 15,
        ingredients: [
            "2 cans chickpeas, drained",
            "1 can diced tomatoes",
            "1 cup frozen spinach",
            "3 cloves garlic, minced",
            "2 tbsp curry powder",
            "1 tbsp oil",
            "Rice to serve"
        ],
        instructions: [
            "Heat oil in skillet over medium heat.",
            "Add garlic and curry powder, stir 30 seconds until fragrant.",
            "Add diced tomatoes and chickpeas.",
            "Simmer 10 min, mashing some chickpeas for thickness.",
            "Stir in frozen spinach until heated.",
            "Serve over rice."
        ],
        tips: "~$3 for 4 servings = $0.75/meal! Vegetarian, filling, and crazy cheap."
    },
    5: { // Friday
        name: "Greek Chicken & Tomato Skillet",
        prepTime: 5,
        cookTime: 15,
        calories: 480,
        protein: 40,
        ingredients: [
            "1 lb chicken thighs, cubed",
            "4 Roma tomatoes, diced",
            "1/2 cup frozen spinach",
            "3 cloves garlic, minced",
            "1/4 cup feta crumbles",
            "1 tbsp butter",
            "Italian seasoning"
        ],
        instructions: [
            "Melt butter in skillet over medium-high heat.",
            "Season chicken with Italian seasoning, cook 6-7 min.",
            "Add garlic and tomatoes, cook 3 min.",
            "Stir in frozen spinach until heated.",
            "Top with feta crumbles and serve.",
            "Great over rice or with bread."
        ],
        tips: "~$5 for 3 servings. The feta makes it feel fancy but it's still budget-friendly!"
    },
    6: { // Saturday
        name: "Chicken & Black Bean Quesadillas",
        prepTime: 5,
        cookTime: 15,
        calories: 580,
        protein: 35,
        ingredients: [
            "1 lb chicken thighs, sliced thin",
            "1 can black beans, drained",
            "1 cup shredded cheese",
            "1 bell pepper, sliced",
            "Taco seasoning",
            "Tortillas (4)"
        ],
        instructions: [
            "Cook chicken with taco seasoning until done, 6-7 min. Set aside.",
            "Sauté pepper 3-4 min, add beans, mash slightly.",
            "Build quesadillas: tortilla + cheese + chicken + beans + cheese.",
            "Cook 2-3 min per side until golden.",
            "Cut into triangles and serve.",
            "Add salsa or hot sauce if you like."
        ],
        tips: "~$6 for 4 big quesadillas. Using chicken thighs instead of buying extra protein saves money!"
    }
};

// Motivational Quotes
const quotes = [
    '"The only bad workout is the one that didn\'t happen."',
    '"Take care of your body. It\'s the only place you have to live." — Jim Rohn',
    '"Success is the sum of small efforts repeated day in and day out."',
    '"Your body can stand almost anything. It\'s your mind you have to convince."',
    '"The pain you feel today will be the strength you feel tomorrow."',
    '"Fitness is not about being better than someone else. It\'s about being better than you used to be."',
    '"Champions keep playing until they get it right." — Billie Jean King',
    '"The harder you work, the luckier you get."'
];

// App State
let state = {
    currentSection: 'dashboard',
    selectedDay: new Date().getDay(),
    streak: parseInt(localStorage.getItem('fitfuel_streak') || '0'),
    lastCheckIn: localStorage.getItem('fitfuel_lastCheckIn'),
    completedWorkouts: JSON.parse(localStorage.getItem('fitfuel_workouts') || '{}'),
    completedMeals: JSON.parse(localStorage.getItem('fitfuel_meals') || '{}'),
    notes: localStorage.getItem('fitfuel_notes') || ''
};

// Grocery List - Categorized ingredients with Kroger prices (~$70 budget)
const groceryCategories = {
    "🥩 Proteins": [
        { item: "Ground turkey (1 lb)", price: "$3.99", meals: ["Sun"] },
        { item: "Chicken thighs value pack (3 lbs)", price: "$7.47", meals: ["Mon", "Fri", "Sat"] },
        { item: "Ground beef 73/27 (1 lb)", price: "$4.49", meals: ["Tue"] },
        { item: "Kroger eggs (18 count)", price: "$4.29", meals: ["Wed", "Extras"] },
        { item: "Kroger chickpeas (2 cans)", price: "$1.58", meals: ["Thu"] }
    ],
    "🥬 Produce": [
        { item: "Green bell peppers (4)", price: "$2.00", meals: ["Sun", "Tue", "Sat"] },
        { item: "Yellow onions (3 lb bag)", price: "$2.99", meals: ["All week"] },
        { item: "Frozen spinach (12oz)", price: "$1.49", meals: ["Sun", "Thu", "Fri"] },
        { item: "Garlic (1 head)", price: "$0.50", meals: ["All week"] },
        { item: "Frozen broccoli (12oz)", price: "$1.29", meals: ["Mon"] },
        { item: "Roma tomatoes (4)", price: "$1.50", meals: ["Fri"] },
        { item: "Zucchini (1)", price: "$0.79", meals: ["Wed"] },
        { item: "Romaine lettuce", price: "$1.99", meals: ["Sun"] },
        { item: "Green onions (1 bunch)", price: "$0.79", meals: ["Wed", "Sat"] }
    ],
    "🥫 Canned & Dry": [
        { item: "Kroger black beans (3 cans)", price: "$2.37", meals: ["Tue", "Sat"] },
        { item: "Kroger diced tomatoes (1 can)", price: "$0.89", meals: ["Thu"] },
        { item: "Kroger long grain rice (2 lb)", price: "$1.99", meals: ["All week"] },
        { item: "Kroger tortillas (10 pack)", price: "$1.99", meals: ["Tue", "Sat"] }
    ],
    "🧂 Pantry (buy once, lasts weeks)": [
        { item: "Kroger teriyaki sauce", price: "$2.49", meals: ["Sun"] },
        { item: "Kroger soy sauce", price: "$1.99", meals: ["Mon", "Wed"] },
        { item: "Kroger taco seasoning (3 pack)", price: "$1.29", meals: ["Tue", "Sat"] },
        { item: "Kroger curry powder", price: "$2.49", meals: ["Thu"] },
        { item: "Kroger vegetable oil (48oz)", price: "$3.49", meals: ["All week"] }
    ],
    "🧀 Dairy": [
        { item: "Kroger feta crumbles", price: "$3.49", meals: ["Fri"] },
        { item: "Kroger shredded cheese (8oz)", price: "$2.49", meals: ["Sat"] },
        { item: "Kroger butter (1 stick)", price: "$1.29", meals: ["Fri"] },
        { item: "Kroger chicken broth (32oz)", price: "$1.49", meals: ["Fri"] }
    ],
    "💡 Already Have? Skip These": [
        { item: "Salt & pepper", price: "$0.00", meals: ["All week"] },
        { item: "Italian seasoning (if you have)", price: "$0.00", meals: ["Fri"] },
        { item: "Hot sauce (optional)", price: "$0.00", meals: ["Any"] }
    ]
};

// Calculate total estimated cost
function calculateGroceryTotal() {
    let total = 0;
    for (const items of Object.values(groceryCategories)) {
        items.forEach(item => {
            const price = parseFloat(item.price.replace('$', ''));
            total += price;
        });
    }
    return total.toFixed(2);
}

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initDaySelectors();
    initDashboard();
    initProgress();
    initVideoModal();
    initGroceryList();
    updateWorkoutDisplay(state.selectedDay);
    updateMealDisplay(state.selectedDay);
});

// Navigation
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link, .card-action[data-section]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const section = link.dataset.section;
            if (section) {
                showSection(section);
            }
        });
    });
}

function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    // Show target section
    document.getElementById(sectionId).classList.add('active');
    
    // Update nav links
    document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
        link.classList.toggle('active', link.dataset.section === sectionId);
    });
    
    state.currentSection = sectionId;
}

// Day Selectors
function initDaySelectors() {
    const today = new Date().getDay();
    
    document.querySelectorAll('.week-selector').forEach(selector => {
        const buttons = selector.querySelectorAll('.day-btn');
        buttons.forEach(btn => {
            const day = parseInt(btn.dataset.day);
            if (day === today) {
                btn.classList.add('today', 'active');
            }
            
            btn.addEventListener('click', () => {
                selector.querySelectorAll('.day-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                state.selectedDay = day;
                
                // Update displays based on parent section
                if (selector.closest('#workouts')) {
                    updateWorkoutDisplay(day);
                } else if (selector.closest('#meals')) {
                    updateMealDisplay(day);
                }
            });
        });
    });
}

// Dashboard
function initDashboard() {
    // Set current date
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    document.getElementById('currentDate').textContent = new Date().toLocaleDateString('en-US', options);
    
    // Set today's workout preview
    const todayWorkout = workouts[new Date().getDay()];
    document.getElementById('workoutType').textContent = todayWorkout.type;
    document.getElementById('todayWorkoutName').textContent = todayWorkout.name;
    document.getElementById('todayWorkoutDuration').textContent = `${todayWorkout.duration} min`;
    
    // Set today's meal preview
    const todayMeal = meals[new Date().getDay()];
    document.getElementById('mealCalories').textContent = `${todayMeal.calories} cal`;
    document.getElementById('todayMealName').textContent = todayMeal.name;
    document.getElementById('todayMealTime').textContent = `${todayMeal.prepTime} min prep`;
    
    // Set streak
    updateStreakDisplay();
    
    // Set random quote
    document.getElementById('dailyQuote').textContent = quotes[Math.floor(Math.random() * quotes.length)];
    
    // Check-in button
    const checkInBtn = document.getElementById('checkInBtn');
    const today = new Date().toDateString();
    
    if (state.lastCheckIn === today) {
        checkInBtn.textContent = '✓ Checked In!';
        checkInBtn.classList.add('checked');
    }
    
    checkInBtn.addEventListener('click', () => {
        if (state.lastCheckIn !== today) {
            state.streak++;
            state.lastCheckIn = today;
            localStorage.setItem('fitfuel_streak', state.streak);
            localStorage.setItem('fitfuel_lastCheckIn', today);
            updateStreakDisplay();
            checkInBtn.textContent = '✓ Checked In!';
            checkInBtn.classList.add('checked');
        }
    });
}

function updateStreakDisplay() {
    document.getElementById('streakCount').textContent = state.streak;
    const currentStreakEl = document.getElementById('currentStreak');
    if (currentStreakEl) {
        currentStreakEl.textContent = state.streak;
    }
}

// Workout Display
function updateWorkoutDisplay(day) {
    const workout = workouts[day];
    
    document.getElementById('workoutTitle').textContent = workout.name;
    document.getElementById('workoutDuration').textContent = `⏱️ ${workout.duration} min`;
    document.getElementById('workoutIntensity').textContent = `🔥 ${workout.intensity}`;
    
    const exerciseList = document.getElementById('exerciseList');
    exerciseList.innerHTML = workout.exercises.map((ex, i) => {
        return `
            <div class="exercise-item">
                <span class="exercise-number">${i + 1}</span>
                <div class="exercise-info">
                    <div class="exercise-name">${ex.name}</div>
                    <div class="exercise-detail">${ex.detail}</div>
                </div>
                <button class="form-video-btn" data-exercise="${ex.name}" title="Watch form tutorial">
                    <span class="video-icon">▶</span>
                    <span class="video-text">Form</span>
                </button>
            </div>
        `;
    }).join('');
    
    // Add click handlers to form buttons
    document.querySelectorAll('.form-video-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const exerciseName = btn.dataset.exercise;
            openVideoModal(exerciseName);
        });
    });
    
    document.getElementById('workoutNotes').innerHTML = `<strong>💡 Pro Tip:</strong> ${workout.notes}`;
}

// Quick Reference Modal Functions
function openVideoModal(exerciseName) {
    const modal = document.getElementById('videoModal');
    const videoContainer = document.getElementById('videoContainer');
    const modalTitle = document.getElementById('modalTitle');
    const quickCues = document.getElementById('quickCues');
    
    // Get exercise data or use fallback
    const exerciseData = exerciseVideos[exerciseName] || {
        videoId: null,
        cues: ["Controlled movement", "Core engaged", "Breathe steadily"]
    };
    
    // Set modal title
    modalTitle.textContent = exerciseName;
    
    // Set video - starts at timestamp, muted for gym use
    if (exerciseData.videoId) {
        const startTime = exerciseData.start || 0;
        videoContainer.innerHTML = `
            <iframe 
                src="https://www.youtube.com/embed/${exerciseData.videoId}?start=${startTime}&autoplay=1&mute=1&rel=0&modestbranding=1&controls=1" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
            </iframe>
        `;
    } else {
        // Fallback - search for the exercise
        const searchQuery = encodeURIComponent(`${exerciseName} form how to`);
        videoContainer.innerHTML = `
            <iframe 
                src="https://www.youtube.com/embed?listType=search&list=${searchQuery}&autoplay=1&mute=1" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
            </iframe>
        `;
    }
    
    // Set large, readable form cues
    quickCues.innerHTML = exerciseData.cues.map((cue, i) => `
        <div class="cue-item">
            <span class="cue-number">${i + 1}</span>
            <span class="cue-text">${cue}</span>
        </div>
    `).join('');
    
    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeVideoModal() {
    const modal = document.getElementById('videoModal');
    const videoContainer = document.getElementById('videoContainer');
    
    // Stop video by clearing iframe
    videoContainer.innerHTML = '';
    
    // Hide modal
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Initialize modal event listeners
function initVideoModal() {
    const modalClose = document.getElementById('modalClose');
    const modalOverlay = document.getElementById('modalOverlay');
    
    modalClose.addEventListener('click', closeVideoModal);
    modalOverlay.addEventListener('click', closeVideoModal);
    
    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeVideoModal();
        }
    });
}

// Grocery List Functions
function initGroceryList() {
    const groceryListEl = document.getElementById('groceryList');
    const checkedItems = JSON.parse(localStorage.getItem('fitfuel_groceryChecked') || '[]');
    
    let totalItems = 0;
    let html = '';
    
    // Build grocery list HTML
    for (const [category, items] of Object.entries(groceryCategories)) {
        html += `
            <div class="grocery-category">
                <div class="category-header">
                    <span class="category-icon">${category.split(' ')[0]}</span>
                    <span class="category-title">${category.split(' ').slice(1).join(' ')}</span>
                </div>
                <div class="category-items">
        `;
        
        items.forEach((item, index) => {
            const itemId = `${category}-${index}`;
            const isChecked = checkedItems.includes(itemId);
            totalItems++;
            
            html += `
                <div class="grocery-item ${isChecked ? 'checked' : ''}" data-id="${itemId}" data-price="${item.price}">
                    <div class="item-checkbox"></div>
                    <span class="item-text">${item.item}</span>
                    <span class="item-price">${item.price}</span>
                    <span class="item-meals">${item.meals.join(', ')}</span>
                </div>
            `;
        });
        
        html += `
                </div>
            </div>
        `;
    }
    
    groceryListEl.innerHTML = html;
    
    // Update totals
    document.getElementById('totalItems').textContent = totalItems;
    document.getElementById('estimatedCost').textContent = `$${calculateGroceryTotal()}`;
    updateGroceryCount();
    
    // Add click handlers
    document.querySelectorAll('.grocery-item').forEach(item => {
        item.addEventListener('click', () => {
            toggleGroceryItem(item);
        });
    });
    
    // Clear checked button
    document.getElementById('clearChecked').addEventListener('click', () => {
        localStorage.setItem('fitfuel_groceryChecked', '[]');
        document.querySelectorAll('.grocery-item.checked').forEach(item => {
            item.classList.remove('checked');
        });
        updateGroceryCount();
    });
    
    // Copy list button
    document.getElementById('copyList').addEventListener('click', () => {
        copyGroceryList();
    });
}

function toggleGroceryItem(item) {
    const itemId = item.dataset.id;
    let checkedItems = JSON.parse(localStorage.getItem('fitfuel_groceryChecked') || '[]');
    
    if (item.classList.contains('checked')) {
        item.classList.remove('checked');
        checkedItems = checkedItems.filter(id => id !== itemId);
    } else {
        item.classList.add('checked');
        checkedItems.push(itemId);
    }
    
    localStorage.setItem('fitfuel_groceryChecked', JSON.stringify(checkedItems));
    updateGroceryCount();
}

function updateGroceryCount() {
    const checkedCount = document.querySelectorAll('.grocery-item.checked').length;
    document.getElementById('checkedItems').textContent = checkedCount;
}

function copyGroceryList() {
    let text = "🛒 KROGER GROCERY LIST\n\n";
    
    for (const [category, items] of Object.entries(groceryCategories)) {
        text += `${category}\n`;
        items.forEach(item => {
            text += `  □ ${item.item} - ${item.price}\n`;
        });
        text += '\n';
    }
    
    text += `Est. Total: $${calculateGroceryTotal()}\n`;
    text += "Generated by FitFuel 💪";
    
    navigator.clipboard.writeText(text).then(() => {
        const btn = document.getElementById('copyList');
        const originalText = btn.innerHTML;
        btn.innerHTML = '✓ Copied!';
        setTimeout(() => {
            btn.innerHTML = originalText;
        }, 2000);
    });
}

// Meal Display
function updateMealDisplay(day) {
    const meal = meals[day];
    
    document.getElementById('mealTitle').textContent = meal.name;
    document.getElementById('mealPrepTime').textContent = `⏱️ ${meal.prepTime} min prep`;
    document.getElementById('mealCals').textContent = `🔥 ${meal.calories} cal`;
    document.getElementById('mealProtein').textContent = `💪 ${meal.protein}g protein`;
    
    document.getElementById('ingredientsList').innerHTML = meal.ingredients.map(ing => `<li>${ing}</li>`).join('');
    document.getElementById('instructionsList').innerHTML = meal.instructions.map(inst => `<li>${inst}</li>`).join('');
    document.getElementById('mealTips').innerHTML = `<strong>💡 Tip:</strong> ${meal.tips}`;
}

// Progress Tracking
function initProgress() {
    // Load completed items
    updateProgressDisplay();
    
    // Day checks
    document.querySelectorAll('.day-check').forEach(check => {
        const day = check.closest('.progress-day').dataset.day;
        const type = check.dataset.type;
        
        check.addEventListener('click', () => {
            toggleCompletion(day, type);
        });
    });
    
    // Log buttons
    document.getElementById('logWorkout').addEventListener('click', () => {
        const today = new Date().getDay();
        toggleCompletion(today, 'workout');
        document.getElementById('logWorkout').classList.toggle('logged');
    });
    
    document.getElementById('logMeal').addEventListener('click', () => {
        const today = new Date().getDay();
        toggleCompletion(today, 'meal');
        document.getElementById('logMeal').classList.toggle('logged');
    });
    
    // Notes
    const notesArea = document.getElementById('progressNotes');
    notesArea.value = state.notes;
    
    document.getElementById('saveNotes').addEventListener('click', () => {
        state.notes = notesArea.value;
        localStorage.setItem('fitfuel_notes', state.notes);
        alert('Notes saved!');
    });
}

function toggleCompletion(day, type) {
    const key = `${day}-${type}`;
    const storage = type === 'workout' ? state.completedWorkouts : state.completedMeals;
    
    if (storage[key]) {
        delete storage[key];
    } else {
        storage[key] = true;
    }
    
    localStorage.setItem(
        type === 'workout' ? 'fitfuel_workouts' : 'fitfuel_meals',
        JSON.stringify(storage)
    );
    
    updateProgressDisplay();
}

function updateProgressDisplay() {
    // Update day checks
    document.querySelectorAll('.progress-day').forEach(dayEl => {
        const day = dayEl.dataset.day;
        const workoutCheck = dayEl.querySelector('.workout-check');
        const mealCheck = dayEl.querySelector('.meal-check');
        
        workoutCheck.classList.toggle('completed', !!state.completedWorkouts[`${day}-workout`]);
        mealCheck.classList.toggle('completed', !!state.completedMeals[`${day}-meal`]);
    });
    
    // Update stats
    const totalWorkouts = Object.keys(state.completedWorkouts).length;
    const totalMeals = Object.keys(state.completedMeals).length;
    
    document.getElementById('totalWorkouts').textContent = totalWorkouts;
    document.getElementById('totalMeals').textContent = totalMeals;
    
    // Update log buttons for today
    const today = new Date().getDay();
    const workoutBtn = document.getElementById('logWorkout');
    const mealBtn = document.getElementById('logMeal');
    
    if (workoutBtn) {
        workoutBtn.classList.toggle('logged', !!state.completedWorkouts[`${today}-workout`]);
    }
    if (mealBtn) {
        mealBtn.classList.toggle('logged', !!state.completedMeals[`${today}-meal`]);
    }
}

