var start_prompt1 = "Correct! You'll now be asked similar questions about various villages. We'll only show you villages that successfully built ships, and we're interested in seeing how responsible you think each craftsperson involved was for the success.";

var start_prompt2 = "Great! To speed up the experiment, for the rest of the villages, you'll only see the final scene showing all the craftspeople, with the three who were available to help build the ship outlined in blue. <br> <br> Remember that every craftsperson can possibly say \"yes\" or \"no\", and the bar above each person indicates whether they are generally <span style=\"color:red\"> <b> more busy</b></span> (more likely to say \"no\") or <span style=\"color:green\"><b> less busy </b></span> (less likely to say \"no\").";

var example_trial_info = [
    {
        "trial": "E1",
        "prompt1": "Imagine a coastal land with many villages that produce ships. Each ship is made out of wood, metal, and fabric.",
        "slide1": "trials/trialE1-1.png",
        "prompt2": "The villages are inhabited by various craftspeople including carpenters (who work with wood), blacksmiths (who work with metal), and tailors (who work with fabric). Each ship requires one craftsperson of each type to build.",
        "slide2": "trials/trialE1-2.png",
        "prompt3": "Some villages have the same number of each type of craftsperson, but other villages have more of one type and fewer of another. For instance, the village Aramoor has 3 carpenters, 2 blacksmiths, and 3 tailors.",
        "slide3": "trials/trialE1-3.png",
        "prompt4": "Whenever a village gets an order for a new ship, it must find craftspeople to fulfill the order. Craftspeople tend to be very busy, so many of them have to say \"no\" when asked to help build the ship.",
        "slide4": "trials/trialE1-4.png",
        "prompt5": "Some craftspeople are generally busier than others. This is indicated by a bar above each person: a high red bar means <span style=\"color:red\"><b>more busy</b></span> and a low green bar means <span style=\"color:green\"><b> less busy</b></span>. Those that are more busy (such as the carpenter and the blacksmith) are more likely to say \"no\" compared to those that are less busy (such as the tailor).",
        "slide5": "trials/trialE1-5.png",
        "prompt6": "There is a small chance that craftspeople who are less busy will still say \"no\" or that those who are more busy will actually say \"yes\". Here, Aramoor was unable to find a blacksmith available to help, so unfortunately it failed to build a ship. The craftspeople who were available to help are outlined in blue.",
        "slide6": "trials/trialE1-6.png"
    },
    {
        "trial": "E2",
        "prompt3": "As another example, the village Skystead has 2 carpenters, 2 blacksmiths, and 4 tailors.",
        "slide3": "trials/trialE2-3.png",
        "prompt5": "Shown above some people is an indicator of whether they are generally <span style=\"color:red\"><b> more busy</b></span> or <span style=\"color:green\"><b> less busy </b></span>.",
        "slide5": "trials/trialE2-5.png",
        "prompt6": "Skystead was able to find one craftsperson of each type available to help (outlined in blue), so here building the ship was a success! <br><br> In this experiment, we'll show you scenes like this depicting different villages that successfully built ships. We're interested in seeing how responsible you think each craftsperson who ended up helping was for the success.",
        "slide6": "trials/trialE2-6.png",
        "prompt7": "How responsible was each person (outlined in blue) here for the success?",
        "slide7": "trials/trialE2-7.png"
    }
];

var full_trial_info = [
    {
        "trial": "1",
        "prompt3": "The village Llyn has 1 carpenter, 3 blacksmiths, and 2 tailors.",
        "slide3": "trials/trial1-3.png",
        "prompt6": "Shown above some people is an indicator of whether they are generally <span style=\"color:red\"><b> more busy</b></span> or <span style=\"color:green\"><b> less busy </b></span>. Llyn was able to find one craftsperson of each type, so it successfully built a ship.",
        "slide6": "trials/trial1-6.png",
        "prompt7": "How responsible was each person (outlined in blue) here for the success?",
        "slide7": "trials/trial1-7.png"
    },
    {
        "trial": "2",
        "prompt3": "The village Frostford has 1 carpenter, 3 blacksmiths, and 3 tailors.",
        "slide3": "trials/trial2-3.png",
        "prompt6": "Shown above some people is an indicator of whether they are generally <span style=\"color:red\"><b> more busy</b></span> or <span style=\"color:green\"><b> less busy </b></span>. Frostford was able to find one craftsperson of each type, so it successfully built a ship.",
        "slide6": "trials/trial2-6.png",
        "prompt7": "How responsible was each person (outlined in blue) here for the success?",
        "slide7": "trials/trial2-7.png"
    }
];

var condensed_trial_info = [
    {
        "trial": "3",
        "prompt7": "Coalfell has 1 carpenter, 5 blacksmiths, and 5 tailors. <br><br> How responsible was each person (outlined in blue) here for the success?",
        "slide7": "trials/trial3-7.png"
    },
    {
        "trial": "4",
        "prompt7": "Romsey has 1 carpenter, 5 blacksmiths, and 5 tailors. <br><br> How responsible was each person (outlined in blue) here for the success?",
        "slide7": "trials/trial4-7.png"
    },
    {
        "trial": "5",
        "prompt7": "Islesbury has 1 carpenter, 4 blacksmiths, and 5 tailors. <br><br> How responsible was each person (outlined in blue) here for the success?",
        "slide7": "trials/trial5-7.png"
    },
    {
        "trial": "6",
        "prompt7": "Airedale has 4 carpenters, 5 blacksmiths, and 1 tailor. <br><br> How responsible was each person (outlined in blue) here for the success?",
        "slide7": "trials/trial6-7.png"
    },
    {
        "trial": "7",
        "prompt7": "Martslock has 5 carpenters, 2 blacksmiths, and 5 tailors. <br><br> How responsible was each person (outlined in blue) here for the success?",
        "slide7": "trials/trial7-7.png"
    },
    {
        "trial": "8",
        "prompt7": "Doncaster has 2 carpenters, 5 blacksmiths, and 5 tailors. <br><br> How responsible was each person (outlined in blue) here for the success?",
        "slide7": "trials/trial8-7.png"
    },
    {
        "trial": "9",
        "prompt7": "Silverkeep has 2 carpenters, 5 blacksmiths, and 5 tailors. <br><br> How responsible was each person (outlined in blue) here for the success?",
        "slide7": "trials/trial9-7.png"
    },
    {
        "trial": "10",
        "prompt7": "Elryne has 4 carpenters, 5 blacksmiths, and 2 tailors. <br><br> How responsible was each person (outlined in blue) here for the success?",
        "slide7": "trials/trial10-7.png"
    },
    {
        "trial": "11",
        "prompt7": "Wimborne has 2 carpenters, 4 blacksmiths, and 5 tailors. <br><br> How responsible was each person (outlined in blue) here for the success?",
        "slide7": "trials/trial11-7.png"
    },
    {
        "trial": "12",
        "prompt7": "Timeston has 5 carpenters, 4 blacksmiths, and 2 tailors. <br><br> How responsible was each person (outlined in blue) here for the success?",
        "slide7": "trials/trial12-7.png"
    },
    {
        "trial": "13",
        "prompt7": "Bellmoral has 4 carpenters, 2 blacksmiths, and 4 tailors. <br><br> How responsible was each person (outlined in blue) here for the success?",
        "slide7": "trials/trial13-7.png"
    },
    {
        "trial": "14",
        "prompt7": "Roselake has 4 carpenters, 4 blacksmiths, and 2 tailors. <br><br> How responsible was each person (outlined in blue) here for the success?",
        "slide7": "trials/trial14-7.png"
    },
    {
        "trial": "15",
        "prompt7": "Everton has 5 carpenters, 5 blacksmiths, and 3 tailors. <br><br> How responsible was each person (outlined in blue) here for the success?",
        "slide7": "trials/trial15-7.png"
    },
    {
        "trial": "16",
        "prompt7": "Blencalgo has 5 carpenters, 4 blacksmiths, and 3 tailors. <br><br> How responsible was each person (outlined in blue) here for the success?",
        "slide7": "trials/trial16-7.png"
    },
    {
        "trial": "17",
        "prompt7": "Merton has 3 carpenters, 5 blacksmiths, and 3 tailors. <br><br> How responsible was each person (outlined in blue) here for the success?",
        "slide7": "trials/trial17-7.png"
    },
    {
        "trial": "18",
        "prompt7": "Pernrith has 5 carpenters, 3 blacksmiths, and 3 tailors. <br><br> How responsible was each person (outlined in blue) here for the success?",
        "slide7": "trials/trial18-7.png"
    },
    {
        "trial": "19",
        "prompt7": "Sherfield has 3 carpenters, 4 blacksmiths, and 4 tailors. <br><br> How responsible was each person (outlined in blue) here for the success?",
        "slide7": "trials/trial19-7.png"
    },
    {
        "trial": "20",
        "prompt7": "Beckton has 4 carpenters, 4 blacksmiths, and 3 tailors. <br><br> How responsible was each person (outlined in blue) here for the success?",
        "slide7": "trials/trial20-7.png"
    },
    {
        "trial": "21",
        "prompt7": "Ayrith has 3 carpenters, 4 blacksmiths, and 3 tailors. <br><br> How responsible was each person (outlined in blue) here for the success?",
        "slide7": "trials/trial21-7.png"
    },
    {
        "trial": "22",
        "prompt7": "Norton has 4 carpenters, 3 blacksmiths, and 3 tailors. <br><br> How responsible was each person (outlined in blue) here for the success?",
        "slide7": "trials/trial22-7.png"
    },
    {
        "trial": "X1",
        "prompt7": "Damerel has 1 carpenter, 1 blacksmith, and 1 tailor. <br><br> How responsible was each person (outlined in blue) here for the success?",
        "slide7": "trials/trialX1-7.png"
    }
];

var all_images = [
    "trials/trial1-6.png",
    "trials/trial22-7.png",
    "trials/trial1-7.png",
    "trials/trial3-7.png",
    "trials/trial20-7.png",
    "trials/trial7-7.png",
    "trials/trial19-7.png",
    "trials/trial1-3.png",
    "trials/trial5-7.png",
    "trials/trial21-7.png",
    "trials/trial2-7.png",
    "trials/trial2-6.png",
    "trials/trialX1-7.png",
    "trials/trial4-7.png",
    "trials/trial2-3.png",
    "trials/trial6-7.png",
    "trials/trial18-7.png",
    "trials/trial14-7.png",
    "trials/trialE1-1.png",
    "trials/trialE1-3.png",
    "trials/trialE1-2.png",
    "trials/trial16-7.png",
    "trials/trial8-7.png",
    "trials/trialE1-6.png",
    "trials/trial12-7.png",
    "trials/trialE1-5.png",
    "trials/trial10-7.png",
    "trials/trialE1-4.png",
    "trials/trial17-7.png",
    "trials/trial9-7.png",
    "trials/trial15-7.png",
    "trials/trialE2-3.png",
    "trials/trialE2-7.png",
    "trials/trialE2-6.png",
    "trials/trial11-7.png",
    "trials/trial13-7.png",
    "trials/trialE2-5.png"
];