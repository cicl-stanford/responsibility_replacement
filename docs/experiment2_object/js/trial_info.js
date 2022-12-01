var start_prompt1 = "Correct! You'll now be asked similar questions about various villages. We'll only show you villages that successfully assembled machines, and we're interested in seeing responsible you think each gear used was for the success.";

var start_prompt2 = "Great! To speed up the experiment, for the rest of the villages, you'll only see the final scene showing all the gears, with the three that were used in the machine outlined in black. <br> <br> Remember that every gear can possibly be broken, and the bar inside each one indicates whether it is generally <span style=\"color:red\"><b> more brittle </b></span> (more likely to be broken) or <span style=\"color:green\"><b> less brittle </b></span> (less likely to be broken).";

var example_trial_info = [
    {
        "trial": "E1",
        "prompt1": "Imagine a land with many villages that manufacture items using a special machine. The machine is made up of one yellow, one green, and one blue gear.",
        "slide1": "trials/trialE1-1.png",
        "prompt2": "Every village has the gears necessary to assemble the machine. Some villages have the same number of each type, but other villages have more of one type and less of another. For instance, the village Aramoor has 3 yellow gears, 2 green gears, and 3 blue gears.",
        "slide2": "trials/trialE1-2.png",
        "prompt3": "Whenever a village needs to manufacture an item, it must find gears to assemble the machine. The gears are very brittle, so at any given moment many of them are broken and can't be used.",
        "slide3": "trials/trialE1-3.png",
        "prompt4": "Some gears are generally more brittle than others. This is indicated by a bar on each gear: a high red bar means <span style=\"color:red\"><b>more brittle</b></span> and a low green bar means <span style=\"color:green\"><b> less brittle</b></span>. Those that are more brittle (such as the yellow gear) are more likely to be broken compared to those that are less brittle (such as the other yellow one or the blue one).",
        "slide4": "trials/trialE1-4.png",
        "prompt5": "There is a small chance that less brittle gears still turn out to be broken, or that more brittle gears are actually working. Here, Aramoor was unable to find a working green gear so unfortunately it failed to assemble the machine. The usable gears are outlined in black.",
        "slide5": "trials/trialE1-5.png"
    },
    {
        "trial": "E2",
        "prompt2": "As another example, the village Skystead has 2 yellow gears, 2 green gears, and 4 blue gears.",
        "slide2": "trials/trialE2-2.png",
        "prompt4": "Shown on some gears is an indicator of whether that gear is generally <span style=\"color:red\"><b> more brittle</b></span> or <span style=\"color:green\"><b> less brittle</b></span>.",
        "slide4": "trials/trialE2-4.png",
        "prompt5": "Skystead was able to find one working gear of each type (outlined in black), so here assembling the machine was a success! <br><br> In this experiment, we'll show you scenes like this depicting different villages that successfully assembled machines. We're interested in seeing how responsible you think each gear used was for the success.",
        "slide5": "trials/trialE2-5.png",
        "prompt6": "How responsible was each gear used here (outlined in black) for the success?",
        "slide6": "trials/trialE2-6.png"
    }
];

var full_trial_info = [
    {
        "trial": "1",
        "prompt2": "The village Llyn has 3 yellow gears, 1 green gear, and 2 blue gears.",
        "slide2": "trials/trial1-2.png",
        "prompt5": "Shown on some gears is an indicator of whether that gear is generally <span style=\"color:red\"><b> more brittle</b></span> or <span style=\"color:green\"><b> less brittle</b></span>. Llyn was able to find one working gear of each type, so it successfully assembled the machine.",
        "slide5": "trials/trial1-5.png",
        "prompt6": "How responsible was each gear used here (outlined in black) for the success?",
        "slide6": "trials/trial1-6.png"
    },
    {
        "trial": "2",
        "prompt2": "The village Frostford has 3 yellow gears, 1 green gear, and 3 blue gears.",
        "slide2": "trials/trial2-2.png",
        "prompt5": "Shown on some gears is an indicator of whether that gear is generally <span style=\"color:red\"><b> more brittle</b></span> or <span style=\"color:green\"><b> less brittle</b></span>. Frostford was able to find one working gear of each type, so it successfully assembled the machine.",
        "slide5": "trials/trial2-5.png",
        "prompt6": "How responsible was each gear used here (outlined in black) for the success?",
        "slide6": "trials/trial2-6.png"
    }
];

var condensed_trial_info = [
    {
        "trial": "3",
        "prompt6": "Coalfell has 1 yellow gear, 5 green gears, and 5 blue gears. <br><br> How responsible was each gear used here (outlined in black) for the success?",
        "slide6": "trials/trial3-6.png"
    },
    {
        "trial": "4",
        "prompt6": "Romsey has 1 yellow gear, 5 green gears, and 5 blue gears. <br><br> How responsible was each gear used here (outlined in black) for the success?",
        "slide6": "trials/trial4-6.png"
    },
    {
        "trial": "5",
        "prompt6": "Islesbury has 4 yellow gears, 5 green gears, and 1 blue gear. <br><br> How responsible was each gear used here (outlined in black) for the success?",
        "slide6": "trials/trial5-6.png"
    },
    {
        "trial": "6",
        "prompt6": "Airedale has 5 yellow gears, 4 green gears, and 1 blue gear. <br><br> How responsible was each gear used here (outlined in black) for the success?",
        "slide6": "trials/trial6-6.png"
    },
    {
        "trial": "7",
        "prompt6": "Martslock has 5 yellow gears, 2 green gears, and 5 blue gears. <br><br> How responsible was each gear used here (outlined in black) for the success?",
        "slide6": "trials/trial7-6.png"
    },
    {
        "trial": "8",
        "prompt6": "Doncaster has 5 yellow gears, 2 green gears, and 5 blue gears. <br><br> How responsible was each gear used here (outlined in black) for the success?",
        "slide6": "trials/trial8-6.png"
    },
    {
        "trial": "9",
        "prompt6": "Silverkeep has 5 yellow gears, 5 green gears, and 2 blue gears. <br><br> How responsible was each gear used here (outlined in black) for the success?",
        "slide6": "trials/trial9-6.png"
    },
    {
        "trial": "10",
        "prompt6": "Elryne has 2 yellow gears, 4 green gears, and 5 blue gears. <br><br> How responsible was each gear used here (outlined in black) for the success?",
        "slide6": "trials/trial10-6.png"
    },
    {
        "trial": "11",
        "prompt6": "Wimborne has 4 yellow gears, 5 green gears, and 2 blue gears. <br><br> How responsible was each gear used here (outlined in black) for the success?",
        "slide6": "trials/trial11-6.png"
    },
    {
        "trial": "12",
        "prompt6": "Timeston has 2 yellow gears, 5 green gears, and 4 blue gears. <br><br> How responsible was each gear used here (outlined in black) for the success?",
        "slide6": "trials/trial12-6.png"
    },
    {
        "trial": "13",
        "prompt6": "Bellmoral has 2 yellow gears, 4 green gears, and 4 blue gears. <br><br> How responsible was each gear used here (outlined in black) for the success?",
        "slide6": "trials/trial13-6.png"
    },
    {
        "trial": "14",
        "prompt6": "Roselake has 2 yellow gears, 4 green gears, and 4 blue gears. <br><br> How responsible was each gear used here (outlined in black) for the success?",
        "slide6": "trials/trial14-6.png"
    },
    {
        "trial": "15",
        "prompt6": "Everton has 3 yellow gears, 5 green gears, and 5 blue gears. <br><br> How responsible was each gear used here (outlined in black) for the success?",
        "slide6": "trials/trial15-6.png"
    },
    {
        "trial": "16",
        "prompt6": "Blencalgo has 3 yellow gears, 4 green gears, and 5 blue gears. <br><br> How responsible was each gear used here (outlined in black) for the success?",
        "slide6": "trials/trial16-6.png"
    },
    {
        "trial": "17",
        "prompt6": "Merton has 3 yellow gears, 3 green gears, and 5 blue gears. <br><br> How responsible was each gear used here (outlined in black) for the success?",
        "slide6": "trials/trial17-6.png"
    },
    {
        "trial": "18",
        "prompt6": "Pernrith has 5 yellow gears, 3 green gears, and 3 blue gears. <br><br> How responsible was each gear used here (outlined in black) for the success?",
        "slide6": "trials/trial18-6.png"
    },
    {
        "trial": "19",
        "prompt6": "Sherfield has 3 yellow gears, 4 green gears, and 4 blue gears. <br><br> How responsible was each gear used here (outlined in black) for the success?",
        "slide6": "trials/trial19-6.png"
    },
    {
        "trial": "20",
        "prompt6": "Beckton has 3 yellow gears, 4 green gears, and 4 blue gears. <br><br> How responsible was each gear used here (outlined in black) for the success?",
        "slide6": "trials/trial20-6.png"
    },
    {
        "trial": "21",
        "prompt6": "Ayrith has 4 yellow gears, 3 green gears, and 3 blue gears. <br><br> How responsible was each gear used here (outlined in black) for the success?",
        "slide6": "trials/trial21-6.png"
    },
    {
        "trial": "22",
        "prompt6": "Norton has 4 yellow gears, 3 green gears, and 3 blue gears. <br><br> How responsible was each gear used here (outlined in black) for the success?",
        "slide6": "trials/trial22-6.png"
    },
    {
        "trial": "X1",
        "prompt6": "Damerel has 1 yellow gear, 1 green gear, and 1 blue gear. <br><br> How responsible was each gear used here (outlined in black) for the success?",
        "slide6": "trials/trialX1-6.png"
    }
];

var all_images = [
    "trials/trial1-6.png",
    "trials/trial22-6.png",
    "trials/trial1-5.png",
    "trials/trial20-6.png",
    "trials/trial3-6.png",
    "trials/trial19-6.png",
    "trials/trial7-6.png",
    "trials/trial5-6.png",
    "trials/trial1-2.png",
    "trials/trial2-6.png",
    "trials/trial21-6.png",
    "trials/trial2-5.png",
    "trials/trialX1-6.png",
    "trials/trial4-6.png",
    "trials/trial18-6.png",
    "trials/trial6-6.png",
    "trials/trial2-2.png",
    "trials/trial14-6.png",
    "trials/trialE1-1.png",
    "trials/trial8-6.png",
    "trials/trial16-6.png",
    "trials/trialE1-3.png",
    "trials/trialE1-2.png",
    "trials/trial12-6.png",
    "trials/trialE1-5.png",
    "trials/trial10-6.png",
    "trials/trialE1-4.png",
    "trials/trial9-6.png",
    "trials/trial17-6.png",
    "trials/trialE2-2.png",
    "trials/trial15-6.png",
    "trials/trial11-6.png",
    "trials/trialE2-6.png",
    "trials/trialE2-4.png",
    "trials/trialE2-5.png",
    "trials/trial13-6.png"
];