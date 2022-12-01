var start_prompt1 = "Correct! You'll now be asked similar questions about various villages. We'll only show you villages that successfully assembled machines, and we're interested in seeing responsible you think each gear used was for the success.";

var start_prompt2 = "Great! To speed up the experiment, for the rest of the villages, you'll only see the final scene showing all the gears, with the three that were used in the machine outlined in red.";

var example_trial_info = [
    {
        "trial": "E1",
        "prompt1": "Imagine a land with many villages that manufacture items using a special machine. The machine is made up of one yellow, one green, and one blue gear.",
        "slide1": "trials/trialE1-1.png",
        "prompt2": "Every village has the gears necessary to assemble the machine. Some villages have the same number of each type, but other villages have more of one type and less of another. For instance, the village Aramoor has 3 yellow gears, 2 green gears, and 3 blue gears.",
        "slide2": "trials/trialE1-2.png",
        "prompt3": "Whenever a village needs to manufacture an item, it must find gears to assemble the machine. The gears are very brittle, so at any given moment many of them are broken and can't be used.",
        "slide3": "trials/trialE1-3.png",
        "prompt4": "Aramoor was unable to find a working green gear so unfortunately it failed to assemble the machine. The usable gears are outlined in red.",
        "slide4": "trials/trialE1-4.png"
    },
    {
        "trial": "E2",
        "prompt2": "As another example, the village Skystead has 2 yellow gears, 4 green gears, and 2 blue gears.",
        "slide2": "trials/trialE2-2.png",
        "prompt4": "Skystead was able to find one working gear of each type (outlined in red), so here assembling the machine was a success! <br><br> In this experiment, we'll show you scenes like this depicting different villages that successfully assembled machines. We're interested in seeing how responsible you think each gear used was for the success.",
        "slide4": "trials/trialE2-4.png",
        "prompt5": "How responsible was each gear used here (outlined in red) for the success?",
        "slide5": "trials/trialE2-5.png"
    }
];

var full_trial_info = [
    {
        "trial": "1",
        "prompt2": "The village Llyn has 3 yellow gears, 2 green gears, and 1 blue gear.",
        "slide2": "trials/trial1-2.png",
        "prompt4": "Llyn was able to find one working gear of each type, so it successfully assembled the machine.",
        "slide4": "trials/trial1-4.png",
        "prompt5": "How responsible was each gear used here (outlined in red) for the success?",
        "slide5": "trials/trial1-5.png"
    },
    {
        "trial": "2",
        "prompt2": "The village Frostford has 3 yellow gears, 2 green gears, and 4 blue gears.",
        "slide2": "trials/trial2-2.png",
        "prompt4": "Frostford was able to find one working gear of each type, so it successfully assembled the machine.",
        "slide4": "trials/trial2-4.png",
        "prompt5": "How responsible was each gear used here (outlined in red) for the success?",
        "slide5": "trials/trial2-5.png"
    }
];

var condensed_trial_info = [
    {
        "trial": "3",
        "prompt5": "Coalfell has 1 yellow gear, 1 green gear, and 2 blue gears. <br><br> How responsible was each gear used here (outlined in red) for the success?",
        "slide5": "trials/trial3-5.png"
    },
    {
        "trial": "4",
        "prompt5": "Romsey has 1 yellow gear, 1 green gear, and 3 blue gears. <br><br> How responsible was each gear used here (outlined in red) for the success?",
        "slide5": "trials/trial4-5.png"
    },
    {
        "trial": "5",
        "prompt5": "Islesbury has 1 yellow gear, 4 green gears, and 1 blue gear. <br><br> How responsible was each gear used here (outlined in red) for the success?",
        "slide5": "trials/trial5-5.png"
    },
    {
        "trial": "6",
        "prompt5": "Airedale has 2 yellow gears, 1 green gear, and 2 blue gears. <br><br> How responsible was each gear used here (outlined in red) for the success?",
        "slide5": "trials/trial6-5.png"
    },
    {
        "trial": "7",
        "prompt5": "Martslock has 3 yellow gears, 1 green gear, and 2 blue gears. <br><br> How responsible was each gear used here (outlined in red) for the success?",
        "slide5": "trials/trial7-5.png"
    },
    {
        "trial": "8",
        "prompt5": "Doncaster has 1 yellow gear, 4 green gears, and 2 blue gears. <br><br> How responsible was each gear used here (outlined in red) for the success?",
        "slide5": "trials/trial8-5.png"
    },
    {
        "trial": "9",
        "prompt5": "Silverkeep has 1 yellow gear, 3 green gears, and 3 blue gears. <br><br> How responsible was each gear used here (outlined in red) for the success?",
        "slide5": "trials/trial9-5.png"
    },
    {
        "trial": "10",
        "prompt5": "Elryne has 1 yellow gear, 3 green gears, and 4 blue gears. <br><br> How responsible was each gear used here (outlined in red) for the success?",
        "slide5": "trials/trial10-5.png"
    },
    {
        "trial": "11",
        "prompt5": "Wimborne has 4 yellow gears, 1 green gear, and 4 blue gears. <br><br> How responsible was each gear used here (outlined in red) for the success?",
        "slide5": "trials/trial11-5.png"
    },
    {
        "trial": "12",
        "prompt5": "Timeston has 2 yellow gears, 2 green gears, and 2 blue gears. <br><br> How responsible was each gear used here (outlined in red) for the success?",
        "slide5": "trials/trial12-5.png"
    },
    {
        "trial": "13",
        "prompt5": "Bellmoral has 3 yellow gears, 2 green gears, and 2 blue gears. <br><br> How responsible was each gear used here (outlined in red) for the success?",
        "slide5": "trials/trial13-5.png"
    },
    {
        "trial": "14",
        "prompt5": "Roselake has 2 yellow gears, 2 green gears, and 4 blue gears. <br><br> How responsible was each gear used here (outlined in red) for the success?",
        "slide5": "trials/trial14-5.png"
    },
    {
        "trial": "15",
        "prompt5": "Everton has 2 yellow gears, 3 green gears, and 3 blue gears. <br><br> How responsible was each gear used here (outlined in red) for the success?",
        "slide5": "trials/trial15-5.png"
    },
    {
        "trial": "16",
        "prompt5": "Blencalgo has 3 yellow gears, 4 green gears, and 2 blue gears. <br><br> How responsible was each gear used here (outlined in red) for the success?",
        "slide5": "trials/trial16-5.png"
    },
    {
        "trial": "17",
        "prompt5": "Merton has 2 yellow gears, 4 green gears, and 4 blue gears. <br><br> How responsible was each gear used here (outlined in red) for the success?",
        "slide5": "trials/trial17-5.png"
    },
    {
        "trial": "18",
        "prompt5": "Pernrith has 3 yellow gears, 3 green gears, and 3 blue gears. <br><br> How responsible was each gear used here (outlined in red) for the success?",
        "slide5": "trials/trial18-5.png"
    },
    {
        "trial": "19",
        "prompt5": "Sherfield has 3 yellow gears, 4 green gears, and 3 blue gears. <br><br> How responsible was each gear used here (outlined in red) for the success?",
        "slide5": "trials/trial19-5.png"
    },
    {
        "trial": "20",
        "prompt5": "Beckton has 4 yellow gears, 4 green gears, and 3 blue gears. <br><br> How responsible was each gear used here (outlined in red) for the success?",
        "slide5": "trials/trial20-5.png"
    },
    {
        "trial": "21",
        "prompt5": "Ayrith has 4 yellow gears, 4 green gears, and 4 blue gears. <br><br> How responsible was each gear used here (outlined in red) for the success?",
        "slide5": "trials/trial21-5.png"
    },
    {
        "trial": "X1",
        "prompt5": "Damerel has 1 yellow gear, 1 green gear, and 1 blue gear. <br><br> How responsible was each gear used here (outlined in red) for the success?",
        "slide5": "trials/trialX1-5.png"
    }
];

var all_images = [
    "trials/trial20-5.png",
    "trials/trial3-5.png",
    "trials/trial1-5.png",
    "trials/trial1-4.png",
    "trials/trial5-5.png",
    "trials/trial19-5.png",
    "trials/trial7-5.png",
    "trials/trial1-2.png",
    "trials/trialX1-5.png",
    "trials/trial2-4.png",
    "trials/trial2-5.png",
    "trials/trial21-5.png",
    "trials/trial18-5.png",
    "trials/trial6-5.png",
    "trials/trial2-2.png",
    "trials/trial4-5.png",
    "trials/trial8-5.png",
    "trials/trial16-5.png",
    "trials/trialE1-1.png",
    "trials/trialE1-3.png",
    "trials/trial14-5.png",
    "trials/trialE1-2.png",
    "trials/trial10-5.png",
    "trials/trial12-5.png",
    "trials/trialE1-4.png",
    "trials/trial15-5.png",
    "trials/trialE2-2.png",
    "trials/trial9-5.png",
    "trials/trial17-5.png",
    "trials/trial13-5.png",
    "trials/trial11-5.png",
    "trials/trialE2-4.png",
    "trials/trialE2-5.png"
];