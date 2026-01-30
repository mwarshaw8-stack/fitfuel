// ========================================
// FITFUEL - Personal Training & Nutrition
// ========================================

// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyD_xSAwpAcF-IOXGnlB04oozuByiqle_aU",
    authDomain: "fitfuel-98937.firebaseapp.com",
    projectId: "fitfuel-98937",
    storageBucket: "fitfuel-98937.firebasestorage.app",
    messagingSenderId: "329250192382",
    appId: "1:329250192382:web:fc13887d6772020b415eaf",
    measurementId: "G-NQPPGDKLR2"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// Current user
let currentUser = null;

// Exercise Database - Verified working YouTube videos + form cues
const exerciseVideos = {
    // Stretching & Mobility
    "Foam Rolling - Full Body": {
        videoId: "t_P0r8D4xKg",
        start: 30,
        cues: ["Roll slowly - 1 inch per second", "Pause on tender spots 30 sec", "Never roll on joints"]
    },
    "Hip Flexor Stretch": {
        videoId: "eFxBqfcBULo",
        start: 10,
        cues: ["Back knee on pad", "Squeeze back glute", "Torso upright"]
    },
    "Pigeon Pose": {
        videoId: "0r9s6w4Pvk4",
        start: 15,
        cues: ["Square hips forward", "Walk hands forward to deepen", "Breathe into stretch"]
    },
    "Cat-Cow Flow": {
        videoId: "kqnua4rHVVA",
        start: 0,
        cues: ["Inhale = arch (cow)", "Exhale = round (cat)", "Move with breath"]
    },
    "World's Greatest Stretch": {
        videoId: "gvKYqWdvdzE",
        start: 0,
        cues: ["Deep lunge", "Rotate toward front leg", "Reach to ceiling"]
    },
    "Light Walk or Bike": {
        videoId: "fJ8yT5ss_rc",
        start: 0,
        cues: ["Zone 1-2 heart rate", "15-30 minutes", "Active recovery"]
    },
    
    // Lower Body
    "Dynamic Warm-Up": {
        videoId: "MqKnXqwfcmU",
        start: 0,
        cues: ["Leg swings each direction", "Hip circles", "Increase range gradually"]
    },
    "Barbell Back Squat": {
        videoId: "ultWZbUMPL8",
        start: 0,
        cues: ["Bar on upper traps", "Knees track over toes", "Hip crease below knee"]
    },
    "Romanian Deadlift": {
        videoId: "JCXUYuzwNrM",
        start: 0,
        cues: ["Push hips BACK", "Bar close to legs", "Feel hamstring stretch"]
    },
    "Bulgarian Split Squats": {
        videoId: "2C-uNgKwPLE",
        start: 30,
        cues: ["Back foot on bench", "Front knee over toes", "Torso upright"]
    },
    "Leg Press": {
        videoId: "IZxyjW7MPJQ",
        start: 30,
        cues: ["Feet shoulder-width", "90° knee bend", "Don't lock knees"]
    },
    "Nordic Hamstring Curls": {
        videoId: "BvMZP0GW9eA",
        start: 0,
        cues: ["Anchor feet secure", "Hips extended", "Lower SLOWLY"]
    },
    "Standing Calf Raises": {
        videoId: "3UWi44yN-wM",
        start: 0,
        cues: ["Full range of motion", "Pause at top", "Slow negative"]
    },
    "Core: Plank Holds": {
        videoId: "ASdvN_XEl_c",
        start: 0,
        cues: ["Straight line head to heels", "Squeeze glutes + core", "Don't sag hips"]
    },
    
    // Upper Body
    "Warm-Up (Band Pull-Aparts)": {
        videoId: "AWgFcXO01lk",
        start: 0,
        cues: ["Arms straight", "Squeeze shoulder blades", "Control return"]
    },
    "Bench Press": {
        videoId: "gRVjAtPip0Y",
        start: 0,
        cues: ["Retract shoulder blades", "Bar to mid-chest", "Drive feet into floor"]
    },
    "Bent Over Rows": {
        videoId: "FWJR5Ve8bnQ",
        start: 60,
        cues: ["Hinge hips, flat back", "Pull elbows BACK", "Squeeze shoulder blades"]
    },
    "Overhead Press": {
        videoId: "_RlRDWO2jfg",
        start: 0,
        cues: ["Squeeze glutes + core", "Press straight up", "Lock out at top"]
    },
    "Lat Pulldowns": {
        videoId: "CAwf7n6Luuc",
        start: 60,
        cues: ["Lean back slightly", "Pull to upper chest", "Squeeze lats"]
    },
    "Dumbbell Incline Press": {
        videoId: "8iPEnn-ltC8",
        start: 30,
        cues: ["Bench 30-45°", "Press up and in", "Don't flare elbows"]
    },
    "Face Pulls": {
        videoId: "eIq5CB9JfKE",
        start: 0,
        cues: ["Pull to EARS, not chest", "Externally rotate", "Squeeze rear delts"]
    },
    "Bicep Curls / Tricep Pushdowns": {
        videoId: "ykJmrZ5v0Oo",
        start: 30,
        cues: ["Elbows pinned", "Full ROM", "No swinging"]
    },
    "Bicep Curls": {
        videoId: "ykJmrZ5v0Oo",
        start: 30,
        cues: ["Elbows pinned", "Full ROM", "No swinging", "Squeeze at top"]
    },
    "Dumbbell Lateral Raises": {
        videoId: "3VcKaXpzqRo",
        start: 0,
        cues: ["Slight lean forward", "Raise to shoulder height", "Control the negative"]
    },
    
    // Core Exercises
    "Dead Bugs": {
        videoId: "I5xbsA71v1A",
        start: 20,
        cues: ["Low back FLAT to floor", "Opposite arm/leg", "Exhale as you extend"]
    },
    "Russian Twists": {
        videoId: "wkD8rjkodUI",
        start: 15,
        cues: ["Lean back slightly", "Rotate from CORE", "Touch ground each side"]
    },
    "Hollow Body Hold": {
        videoId: "LlDNef_Ztsc",
        start: 20,
        cues: ["Low back glued down", "Banana shape", "Breathe steadily"]
    },
    "Side Plank": {
        videoId: "K2VljzCC16g",
        start: 15,
        cues: ["Hips up high", "Body straight", "Elbow under shoulder"]
    },
    "Bicycle Crunches": {
        videoId: "1we3bh9uhqY",
        start: 0,
        cues: ["Elbow to opposite knee", "Extend other leg", "Don't pull neck"]
    },
    "Plank Hold": {
        videoId: "ASdvN_XEl_c",
        start: 0,
        cues: ["Straight line head to heels", "Squeeze glutes + core", "Don't sag hips"]
    },
    
    // Power Movements
    "Power Cleans": {
        videoId: "KbC6U-TPWJY",
        start: 0,
        cues: ["Explosive hip extension", "Shrug + pull under", "Catch in front rack"]
    },
    "Front Squats": {
        videoId: "m4ytaCJZpl0",
        start: 60,
        cues: ["Elbows HIGH", "More upright torso", "Push knees out"]
    },
    "Push Press": {
        videoId: "X6-DMh-t4nQ",
        start: 40,
        cues: ["Dip with knees", "Explosive drive up", "Lock out overhead"]
    },
    "Weighted Pull-Ups": {
        videoId: "eGo4IYlbE5g",
        start: 50,
        cues: ["Dead hang start", "Pull elbows to pockets", "Chin over bar"]
    },
    "Kettlebell Swings": {
        videoId: "YSxHifyI6s8",
        start: 60,
        cues: ["HINGE, not squat", "Power from hip snap", "Squeeze glutes at top"]
    },
    "Single-Leg RDL": {
        videoId: "Dkqr5tLdEwY",
        start: 0,
        cues: ["Slight knee bend", "Back leg goes straight back", "Hips stay square"]
    },
    "Farmer's Carry": {
        videoId: "rt17lmnaLSM",
        start: 0,
        cues: ["Stand tall", "Core braced", "Shoulders back"]
    },
    
    // Recovery Options
    "Post-Activity Stretching": {
        videoId: "sTxC3J3gQEU",
        start: 0,
        cues: ["Hold 30-60 sec", "Focus on worked muscles", "Don't bounce"]
    },
    
    // Longevity & Mobility Exercises
    "90/90 Hip Stretch": {
        videoId: "XOu2fR4dKDA",
        start: 0,
        cues: ["Front leg 90°, back leg 90°", "Sit tall, don't lean", "Breathe and relax into it"]
    },
    "Thoracic Spine Rotations": {
        videoId: "NMqIJkVy-Uc",
        start: 0,
        cues: ["Keep hips stable", "Rotate from mid-back", "Follow hand with eyes"]
    },
    "Shoulder CARS (Circles)": {
        videoId: "hCGJpTmb3xE",
        start: 0,
        cues: ["Slow controlled circles", "Maximum range of motion", "Keep rest of body still"]
    },
    "Deep Squat Hold": {
        videoId: "8_5Hm7yd5nQ",
        start: 0,
        cues: ["Heels down if possible", "Knees out over toes", "Breathe and relax"]
    },
    "Gentle Walk": {
        videoId: "fJ8yT5ss_rc",
        start: 0,
        cues: ["Easy conversational pace", "Enjoy nature if possible", "15-30 minutes"]
    },
    "Hip Circles & Leg Swings": {
        videoId: "MqKnXqwfcmU",
        start: 0,
        cues: ["Controlled circles", "Front/back and side/side", "Wake up the hips"]
    },
    "Goblet Squat": {
        videoId: "MeIiIdhvXT4",
        start: 0,
        cues: ["Hold weight at chest", "Elbows inside knees", "Sit deep between legs"]
    },
    "Walking Lunges": {
        videoId: "L8fvypPrzzs",
        start: 15,
        cues: ["Long stride forward", "Back knee toward floor", "Keep torso upright"]
    },
    "Glute Bridge (weighted)": {
        videoId: "wPM8icPu6H8",
        start: 0,
        cues: ["Drive through heels", "Squeeze glutes at top", "Don't hyperextend back"]
    },
    "Single-Leg Calf Raises": {
        videoId: "3UWi44yN-wM",
        start: 0,
        cues: ["Full range of motion", "Pause at top", "Control the negative"]
    },
    "Push-Ups (or Bench Press)": {
        videoId: "_l3ySVKYVJ8",
        start: 0,
        cues: ["Body straight as plank", "Elbows 45° from body", "Chest to floor"]
    },
    "Dumbbell Rows": {
        videoId: "roCP6wCXPqo",
        start: 0,
        cues: ["Flat back, core tight", "Pull elbow to hip", "Squeeze shoulder blade"]
    },
    "Lat Pulldowns (or Pull-Ups)": {
        videoId: "CAwf7n6Luuc",
        start: 60,
        cues: ["Lean back slightly", "Pull to upper chest", "Squeeze lats"]
    },
    "Shoulder Stretch": {
        videoId: "es5qXfVGp-U",
        start: 0,
        cues: ["Cross body stretch", "Hold 30-60 seconds", "Both arms"]
    },
    "Bird Dogs": {
        videoId: "wiFNA3sqjCA",
        start: 10,
        cues: ["Opposite arm and leg", "Keep back flat", "Slow and controlled"]
    },
    "Pallof Press (or hold)": {
        videoId: "gsFHfML294I",
        start: 0,
        cues: ["Resist rotation", "Press straight out", "Core stays tight"]
    },
    "Goblet Squat to Press": {
        videoId: "elrjqHPvY44",
        start: 0,
        cues: ["Squat deep", "Stand and press", "One fluid motion"]
    },
    "Push-Up to Row": {
        videoId: "i7gLUMnHKNQ",
        start: 0,
        cues: ["Push-up, then row", "Keep hips stable", "Alternate arms"]
    },
    "Step-Ups": {
        videoId: "WCFCdxzFBa4",
        start: 0,
        cues: ["Drive through front foot", "Don't push off back leg", "Control the descent"]
    },
    "Turkish Get-Up": {
        videoId: "kHSJwnBLuC0",
        start: 0,
        cues: ["Eyes on weight always", "Go SLOW", "Master each position"]
    },
    "Incline Dumbbell Press": {
        videoId: "8iPEnn-ltC8",
        start: 30,
        cues: ["Bench 30-45°", "Press up and slightly in", "Don't flare elbows"]
    },
    "Seated Cable Row (or DB Row)": {
        videoId: "GZbfZ033f74",
        start: 20,
        cues: ["Squeeze shoulder blades", "Pull to lower chest", "Control the return"]
    },
    "Arnold Press": {
        videoId: "3ml7BH7mNwQ",
        start: 15,
        cues: ["Rotate as you press", "Palms face you at bottom", "Full lockout at top"]
    },
    "Chin-Ups (or Assisted)": {
        videoId: "Hdc7Mw6BIEE",
        start: 0,
        cues: ["Palms facing you", "Pull chin over bar", "Control the descent"]
    },
    "Tricep Dips (or Pushdowns)": {
        videoId: "0326dy_-CzM",
        start: 0,
        cues: ["Elbows stay tight", "Lower with control", "Full extension at top"]
    },
    "Dead Hang": {
        videoId: "lg5T0OZgjcY",
        start: 0,
        cues: ["Relax and hang", "Shoulders away from ears", "Grip strength + spine decompression"]
    },
    "Option A: 30-45 min Walk": {
        videoId: "fJ8yT5ss_rc",
        start: 0,
        cues: ["Easy pace", "Outdoors if possible", "Enjoy it"]
    },
    "Option B: Easy Bike Ride": {
        videoId: "fJ8yT5ss_rc",
        start: 0,
        cues: ["Light effort", "30-45 minutes", "Zone 2 heart rate"]
    },
    "Option C: Swimming": {
        videoId: "gh5mAtmeR3Y",
        start: 0,
        cues: ["Easy laps", "Great for joints", "Full body movement"]
    },
    "Option D: Yoga Class": {
        videoId: "v7AYKMP6rOE",
        start: 0,
        cues: ["Any style works", "Focus on breath", "Mobility + mindfulness"]
    },
    "Option E: Recreational Sports": {
        videoId: "MqKnXqwfcmU",
        start: 0,
        cues: ["Play for fun", "Not competition", "Move and enjoy"]
    },
    "Light Stretching": {
        videoId: "sTxC3J3gQEU",
        start: 0,
        cues: ["Hold 30+ seconds", "Breathe deeply", "No bouncing"]
    },
    "Brisk Walk or Light Jog": {
        videoId: "fJ8yT5ss_rc",
        start: 0,
        cues: ["Conversational pace", "Zone 2 heart rate", "Sustainable effort"]
    },
    "Cat-Cow Cooldown": {
        videoId: "kqnua4rHVVA",
        start: 0,
        cues: ["Slow and controlled", "Sync with breath", "Release tension"]
    },
    "Stretch: Hips & Shoulders": {
        videoId: "sTxC3J3gQEU",
        start: 0,
        cues: ["Hit tight areas", "Hold each stretch 30 sec", "Breathe and relax"]
    },
    "Arm Circles & Band Warm-Up": {
        videoId: "AWgFcXO01lk",
        start: 0,
        cues: ["Small to large circles", "Both directions", "Get blood flowing"]
    },
    "Band Pull-Aparts": {
        videoId: "AWgFcXO01lk",
        start: 0,
        cues: ["Arms straight at shoulder height", "Squeeze shoulder blades", "Control return"]
    }
};

// Workout Data - Research-Based Push/Pull/Legs Split for Optimal Muscle Group Targeting
// Each muscle group trained 2x/week for optimal hypertrophy and strength gains
const workouts = {
    0: { // Sunday - Mobility & Recovery
        name: "Mobility & Joint Health",
        type: "Mobility",
        duration: 35,
        intensity: "Low",
        exercises: [
            { name: "Foam Rolling - Full Body", detail: "8 minutes" },
            { name: "Cat-Cow Flow", detail: "2 min slow" },
            { name: "World's Greatest Stretch", detail: "5 each side" },
            { name: "90/90 Hip Stretch", detail: "2 min each side" },
            { name: "Thoracic Spine Rotations", detail: "10 each side" },
            { name: "Shoulder CARS (Circles)", detail: "5 slow each direction" },
            { name: "Deep Squat Hold", detail: "2 min total" },
            { name: "Gentle Walk", detail: "15 min" }
        ],
        notes: "Mobility is the foundation of longevity. This isn't optional - it's how you keep moving well for 60+ years. Don't rush these."
    },
    1: { // Monday - PUSH DAY 1 (Chest, Shoulders, Triceps)
        name: "Push Day - Chest & Shoulders Focus",
        type: "Strength",
        duration: 55,
        intensity: "Moderate-High",
        exercises: [
            { name: "Band Pull-Aparts", detail: "2 x 15 warm-up" },
            { name: "Bench Press", detail: "4 x 6-8 (main movement)" },
            { name: "Overhead Press", detail: "4 x 6-8 (shoulder strength)" },
            { name: "Incline Dumbbell Press", detail: "3 x 10 (upper chest)" },
            { name: "Dumbbell Lateral Raises", detail: "3 x 12 (side delts)" },
            { name: "Tricep Dips (or Pushdowns)", detail: "3 x 10-12" },
            { name: "Face Pulls", detail: "3 x 15 (rear delts - shoulder health!)" },
            { name: "Shoulder Stretch", detail: "60 sec each" }
        ],
        notes: "PUSH = Horizontal push (chest) + Vertical push (shoulders) + Triceps. Focus on progressive overload - aim to add weight or reps each week."
    },
    2: { // Tuesday - PULL DAY 1 (Back, Biceps, Rear Delts)
        name: "Pull Day - Back & Biceps Focus",
        type: "Strength",
        duration: 55,
        intensity: "Moderate-High",
        exercises: [
            { name: "Band Pull-Aparts", detail: "2 x 15 warm-up" },
            { name: "Bent Over Rows", detail: "4 x 6-8 (main horizontal pull)" },
            { name: "Lat Pulldowns (or Pull-Ups)", detail: "4 x 8-10 (vertical pull)" },
            { name: "Seated Cable Row (or DB Row)", detail: "3 x 10 (mid-back)" },
            { name: "Face Pulls", detail: "3 x 15 (rear delts - critical!)" },
            { name: "Bicep Curls / Tricep Pushdowns", detail: "3 x 12 (biceps)" },
            { name: "Dead Hang", detail: "3 x 20-30 sec (grip + decompression)" },
            { name: "Shoulder Stretch", detail: "60 sec each" }
        ],
        notes: "PULL = Horizontal pull (rows) + Vertical pull (pulldowns) + Biceps. Pull 2x for every 1 push to prevent shoulder issues. Face pulls are non-negotiable."
    },
    3: { // Wednesday - PUSH DAY 2 (Chest, Shoulders, Triceps - Variation)
        name: "Push Day - Shoulders & Triceps Focus",
        type: "Strength",
        duration: 50,
        intensity: "Moderate",
        exercises: [
            { name: "Arm Circles & Band Warm-Up", detail: "3 min" },
            { name: "Overhead Press", detail: "4 x 6-8 (main movement)" },
            { name: "Dumbbell Incline Press", detail: "3 x 10 (chest variation)" },
            { name: "Arnold Press", detail: "3 x 10 (shoulder mobility + strength)" },
            { name: "Dumbbell Lateral Raises", detail: "3 x 12 (side delts)" },
            { name: "Tricep Dips (or Pushdowns)", detail: "3 x 10-12" },
            { name: "Push-Ups (or Bench Press)", detail: "2 x max reps (finisher)" },
            { name: "Face Pulls", detail: "3 x 15 (rear delts)" }
        ],
        notes: "Second push day focuses more on shoulders. Arnold press improves shoulder mobility while building strength. Keep face pulls in every push day."
    },
    4: { // Thursday - LEGS DAY 1 (Quads, Hamstrings, Glutes, Calves) - MAIN LEG DAY
        name: "Legs Day - Lower Body Strength",
        type: "Strength",
        duration: 60,
        intensity: "Moderate-High",
        exercises: [
            { name: "Dynamic Warm-Up", detail: "5 min (leg swings, hip circles)" },
            { name: "Barbell Back Squat", detail: "4 x 6-8 (main quad movement)" },
            { name: "Romanian Deadlift", detail: "4 x 8-10 (hamstrings & glutes)" },
            { name: "Bulgarian Split Squats", detail: "3 x 10 each leg (unilateral strength)" },
            { name: "Leg Press", detail: "3 x 12 (quad volume)" },
            { name: "Nordic Hamstring Curls", detail: "3 x 8 (hamstring strength - injury prevention)" },
            { name: "Standing Calf Raises", detail: "4 x 12-15" },
            { name: "Hip Flexor Stretch", detail: "90 sec each side" }
        ],
        notes: "LEGS = Quads (squats) + Hamstrings (RDLs) + Glutes (hip hinge) + Calves. Strong legs = independence as you age. Full ROM over heavy weight."
    },
    5: { // Friday - PULL DAY 2 (Back, Biceps, Rear Delts - Variation)
        name: "Pull Day - Back Width & Thickness",
        type: "Strength",
        duration: 50,
        intensity: "Moderate",
        exercises: [
            { name: "Band Pull-Aparts", detail: "2 x 15 warm-up" },
            { name: "Weighted Pull-Ups", detail: "4 x 6-8 (or assisted/chins)" },
            { name: "Dumbbell Rows", detail: "4 x 10 each arm (unilateral)" },
            { name: "Lat Pulldowns (or Pull-Ups)", detail: "3 x 10 (width)" },
            { name: "Seated Cable Row (or DB Row)", detail: "3 x 10 (thickness)" },
            { name: "Face Pulls", detail: "3 x 15 (rear delts)" },
            { name: "Bicep Curls / Tricep Pushdowns", detail: "3 x 12" },
            { name: "Dead Hang", detail: "3 x 20-30 sec" }
        ],
        notes: "Second pull day emphasizes back width (lats) and thickness (mid-back). Unilateral rows improve imbalances. Grip strength = longevity predictor."
    },
    6: { // Saturday - LEGS DAY 2 (Quads, Hamstrings, Glutes - Variation + Core)
        name: "Legs Day - Functional Strength & Core",
        type: "Strength",
        duration: 55,
        intensity: "Moderate",
        exercises: [
            { name: "Hip Circles & Leg Swings", detail: "3 min warm-up" },
            { name: "Front Squats", detail: "4 x 6-8 (more upright, core engagement)" },
            { name: "Single-Leg RDL", detail: "3 x 8 each (balance + hamstrings)" },
            { name: "Walking Lunges", detail: "3 x 10 each leg (functional)" },
            { name: "Glute Bridge (weighted)", detail: "3 x 12 (glute activation)" },
            { name: "Step-Ups", detail: "3 x 10 each leg (single-leg strength)" },
            { name: "Plank Hold", detail: "3 x 45-60 sec (core stability)" },
            { name: "Hip Flexor Stretch", detail: "90 sec each side" }
        ],
        notes: "Second legs day includes more single-leg work (prevents falls) and functional movements. Front squats improve core strength and posture."
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

// App State - Initialize with defaults, will load from localStorage or Firestore
let state = {
    currentSection: 'dashboard',
    selectedDay: new Date().getDay(),
    streak: 0,
    lastCheckIn: null,
    completedWorkouts: {},
    completedMeals: {},
    notes: '',
    groceryChecked: [],
    workoutLogs: {} // Format: { "2024-01-14": { day: 0, exercises: { "Goblet Squat": { weight: 35, notes: "" }, ... } } }
};

// Exercises that should have weight tracking (strength movements)
const weightedExercises = [
    // Lower Body
    "Barbell Back Squat", "Front Squats", "Goblet Squat", "Romanian Deadlift", 
    "Walking Lunges", "Bulgarian Split Squats", "Leg Press", "Single-Leg RDL",
    "Glute Bridge (weighted)", "Glute Bridges", "Step-Ups", "Standing Calf Raises",
    "Nordic Hamstring Curls",
    // Upper Body Push
    "Bench Press", "Push-Ups (or Bench Press)", "Incline Dumbbell Press", "Dumbbell Incline Press",
    "Overhead Press", "Arnold Press", "Dumbbell Lateral Raises", "Tricep Dips (or Pushdowns)",
    "Face Pulls",
    // Upper Body Pull
    "Bent Over Rows", "Dumbbell Rows", "Seated Cable Row (or DB Row)", 
    "Lat Pulldowns (or Pull-Ups)", "Weighted Pull-Ups", "Chin-Ups (or Assisted)",
    "Bicep Curls / Tricep Pushdowns", "Bicep Curls",
    // Functional/Other
    "Goblet Squat to Press", "Push-Up to Row", "Turkish Get-Up", "Kettlebell Swings",
    "Farmer's Carry", "Power Cleans", "Push Press", "Dead Hang"
];

// Load state from localStorage (fallback when not signed in)
function loadLocalState() {
    state.streak = parseInt(localStorage.getItem('fitfuel_streak') || '0');
    state.lastCheckIn = localStorage.getItem('fitfuel_lastCheckIn');
    state.completedWorkouts = JSON.parse(localStorage.getItem('fitfuel_workouts') || '{}');
    state.completedMeals = JSON.parse(localStorage.getItem('fitfuel_meals') || '{}');
    state.notes = localStorage.getItem('fitfuel_notes') || '';
    state.groceryChecked = JSON.parse(localStorage.getItem('fitfuel_groceryChecked') || '[]');
    state.workoutLogs = JSON.parse(localStorage.getItem('fitfuel_workoutLogs') || '{}');
}

// Save state to localStorage
function saveLocalState() {
    localStorage.setItem('fitfuel_streak', state.streak);
    localStorage.setItem('fitfuel_lastCheckIn', state.lastCheckIn || '');
    localStorage.setItem('fitfuel_workouts', JSON.stringify(state.completedWorkouts));
    localStorage.setItem('fitfuel_meals', JSON.stringify(state.completedMeals));
    localStorage.setItem('fitfuel_notes', state.notes);
    localStorage.setItem('fitfuel_groceryChecked', JSON.stringify(state.groceryChecked));
    localStorage.setItem('fitfuel_workoutLogs', JSON.stringify(state.workoutLogs));
}

// Load state from Firestore (when signed in)
async function loadCloudState() {
    if (!currentUser) return;
    
    try {
        const doc = await db.collection('users').doc(currentUser.uid).get();
        if (doc.exists) {
            const data = doc.data();
            state.streak = data.streak || 0;
            state.lastCheckIn = data.lastCheckIn || null;
            state.completedWorkouts = data.completedWorkouts || {};
            state.completedMeals = data.completedMeals || {};
            state.notes = data.notes || '';
            state.groceryChecked = data.groceryChecked || [];
            state.workoutLogs = data.workoutLogs || {};
            
            // Update UI with loaded state
            refreshAllUI();
            console.log('✅ Data loaded from cloud');
        } else {
            // First time user - save current local state to cloud
            await saveCloudState();
        }
    } catch (error) {
        console.error('Error loading cloud state:', error);
    }
}

// Save state to Firestore
async function saveCloudState() {
    if (!currentUser) return;
    
    try {
        await db.collection('users').doc(currentUser.uid).set({
            streak: state.streak,
            lastCheckIn: state.lastCheckIn,
            completedWorkouts: state.completedWorkouts,
            completedMeals: state.completedMeals,
            notes: state.notes,
            groceryChecked: state.groceryChecked,
            workoutLogs: state.workoutLogs,
            lastUpdated: firebase.firestore.FieldValue.serverTimestamp()
        });
        console.log('✅ Data saved to cloud');
    } catch (error) {
        console.error('Error saving to cloud:', error);
    }
}

// Save state (to both local and cloud if signed in)
function saveState() {
    saveLocalState();
    if (currentUser) {
        saveCloudState();
    }
}

// Refresh all UI elements with current state
function refreshAllUI() {
    // Update streak display
    document.getElementById('streakCount').textContent = state.streak;
    document.getElementById('currentStreak').textContent = state.streak;
    
    // Update check-in button
    const today = new Date().toDateString();
    const checkInBtn = document.getElementById('checkInBtn');
    if (state.lastCheckIn === today) {
        checkInBtn.textContent = '✓ Checked In!';
        checkInBtn.classList.add('checked');
        checkInBtn.disabled = true;
    } else {
        checkInBtn.textContent = '✓ Check In Today';
        checkInBtn.classList.remove('checked');
        checkInBtn.disabled = false;
    }
    
    // Update progress
    updateProgressDisplay();
    
    // Update notes
    document.getElementById('progressNotes').value = state.notes;
    
    // Update grocery list
    updateGroceryDisplay();
    
    // Update stats
    document.getElementById('totalWorkouts').textContent = Object.keys(state.completedWorkouts).length;
    document.getElementById('totalMeals').textContent = Object.keys(state.completedMeals).length;
}

// Auth state listener
auth.onAuthStateChanged(async (user) => {
    currentUser = user;
    const signInBtn = document.getElementById('signInBtn');
    const userProfile = document.getElementById('userProfile');
    const userAvatar = document.getElementById('userAvatar');
    
    if (user) {
        // User is signed in
        signInBtn.style.display = 'none';
        userProfile.style.display = 'flex';
        userAvatar.src = user.photoURL || 'https://via.placeholder.com/36';
        
        // Load data from cloud
        await loadCloudState();
        
        console.log('👤 Signed in as:', user.displayName);
    } else {
        // User is signed out
        signInBtn.style.display = 'flex';
        userProfile.style.display = 'none';
        
        // Load data from localStorage
        loadLocalState();
        refreshAllUI();
        
        console.log('👤 Signed out - using local storage');
    }
});

// Sign in with Google
async function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    try {
        await auth.signInWithPopup(provider);
    } catch (error) {
        console.error('Sign in error:', error);
        alert('Sign in failed. Please try again.');
    }
}

// Sign out
async function signOut() {
    try {
        await auth.signOut();
    } catch (error) {
        console.error('Sign out error:', error);
    }
}

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
    initAuth();
    initNavigation();
    initDaySelectors();
    initDashboard();
    initProgress();
    initVideoModal();
    initGroceryList();
    updateWorkoutDisplay(state.selectedDay);
    updateMealDisplay(state.selectedDay);
});

// Initialize Auth Buttons
function initAuth() {
    const signInBtn = document.getElementById('signInBtn');
    const signOutBtn = document.getElementById('signOutBtn');
    
    if (signInBtn) {
        signInBtn.addEventListener('click', signInWithGoogle);
    }
    
    if (signOutBtn) {
        signOutBtn.addEventListener('click', signOut);
    }
}

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
            saveState();
            updateStreakDisplay();
            checkInBtn.textContent = '✓ Checked In!';
            checkInBtn.classList.add('checked');
            checkInBtn.disabled = true;
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

// Get date for selected day (this week's occurrence)
function getDateForDay(dayOfWeek) {
    const today = new Date();
    const currentDay = today.getDay();
    const diff = dayOfWeek - currentDay;
    
    // If selecting a day in the past, go to last week's occurrence
    // If selecting today or future, use this week
    const targetDate = new Date(today);
    targetDate.setDate(today.getDate() + diff);
    
    return targetDate.toISOString().split('T')[0];
}

// Workout Display
function updateWorkoutDisplay(day) {
    const workout = workouts[day];
    const selectedDate = getDateForDay(day);
    const selectedLog = state.workoutLogs[selectedDate] || { exercises: {} };
    const isToday = day === new Date().getDay();
    
    document.getElementById('workoutTitle').textContent = workout.name;
    document.getElementById('workoutDuration').textContent = `⏱️ ${workout.duration} min`;
    document.getElementById('workoutIntensity').textContent = `🔥 ${workout.intensity}`;
    
    const exerciseList = document.getElementById('exerciseList');
    exerciseList.innerHTML = workout.exercises.map((ex, i) => {
        const isWeighted = weightedExercises.includes(ex.name);
        const savedWeight = selectedLog.exercises[ex.name]?.weight || '';
        const lastWeight = getLastWeight(ex.name);
        const lastWeightDate = getLastWeightDate(ex.name);
        
        return `
            <div class="exercise-item ${isWeighted ? 'has-weight' : ''}">
                <span class="exercise-number">${i + 1}</span>
                <div class="exercise-info">
                    <div class="exercise-name">${ex.name}</div>
                    <div class="exercise-detail">${ex.detail}</div>
                    ${isWeighted && lastWeight ? `
                        <div class="last-weight-info">
                            <span class="last-weight-label">Last time:</span>
                            <span class="last-weight-value">${lastWeight} lbs</span>
                            ${lastWeightDate ? `<span class="last-weight-date">(${lastWeightDate})</span>` : ''}
                        </div>
                    ` : ''}
                </div>
                ${isWeighted ? `
                    <div class="weight-input-container">
                        <input type="number" 
                            class="weight-input" 
                            data-exercise="${ex.name}"
                            data-date="${selectedDate}"
                            placeholder="${lastWeight ? `Last: ${lastWeight}` : 'lbs'}" 
                            value="${savedWeight}"
                            min="0" 
                            step="5">
                        <span class="weight-label">lbs</span>
                        ${lastWeight && !savedWeight ? `
                            <button class="use-last-weight-btn" 
                                data-exercise="${ex.name}" 
                                data-weight="${lastWeight}"
                                title="Use last weight">
                                ↻
                            </button>
                        ` : ''}
                    </div>
                ` : ''}
                <button class="form-video-btn" data-exercise="${ex.name}" title="Watch form tutorial">
                    <span class="video-icon">▶</span>
                    <span class="video-text">Form</span>
                </button>
            </div>
        `;
    }).join('');
    
    // Add Complete Workout button for any day
    const workoutNotes = document.getElementById('workoutNotes');
    const isCompleted = selectedLog.completed;
    const dateDisplay = isToday ? 'today' : new Date(selectedDate).toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' });
    
    workoutNotes.innerHTML = `
        <strong>💡 Pro Tip:</strong> ${workout.notes}
        <div class="complete-workout-section">
            <button class="complete-workout-btn ${isCompleted ? 'completed' : ''}" id="completeWorkoutBtn" data-date="${selectedDate}" data-day="${day}">
                ${isCompleted ? '✓ Workout Completed!' : `✓ Complete Workout (${dateDisplay})`}
            </button>
            ${isCompleted && selectedLog.completedAt ? `<span class="completed-time">Completed ${new Date(selectedLog.completedAt).toLocaleString()}</span>` : ''}
        </div>
    `;
    
    // Add click handlers to form buttons
    document.querySelectorAll('.form-video-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const exerciseName = btn.dataset.exercise;
            openVideoModal(exerciseName);
        });
    });
    
    // Add weight input listeners
    document.querySelectorAll('.weight-input').forEach(input => {
        input.addEventListener('change', () => {
            saveWeightInput(input.dataset.exercise, input.value, input.dataset.date);
        });
        input.addEventListener('blur', () => {
            saveWeightInput(input.dataset.exercise, input.value, input.dataset.date);
        });
    });
    
    // Add "use last weight" button listeners
    document.querySelectorAll('.use-last-weight-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const exerciseName = btn.dataset.exercise;
            const weight = btn.dataset.weight;
            const date = btn.closest('.exercise-item').querySelector('.weight-input').dataset.date;
            const input = document.querySelector(`.weight-input[data-exercise="${exerciseName}"][data-date="${date}"]`);
            
            if (input) {
                input.value = weight;
                saveWeightInput(exerciseName, weight, date);
                btn.style.display = 'none'; // Hide button after use
            }
        });
    });
    
    // Add complete workout button listener
    const completeBtn = document.getElementById('completeWorkoutBtn');
    if (completeBtn) {
        completeBtn.addEventListener('click', () => {
            completeWorkout(completeBtn.dataset.date, parseInt(completeBtn.dataset.day));
        });
    }
}

// Get last recorded weight for an exercise
function getLastWeight(exerciseName) {
    const logs = Object.entries(state.workoutLogs)
        .filter(([date, log]) => log.exercises && log.exercises[exerciseName]?.weight)
        .sort((a, b) => new Date(b[0]) - new Date(a[0]));
    
    if (logs.length > 0) {
        return logs[0][1].exercises[exerciseName].weight;
    }
    return null;
}

// Get date of last recorded weight
function getLastWeightDate(exerciseName) {
    const logs = Object.entries(state.workoutLogs)
        .filter(([date, log]) => log.exercises && log.exercises[exerciseName]?.weight)
        .sort((a, b) => new Date(b[0]) - new Date(a[0]));
    
    if (logs.length > 0) {
        const date = logs[0][0];
        const dateObj = new Date(date);
        const today = new Date();
        const diffTime = today - dateObj;
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
        
        if (diffDays === 0) return 'Today';
        if (diffDays === 1) return 'Yesterday';
        if (diffDays < 7) return `${diffDays} days ago`;
        return dateObj.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    }
    return null;
}

// Save weight input
function saveWeightInput(exerciseName, weight, date) {
    if (!date) {
        date = new Date().toISOString().split('T')[0];
    }
    
    if (!state.workoutLogs[date]) {
        const dateObj = new Date(date);
        state.workoutLogs[date] = {
            day: dateObj.getDay(),
            exercises: {},
            completed: false
        };
    }
    
    if (!state.workoutLogs[date].exercises[exerciseName]) {
        state.workoutLogs[date].exercises[exerciseName] = {};
    }
    
    state.workoutLogs[date].exercises[exerciseName].weight = weight ? parseInt(weight) : null;
    saveState();
}

// Complete workout
function completeWorkout(date, dayOfWeek) {
    if (!date) {
        date = new Date().toISOString().split('T')[0];
    }
    if (dayOfWeek === undefined) {
        dayOfWeek = new Date().getDay();
    }
    
    if (!state.workoutLogs[date]) {
        state.workoutLogs[date] = {
            day: dayOfWeek,
            exercises: {},
            completed: false
        };
    }
    
    // Collect all weights for this date
    document.querySelectorAll(`.weight-input[data-date="${date}"]`).forEach(input => {
        const exerciseName = input.dataset.exercise;
        const weight = input.value;
        if (weight) {
            if (!state.workoutLogs[date].exercises[exerciseName]) {
                state.workoutLogs[date].exercises[exerciseName] = {};
            }
            state.workoutLogs[date].exercises[exerciseName].weight = parseInt(weight);
        }
    });
    
    state.workoutLogs[date].completed = true;
    state.workoutLogs[date].completedAt = new Date().toISOString();
    state.workoutLogs[date].workoutName = workouts[dayOfWeek].name;
    
    // Also mark in completedWorkouts for the progress tracker
    state.completedWorkouts[`${dayOfWeek}-workout`] = true;
    
    saveState();
    
    // Update button
    const btn = document.getElementById('completeWorkoutBtn');
    if (btn) {
        btn.textContent = '✓ Workout Completed!';
        btn.classList.add('completed');
    }
    
    // Show confirmation
    showWorkoutCompletedModal(date);
    
    // Update progress display
    updateProgressDisplay();
}

// Show workout completed confirmation
function showWorkoutCompletedModal(date) {
    if (!date) {
        date = new Date().toISOString().split('T')[0];
    }
    const log = state.workoutLogs[date];
    
    if (!log) return;
    
    // Count exercises with weights logged
    const weightsLogged = Object.values(log.exercises || {}).filter(e => e.weight).length;
    
    // Create and show a nice completion message
    const modal = document.createElement('div');
    modal.className = 'workout-complete-modal';
    modal.innerHTML = `
        <div class="complete-modal-content">
            <div class="complete-icon">💪</div>
            <h3>Workout Complete!</h3>
            <p>${log.workoutName}</p>
            <p class="weights-logged">${weightsLogged} exercises logged</p>
            <button class="close-complete-modal">Nice!</button>
        </div>
    `;
    document.body.appendChild(modal);
    
    // Auto-remove after click or 3 seconds
    const closeModal = () => {
        modal.classList.add('fade-out');
        setTimeout(() => modal.remove(), 300);
    };
    
    modal.querySelector('.close-complete-modal').addEventListener('click', closeModal);
    setTimeout(closeModal, 3000);
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
    updateGroceryDisplay();
    
    // Add click handlers
    document.querySelectorAll('.grocery-item').forEach(item => {
        item.addEventListener('click', () => {
            toggleGroceryItem(item);
        });
    });
    
    // Clear checked button
    document.getElementById('clearChecked').addEventListener('click', () => {
        state.groceryChecked = [];
        saveState();
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

// Update grocery list display
function updateGroceryDisplay() {
    const groceryListEl = document.getElementById('groceryList');
    const checkedItems = state.groceryChecked || [];
    
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
    
    // Re-attach click handlers after rebuilding
    document.querySelectorAll('.grocery-item').forEach(item => {
        item.addEventListener('click', () => {
            toggleGroceryItem(item);
        });
    });
    
    // Update totals
    document.getElementById('totalItems').textContent = totalItems;
    document.getElementById('estimatedCost').textContent = `$${calculateGroceryTotal()}`;
    updateGroceryCount();
}

function toggleGroceryItem(item) {
    const itemId = item.dataset.id;
    
    if (item.classList.contains('checked')) {
        item.classList.remove('checked');
        state.groceryChecked = state.groceryChecked.filter(id => id !== itemId);
    } else {
        item.classList.add('checked');
        state.groceryChecked.push(itemId);
    }
    
    saveState();
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
        saveState();
        
        // Show save confirmation
        const btn = document.getElementById('saveNotes');
        const originalText = btn.textContent;
        btn.textContent = '✓ Saved!';
        setTimeout(() => {
            btn.textContent = originalText;
        }, 2000);
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
    
    saveState();
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

