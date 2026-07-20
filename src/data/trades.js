// Age tiers: 'young' (5-8), 'mid' (9-12), 'teen' (13-17)
// Each trade has facts (array of short strings per tier) and one quiz question per tier.

export const AGE_TIERS = [
  { id: 'young', label: 'Ages 5-8', min: 5, max: 8 },
  { id: 'mid', label: 'Ages 9-12', min: 9, max: 12 },
  { id: 'teen', label: 'Ages 13-17', min: 13, max: 17 },
];

export function tierForAge(age) {
  const tier = AGE_TIERS.find(t => age >= t.min && age <= t.max);
  return tier ? tier.id : 'mid';
}

export const TRADES = [
  {
    id: 'electrician',
    name: 'Electrician',
    icon: '⚡',
    color: '#FFC857',
    tagline: 'Powers up homes and buildings',
    learnMore: { label: 'US Bureau of Labor Statistics: Electricians', url: 'https://www.bls.gov/ooh/construction-and-extraction/electricians.htm' },
    video: { type: 'youtube', id: 'qUghl4zbsBo' },
    facts: {
      young: [
        'Electricians make sure lights and outlets work safely.',
        'They use special tools that do not let electricity hurt them.',
        'A big flashlight-looking tool called a multimeter checks for power.',
      ],
      mid: [
        'Electricians install and repair wiring in homes, schools, and businesses.',
        'They read blueprints to know where wires and outlets should go.',
        'Safety gear like rubber gloves protects them from electric shock.',
      ],
      teen: [
        'Electricians typically complete a multi-year apprenticeship combining paid work with classroom training.',
        'They must follow strict electrical codes to keep buildings safe and legal.',
        'Specialties include residential wiring, industrial systems, and renewable energy installs like solar.',
      ],
    },
    quiz: {
      young: { q: 'What do electricians make sure works safely?', options: ['Lights and outlets', 'Pizza ovens', 'Bicycles'], answer: 0 },
      mid: { q: 'What do electricians read to know where wires go?', options: ['Recipes', 'Blueprints', 'Storybooks'], answer: 1 },
      teen: { q: 'What is the typical training path to become an electrician?', options: ['A weekend course', 'A multi-year apprenticeship', 'No training needed'], answer: 1 },
    },
  },
  {
    id: 'chef',
    name: 'Chef',
    icon: '🍳',
    color: '#FF6B35',
    tagline: 'Turns ingredients into amazing meals',
    learnMore: { label: 'US Bureau of Labor Statistics: Chefs and Head Cooks', url: 'https://www.bls.gov/ooh/food-preparation-and-serving/chefs-and-head-cooks.htm' },
    video: { type: 'external', url: 'https://www.careeronestop.org/Videos/careeronestop-videos.aspx?videocode=35101100', source: 'CareerOneStop (U.S. Department of Labor)' },
    facts: {
      young: [
        'Chefs cook yummy food for lots of people.',
        'They plan menus, which are lists of foods to make.',
        'Chefs wash their hands a lot to keep food safe.',
      ],
      mid: [
        'Chefs plan menus, prepare ingredients, and lead a kitchen team.',
        'They learn knife skills, cooking methods, and food safety rules.',
        'Head chefs create new recipes and manage the whole kitchen.',
      ],
      teen: [
        'Professional chefs often train at culinary school or rise through kitchen ranks starting as a line cook.',
        'Kitchens use a hierarchy called the "brigade system," from commis to executive chef.',
        'Food cost control and menu pricing are a big part of running a kitchen profitably.',
      ],
    },
    quiz: {
      young: { q: 'Why do chefs wash their hands a lot?', options: ['To keep food safe', 'Because they like water', 'To stay cool'], answer: 0 },
      mid: { q: 'What is a list of foods a chef plans called?', options: ['A recipe box', 'A menu', 'A grocery list'], answer: 1 },
      teen: { q: 'What is the kitchen ranking system called?', options: ['The brigade system', 'The chef ladder', 'The kitchen chain'], answer: 0 },
    },
  },
  {
    id: 'carpenter',
    name: 'Carpenter',
    icon: '🪚',
    color: '#8B5E34',
    tagline: 'Builds things out of wood',
    learnMore: { label: 'US Bureau of Labor Statistics: Carpenters', url: 'https://www.bls.gov/ooh/construction-and-extraction/carpenters.htm' },
    video: { type: 'external', url: 'https://www.careeronestop.org/Videos/careeronestop-videos.aspx?videocode=47203100', source: 'CareerOneStop (U.S. Department of Labor)' },
    facts: {
      young: [
        'Carpenters build things out of wood, like chairs and houses.',
        'They use hammers, saws, and measuring tapes.',
        'Carpenters measure twice before they cut, so they don\'t make mistakes.',
      ],
      mid: [
        'Carpenters build and repair structures like houses, decks, and furniture.',
        'They read blueprints and use power tools like saws and drills.',
        'Precision matters — even small measuring errors can cause big problems.',
      ],
      teen: [
        'Carpentry apprenticeships usually take 3-4 years, mixing paid work with technical school.',
        'Specialties include framing, finish carpentry, and cabinetmaking.',
        'Carpenters must understand load-bearing structures to build safely.',
      ],
    },
    quiz: {
      young: { q: 'What do carpenters build things out of?', options: ['Wood', 'Ice', 'Clouds'], answer: 0 },
      mid: { q: 'What do carpenters read to know how to build something?', options: ['Blueprints', 'Comic books', 'Weather reports'], answer: 0 },
      teen: { q: 'What must carpenters understand to build safely?', options: ['Load-bearing structures', 'Stock markets', 'Weather patterns'], answer: 0 },
    },
  },
  {
    id: 'plumber',
    name: 'Plumber',
    icon: '🔧',
    color: '#3B6E8F',
    tagline: 'Keeps water flowing where it should',
    learnMore: { label: 'US Bureau of Labor Statistics: Plumbers, Pipefitters, and Steamfitters', url: 'https://www.bls.gov/ooh/construction-and-extraction/plumbers-pipefitters-and-steamfitters.htm' },
    video: { type: 'external', url: 'https://www.careeronestop.org/Videos/careeronestop-videos.aspx?videocode=47215200', source: 'CareerOneStop (U.S. Department of Labor)' },
    facts: {
      young: [
        'Plumbers fix pipes so water goes where it should.',
        'They fix leaky faucets and clogged sinks.',
        'Plumbers use wrenches to twist pipes tight.',
      ],
      mid: [
        'Plumbers install and repair pipes for water, gas, and drainage systems.',
        'They diagnose leaks, clogs, and broken fixtures.',
        'Plumbers must understand water pressure and pipe materials.',
      ],
      teen: [
        'Plumbing apprenticeships combine hands-on work with coursework in hydraulics and codes.',
        'Plumbers must follow local plumbing codes to prevent contamination and leaks.',
        'Some plumbers specialize in gas lines, others in residential or commercial systems.',
      ],
    },
    quiz: {
      young: { q: 'What tool do plumbers use to twist pipes tight?', options: ['A wrench', 'A paintbrush', 'A spoon'], answer: 0 },
      mid: { q: 'What do plumbers need to understand about water?', options: ['Water pressure', 'Water color', 'Water taste'], answer: 0 },
      teen: { q: 'Why must plumbers follow local codes?', options: ['To prevent contamination and leaks', 'To win awards', 'It is optional'], answer: 0 },
    },
  },
  {
    id: 'mechanic',
    name: 'Mechanic',
    icon: '🔩',
    color: '#4B4B4B',
    tagline: 'Fixes cars and engines',
    learnMore: { label: 'US Bureau of Labor Statistics: Automotive Service Technicians and Mechanics', url: 'https://www.bls.gov/ooh/installation-maintenance-and-repair/automotive-service-technicians-and-mechanics.htm' },
    video: { type: 'external', url: 'https://www.careeronestop.org/Videos/careeronestop-videos.aspx?videocode=49302300', source: 'CareerOneStop (U.S. Department of Labor)' },
    facts: {
      young: [
        'Mechanics fix cars when something breaks.',
        'They listen for weird noises to find problems.',
        'Mechanics use special tools to open up engines.',
      ],
      mid: [
        'Mechanics diagnose and repair engines, brakes, and other car systems.',
        'They use diagnostic computers to find electronic problems in modern cars.',
        'Regular maintenance like oil changes keeps cars running well.',
      ],
      teen: [
        'Many mechanics earn certifications like ASE (Automotive Service Excellence) to prove expertise.',
        'Modern vehicles rely heavily on computer systems, so mechanics need strong tech skills.',
        'Specialties include engines, transmissions, electrical systems, and hybrid/electric vehicles.',
      ],
    },
    quiz: {
      young: { q: 'What do mechanics listen for to find problems?', options: ['Weird noises', 'Music', 'Silence'], answer: 0 },
      mid: { q: 'What do mechanics use to find electronic problems?', options: ['Diagnostic computers', 'Telescopes', 'Magnifying glasses'], answer: 0 },
      teen: { q: 'What certification do many mechanics earn?', options: ['ASE', 'MBA', 'CPA'], answer: 0 },
    },
  },
  {
    id: 'farmer',
    name: 'Farmer',
    icon: '🌾',
    color: '#6E8B3D',
    tagline: 'Grows the food we eat',
    learnMore: { label: 'US Bureau of Labor Statistics: Farmers, Ranchers, and Other Agricultural Managers', url: 'https://www.bls.gov/ooh/management/farmers-ranchers-and-other-agricultural-managers.htm' },
    video: { type: 'external', url: 'https://www.careeronestop.org/Videos/careeronestop-videos.aspx?videocode=11901300', source: 'CareerOneStop (U.S. Department of Labor)' },
    facts: {
      young: [
        'Farmers grow fruits, vegetables, and grains.',
        'Some farmers raise animals like cows and chickens.',
        'Farmers watch the weather to know when to plant.',
      ],
      mid: [
        'Farmers manage soil, crops, irrigation, and sometimes livestock.',
        'They use tractors and other machines to plant and harvest.',
        'Crop rotation helps keep soil healthy year after year.',
      ],
      teen: [
        'Modern farming increasingly uses data and GPS-guided equipment, called precision agriculture.',
        'Farmers must manage budgets, weather risk, and market prices for crops.',
        'Sustainable practices like cover cropping help protect long-term soil health.',
      ],
    },
    quiz: {
      young: { q: 'What do farmers watch to know when to plant?', options: ['The weather', 'TV shows', 'Their shoes'], answer: 0 },
      mid: { q: 'What helps keep soil healthy year after year?', options: ['Crop rotation', 'Painting the field', 'Loud music'], answer: 0 },
      teen: { q: 'What is GPS-guided farming equipment called?', options: ['Precision agriculture', 'Robo-farming', 'Auto-harvesting'], answer: 0 },
    },
  },
  {
    id: 'nurse',
    name: 'Nurse',
    icon: '🩺',
    color: '#D6536D',
    tagline: 'Helps people feel better',
    learnMore: { label: 'US Bureau of Labor Statistics: Registered Nurses', url: 'https://www.bls.gov/ooh/healthcare/registered-nurses.htm' },
    video: { type: 'external', url: 'https://www.careeronestop.org/Videos/careeronestop-videos.aspx?videocode=29114100', source: 'CareerOneStop (U.S. Department of Labor)' },
    facts: {
      young: [
        'Nurses help take care of people who are sick or hurt.',
        'They check things like your temperature and heartbeat.',
        'Nurses are kind and gentle when they help patients.',
      ],
      mid: [
        'Nurses monitor patients, give medicine, and assist doctors.',
        'They work in hospitals, clinics, schools, and homes.',
        'Nurses need to know a lot about the human body to do their job.',
      ],
      teen: [
        'Registered nurses typically need a nursing degree and must pass a licensing exam (NCLEX in the US).',
        'Nursing has many specialties: pediatrics, ER, surgery, mental health, and more.',
        'Nurses often work in shifts, since patients need care around the clock.',
      ],
    },
    quiz: {
      young: { q: 'What do nurses check on patients?', options: ['Temperature and heartbeat', 'Their homework', 'Their favorite color'], answer: 0 },
      mid: { q: 'Where do nurses work?', options: ['Only in hospitals', 'Hospitals, clinics, schools, and homes', 'Only at home'], answer: 1 },
      teen: { q: 'What exam must registered nurses pass in the US?', options: ['NCLEX', 'SAT', 'GRE'], answer: 0 },
    },
  },
  {
    id: 'firefighter',
    name: 'Firefighter',
    icon: '🚒',
    color: '#C1272D',
    tagline: 'Keeps people safe from fire',
    learnMore: { label: 'US Bureau of Labor Statistics: Firefighters', url: 'https://www.bls.gov/ooh/protective-service/firefighters.htm' },
    video: { type: 'youtube', id: 'HZSPNU_0VvM' },
    facts: {
      young: [
        'Firefighters put out fires to keep everyone safe.',
        'They wear special suits that protect them from heat.',
        'Firefighters also help people during emergencies, not just fires.',
      ],
      mid: [
        'Firefighters respond to fires, accidents, and medical emergencies.',
        'They train hard to stay strong and ready for danger.',
        'Firefighters check buildings to make sure they are fire-safe.',
      ],
      teen: [
        'Firefighters usually complete a fire academy and often get EMT or paramedic certification.',
        'Physical fitness tests are a regular requirement throughout a firefighting career.',
        'Firefighters also work in fire prevention, inspecting buildings and educating the public.',
      ],
    },
    quiz: {
      young: { q: 'What do firefighters wear to protect from heat?', options: ['Special suits', 'Swimsuits', 'Raincoats'], answer: 0 },
      mid: { q: 'Besides fires, what else do firefighters respond to?', options: ['Medical emergencies', 'Birthday parties', 'School exams'], answer: 0 },
      teen: { q: 'What certification do many firefighters also get?', options: ['EMT/paramedic', 'CPA', 'Real estate license'], answer: 0 },
    },
  },
  {
    id: 'artist',
    name: 'Artist & Designer',
    icon: '🎨',
    color: '#7A4CA0',
    tagline: 'Creates things people love to look at',
    learnMore: { label: 'US Bureau of Labor Statistics: Craft and Fine Artists', url: 'https://www.bls.gov/ooh/arts-and-design/craft-and-fine-artists.htm' },
    video: { type: 'external', url: 'https://www.careeronestop.org/Videos/careeronestop-videos.aspx?videocode=27101300', source: 'CareerOneStop (U.S. Department of Labor)' },
    facts: {
      young: [
        'Artists make paintings, drawings, and sculptures.',
        'Designers make things look good, like posters and toys.',
        'Artists use color, shapes, and lines to tell a story.',
      ],
      mid: [
        'Artists and designers work in many fields: illustration, graphic design, animation, fashion.',
        'They sketch ideas, get feedback, and refine their work.',
        'Digital tools like tablets and design software are common in modern art careers.',
      ],
      teen: [
        'Many designers build a portfolio to show potential clients or employers their skills.',
        'Careers range from freelance illustration to UX/UI design at tech companies.',
        'Understanding client needs and deadlines is as important as artistic skill.',
      ],
    },
    quiz: {
      young: { q: 'What do artists use to tell a story?', options: ['Color, shapes, and lines', 'Only numbers', 'Only words'], answer: 0 },
      mid: { q: 'What tools do modern artists often use?', options: ['Tablets and design software', 'Only crayons', 'Only clay'], answer: 0 },
      teen: { q: 'What do designers build to show their skills?', options: ['A portfolio', 'A resume only', 'A diploma'], answer: 0 },
    },
  },
  {
    id: 'programmer',
    name: 'Software Developer',
    icon: '💻',
    color: '#2E86AB',
    tagline: 'Builds the apps and games we use',
    learnMore: { label: 'US Bureau of Labor Statistics: Software Developers', url: 'https://www.bls.gov/ooh/computer-and-information-technology/software-developers.htm' },
    video: { type: 'external', url: 'https://www.careeronestop.org/Videos/careeronestop-videos.aspx?videocode=15125200', source: 'CareerOneStop (U.S. Department of Labor)' },
    facts: {
      young: [
        'Programmers write instructions that tell computers what to do.',
        'Apps and games are made by programmers.',
        'Programmers use special typed languages, like giving a computer a recipe.',
      ],
      mid: [
        'Programmers write code in languages like Python or JavaScript to build software.',
        'They test their programs to find and fix mistakes, called bugs.',
        'Teams of programmers often work together on big projects.',
      ],
      teen: [
        'Software developers often specialize: web, mobile, games, data, or systems programming.',
        'Version control tools like Git help teams track and merge changes to code.',
        'Many developers are self-taught or learn through coding bootcamps, not just college degrees.',
      ],
    },
    quiz: {
      young: { q: 'What do programmers write to tell computers what to do?', options: ['Instructions (code)', 'Songs', 'Recipes for food'], answer: 0 },
      mid: { q: 'What is a mistake in a program called?', options: ['A bug', 'A feature', 'A glitch fruit'], answer: 0 },
      teen: { q: 'What tool helps teams track changes to code?', options: ['Git (version control)', 'A spreadsheet', 'A calendar'], answer: 0 },
    },
  },
  {
    id: 'pastor',
    name: 'Bible Studies',
    icon: '📖',
    color: '#6B4C9A',
    tagline: 'Shares stories of faith, hope, and kindness',
    learnMore: { label: 'O*NET OnLine (US Dept. of Labor): Clergy', url: 'https://www.onetonline.org/link/summary/21-2011.00' },
    video: { type: 'external', url: 'https://www.careeronestop.org/Videos/careeronestop-videos.aspx?videocode=21201100', source: 'CareerOneStop (U.S. Department of Labor)' },
    facts: {
      young: [
        'A pastor leads a church and helps people learn about God and the Bible.',
        'One Bible story tells of a man who stopped to help a hurt stranger on the road, even though he was busy — that story teaches us to be kind to everyone.',
        'Pastors often teach that being gentle, honest, and helpful makes the people around you feel loved.',
      ],
      mid: [
        'Pastors lead worship services, teach Bible lessons, and support their church community through good times and hard times.',
        'In the story of David and Goliath, a young shepherd boy faced a giant with courage and faith instead of fear — a story often used to teach bravery.',
        'A common Christian teaching, sometimes called the Golden Rule, is to treat others the way you would want to be treated.',
      ],
      teen: [
        'Becoming a pastor usually involves years of study, often a college degree followed by seminary (graduate-level religious training).',
        'In the story of the prodigal son, a father forgives his son who made poor choices and welcomes him home — a story often used to teach forgiveness and grace.',
        'Pastors often counsel people through grief, big life decisions, and questions about purpose, in addition to leading services.',
      ],
    },
    quiz: {
      young: { q: 'What does the story of the kind stranger on the road teach?', options: ['Be kind to everyone', 'Always run fast', 'Never talk to strangers'], answer: 0 },
      mid: { q: 'What did the young shepherd boy face with courage and faith?', options: ['A giant', 'A storm', 'A dragon'], answer: 0 },
      teen: { q: 'What does a pastor usually complete after college to prepare for ministry?', options: ['Seminary', 'Medical school', 'Law school'], answer: 0 },
    },
  },
  {
    id: 'ai',
    name: 'AI & Robotics',
    icon: '🤖',
    color: '#00A99D',
    tagline: 'Teaches computers to learn and solve problems',
    learnMore: { label: 'US Bureau of Labor Statistics: Computer and Information Research Scientists', url: 'https://www.bls.gov/ooh/computer-and-information-technology/computer-and-information-research-scientists.htm' },
    video: { type: 'external', url: 'https://www.careeronestop.org/Videos/careeronestop-videos.aspx?videocode=15122100', source: 'CareerOneStop (U.S. Department of Labor)' },
    facts: {
      young: [
        'AI stands for "artificial intelligence" — it means teaching a computer to do things that normally need a person, like recognizing a picture of a cat.',
        'People who work with AI show the computer thousands of examples, the same way you learn what a dog looks like by seeing lots of dogs.',
        'AI helps your phone understand your voice, helps games react to you, and helps robots move around.',
      ],
      mid: [
        'AI researchers build "algorithms" — step-by-step instructions — that let computers find patterns in huge amounts of data.',
        'This process of a computer improving at a task by studying examples is called "machine learning."',
        'AI is already part of everyday life: voice assistants, movie recommendations, and self-driving car features all use it.',
      ],
      teen: [
        'Most computer and information research scientists — the people who invent new AI techniques — have a master\'s degree in computer science or a related field.',
        'A key building block of modern AI is the "neural network," a system loosely inspired by how neurons connect in a brain, used to recognize patterns in data.',
        'Because AI systems learn from data, researchers also have to watch for bias — if the examples they train on are unfair or unbalanced, the AI can make unfair decisions too.',
      ],
    },
    quiz: {
      young: { q: 'What does AI stand for?', options: ['Artificial intelligence', 'Automatic ice cream', 'Airplane instructions'], answer: 0 },
      mid: { q: 'What is it called when a computer improves at a task by studying examples?', options: ['Machine learning', 'Computer cooking', 'Data napping'], answer: 0 },
      teen: { q: 'What do AI researchers have to watch out for when training on data?', options: ['Bias in the examples', 'Running out of ink', 'Too much sunlight'], answer: 0 },
    },
  },
];
